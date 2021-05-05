using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyTech.Api.Requests
{
    public class UpdateProductRequest
    {
        public string newProductText { get; set; }
        public string newSelectedProvider { get; set; }
        public double newProductPrice { get; set; }
        public int newProductStock { get; set; }
    }
}