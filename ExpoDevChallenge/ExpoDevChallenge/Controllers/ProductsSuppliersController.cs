using System.Collections;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using ExpoDevChallenge.Models;

namespace ExpoDevChallenge.Controllers
{
    [EnableCors(origins: "http://localhost:3006", headers: "*", methods: "get")]
    public class ProductsSuppliersController : ApiController
    {

        private readonly ProductSupplierContext _ctx = new ProductSupplierContext();


        public IEnumerable Get(string supplier = "", string productCategory = "")
        {
            var joinedResult = from p in _ctx.Products
                              join s in _ctx.Suppliers on p.SupplierId equals s.Id
                              join pc in _ctx.ProductCategories on p.ProductCategoryId equals pc.Id
                              select new 
                              {
                                  Id = p.Id,
                                  Supplier =  s.SupplierName,
                                  Product = pc.ProductCategoryName,
                                  Price = p.Price.Value
                              };

            if (!string.IsNullOrEmpty(supplier))
                joinedResult = joinedResult.Where(t => t.Supplier == supplier);

            if (!string.IsNullOrEmpty(productCategory))
                joinedResult = joinedResult.Where(t=> t.Product == productCategory);

            return joinedResult;
        }
    }
}
