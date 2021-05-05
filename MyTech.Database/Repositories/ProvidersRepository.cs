
using Dapper;
using MyTech.Domain.Entities;
using System.Collections.Generic;
using System.Data;

namespace MyTech.Database.Repositories
{
    public class ProvidersRepository : BaseRepository
    {
        public List<Provider> QueryProviders()
        {
            using (var connection = CreateConnection())
            {
                return connection.Query<Provider>("query_providers", commandType: CommandType.StoredProcedure).AsList();
            }
        }

        public Provider InsertProvider(string name)
        {
            using (var connection = CreateConnection())
            {
                var parameters = new DynamicParameters();

                parameters.Add("p_id", dbType: DbType.Int32, direction: ParameterDirection.Output);
                parameters.Add("p_name", name);

                connection.Execute("insert_provider", parameters, commandType: CommandType.StoredProcedure);

                var id = parameters.Get<int>("p_id");

                return new Provider(id, name);
            }
        }

        public void DeleteProvider(int id)
        {
            using (var connection = CreateConnection())
            {
                var parameters = new DynamicParameters();

                parameters.Add("p_id", id);

                connection.Execute("delete_provider", parameters, commandType: CommandType.StoredProcedure);
            }
        }
    }
}
