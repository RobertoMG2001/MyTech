using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;

namespace MyTech.Api.Utils
{
    public class ResponseHandlers
    {
        public static HttpResponseMessage HandleInternalServerError(HttpRequestMessage request, Exception e)
        {
            Console.WriteLine(e.Message);
            return request.CreateResponse(HttpStatusCode.InternalServerError);
        }
    }
}