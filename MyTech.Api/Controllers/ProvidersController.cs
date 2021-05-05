using MyTech.Api.Requests;
using MyTech.Api.Utils;
using MyTech.Database.Repositories;
using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace MyTech.Api.Controllers
{
    [RoutePrefix("api/providers")]
    [System.Web.Http.Cors.EnableCors("*", "*", "*")]
    public class ProvidersController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage GetProviders()
        {
            try
            {
                var todos = new ProvidersRepository().QueryProviders();
                return Request.CreateResponse(HttpStatusCode.OK, todos);
            }
            catch (Exception e)
            {
                return ResponseHandlers.HandleInternalServerError(Request, e);
            }
        }

        [HttpPost]
        public HttpResponseMessage AddProvider ([FromBody] AddProviderRequest request)
        {
            try
            {
                var provider = new ProvidersRepository().InsertProvider(request.Name);

                return Request.CreateResponse(HttpStatusCode.OK, provider);
            }
            catch (Exception e)
            {
                return ResponseHandlers.HandleInternalServerError(Request, e);
            }
        }

        [HttpDelete]
        [Route("{id}")]
        public HttpResponseMessage DeleteProvider(int id)
        {
            try
            {
                new ProvidersRepository().DeleteProvider(id);

                return Request.CreateResponse(HttpStatusCode.OK);
            }
            catch (Exception e)
            {
                return ResponseHandlers.HandleInternalServerError(Request, e);
            }
        }
    }
}