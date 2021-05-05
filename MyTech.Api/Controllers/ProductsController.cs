using MyTech.Api.Requests;
using MyTech.Api.Utils;
using MyTech.Database.Exceptions;
using MyTech.Database.Repositories;
using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace MyTech.Api.Controllers
{
    [RoutePrefix("api/products")]
    [System.Web.Http.Cors.EnableCors("*", "*", "*")]
    public class ProductsController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage GetProducts()
        {
            try
            {
                var products = new ProductsRepository().QueryProducts();

                return Request.CreateResponse(HttpStatusCode.OK, products);
            }
            catch(Exception e)
            {
                return ResponseHandlers.HandleInternalServerError(Request, e);
            }
        }

        [HttpGet]
        [Route("{id}")]
        public HttpResponseMessage GetProductById(int id)
        {
            try
            {
                var products = new ProductsRepository().QueryProductById(id);

                return Request.CreateResponse(HttpStatusCode.OK, products);
            }
            catch (Exception e)
            {
                return ResponseHandlers.HandleInternalServerError(Request, e);
            }
        }

        [HttpPost]
        public HttpResponseMessage AddProduct(AddProductRequest request)
        {
            try
            {
                var product = new ProductsRepository().InsertProduct(request.ProductText, request.SelectedProvider, request.ProductPrice, request.ProductStock);
                return Request.CreateResponse(HttpStatusCode.OK, product);
            }
            catch (Exception e)
            {
                return ResponseHandlers.HandleInternalServerError(Request, e);
            }
        }

        [HttpPut]
        [Route("{id}")]
        public HttpResponseMessage UpdateProduct([FromUri] int id, [FromBody] UpdateProductRequest request)
        {
            try
            {
                var productsRepository = new ProductsRepository();

                var product = productsRepository.QueryProductById(id);

                var updatedProduct = productsRepository.UpdateProduct(
                    product, 
                    request.newProductText, 
                    request.newSelectedProvider, 
                    request.newProductPrice, 
                    request.newProductStock
                    );

                return Request.CreateResponse(HttpStatusCode.OK, updatedProduct);
            }
            catch (EntityNotFoundException)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
            catch (Exception e)
            {
                return ResponseHandlers.HandleInternalServerError(Request, e);
            }
        }

        [HttpDelete]
        [Route("{id}")]
        public HttpResponseMessage DeleteProduct(int id)
        {
            try
            {
                new ProductsRepository().DeleteProduct(id);

                return Request.CreateResponse(HttpStatusCode.OK);
            }
            catch (Exception e)
            {
                return ResponseHandlers.HandleInternalServerError(Request, e);
            }
        }
    }
}