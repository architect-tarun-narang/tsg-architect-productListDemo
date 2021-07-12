using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        [HttpGet]
        [Route("getProducts")]

        public IActionResult getProducts()
        {
            List<Product> _productList = new List<Product>();
            Product p = null;

            p = new Product { Id = 1, Name = "Pencil", Brand = "Natraj", Price = 1, Quantity = 1 };
            _productList.Add(p);
            p = new Product { Id = 2, Name = "Pen", Brand = "Reynolds", Price = 10, Quantity = 1 };
            _productList.Add(p);
            p = new Product { Id = 3, Name = "SoftDrinks", Brand = "Coca Cola", Price = 20, Quantity = 1 };
            _productList.Add(p);
            p = new Product { Id = 4, Name = "Pizza", Brand = "Dominos", Price = 500, Quantity = 1 };
            _productList.Add(p);
            return Ok(_productList);
        }
            
            
    }
}
