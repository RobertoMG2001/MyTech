using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyTech.Api.Requests
{
    public class AddProductRequest
    {
        public string ProductText{ get; set; }
        public string SelectedProvider { get; set; }
        public double ProductPrice { get; set; }
        public int ProductStock { get; set; }
    }
}