using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyTech.Database.Repositories
{
    public class BaseRepository
    {
        private readonly string _connectionString =
            ConfigurationManager.ConnectionStrings["my_tech"].ToString();

        public MySqlConnection CreateConnection()
        {
            return new MySqlConnection(_connectionString);
        }
    }
}
