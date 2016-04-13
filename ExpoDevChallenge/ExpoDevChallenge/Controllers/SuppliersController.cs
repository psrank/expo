using System.Collections;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using ExpoDevChallenge.Models;

namespace ExpoDevChallenge.Controllers
{
    [EnableCors(origins: "http://localhost:3006", headers: "*", methods: "get")]
    public class SuppliersController : ApiController
    {
        private readonly ProductSupplierContext ctx = new ProductSupplierContext();

        public IEnumerable Get()
        {
            var result = ctx.Suppliers.Select(t => new {Id = t.Id, SupplierName = t.SupplierName});

            return result;
        }
    }
}
