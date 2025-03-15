using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mission10.Data;

namespace Mission10.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlerLeagueController : ControllerBase
    {
        private BowlerDbContext _bowlerContext;
        public BowlerLeagueController(BowlerDbContext bowlerContext)
        {
            _bowlerContext = bowlerContext;
        }

        [HttpGet(Name="GetBowlingLeague")]
        public IEnumerable<BowlingLeague> Get()
        {
            var bowlers = _bowlerContext.Bowlers.ToList();

            return bowlers;
        }
    }
}
