using Microsoft.AspNet.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace Aspnet5Ng2.Controllers
{
    [Route("api/[controller]")]
	public class NamesController : Controller
    {
		//[NoCache]
		[HttpGet]
		public async Task<ActionResult> GetAll() {
			var list = await Task<IEnumerable<string>>.Factory.StartNew(
				() => new string[] { "Pippo", "Pluto", "Paperino" });
			return Json(list);
		}
    }
}