using Dapper;
using MyTech.Database.Exceptions;
using MyTech.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyTech.Database.Repositories
{
    public class ProductsRepository : BaseRepository
    {
        public List<Product> QueryProducts()
        {
            using (var connection = CreateConnection())
            {
                return connection.Query<Product>("query_products", commandType: CommandType.StoredProcedure).AsList();
            }
        }

        public Product QueryProductById(int id)
        {
            using (var connection = CreateConnection())
            {
                var parameters = new DynamicParameters();

                parameters.Add("p_id", id);

                var product = connection.Query<Product>("query_product_by_id", parameters, commandType: CommandType.StoredProcedure).FirstOrDefault();

                if (product == null)
                {
                    throw new EntityNotFoundException();
                }

                return product;
            }
        }

        public Product InsertProduct(string productText, string selectedProvider, double productPrice, int productStock)
        {
            using (var connection = CreateConnection())
            {
                var parameters = new DynamicParameters();

                parameters.Add("p_id", dbType: DbType.Int32, direction: ParameterDirection.Output);
                parameters.Add("p_name", productText);
                parameters.Add("p_provider", selectedProvider);
                parameters.Add("p_price", productPrice);
                parameters.Add("p_stock", productStock);

                connection.Execute("insert_product", parameters, commandType: CommandType.StoredProcedure);

                var id = parameters.Get<int>("p_id");

                return new Product(id, productText, selectedProvider, productPrice, productStock);
            }
        }

        public Product UpdateProduct(Product product, string newProductText, string newSelectedProvider, double newProductPrice, int newProductStock)
        {
            using (var connection = CreateConnection())
            {
                var parameters = new DynamicParameters();

                parameters.Add("p_id", product.Id);
                parameters.Add("p_name", newProductText);
                parameters.Add("p_provider", newSelectedProvider);
                parameters.Add("p_price", newProductPrice);
                parameters.Add("p_stock", newProductStock);

                connection.Execute("update_product", parameters, commandType: CommandType.StoredProcedure);

                return new Product(product.Id, newProductText, newSelectedProvider, newProductPrice, newProductStock);
            }
        }

        public void DeleteProduct(int id)
        {
            using (var connection = CreateConnection())
            {
                var parameters = new DynamicParameters();

                parameters.Add("p_id", id);

                connection.Execute("delete_product", parameters, commandType: CommandType.StoredProcedure);
            }
        }
    }
}
