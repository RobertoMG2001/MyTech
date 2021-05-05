using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyTech.Domain.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Provider { get; set; }
        public double Price { get; set; }
        public int Stock { get; set; }

        public Product()
        {

        }

        public Product(int id, string name, string provider, double price, int stock)
        {
            Id = id;
            Name = name;
            Provider = provider;
            Price = price;
            Stock = stock;
        }
    }
}
