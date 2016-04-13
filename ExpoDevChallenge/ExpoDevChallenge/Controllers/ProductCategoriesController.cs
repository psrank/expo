using System.Collections;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using ExpoDevChallenge.Models;


namespace ExpoDevChallenge.Controllers
{
    [EnableCors(origins: "http://localhost:3006", headers: "*", methods: "get")]
    public class ProductCategoriesController : ApiController
    {

        private readonly ProductSupplierContext _ctx = new ProductSupplierContext();

        public IEnumerable Get()
        {
            var result = _ctx.ProductCategories.Select(t => new { Id = t.Id, ProductCategoryName = t.ProductCategoryName });

            return result;
        }
    }
}
