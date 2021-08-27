using ApplicationTeaching.Data;
using ApplicationTeaching.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApplicationTeaching.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ItemsController:ControllerBase
    {
        private readonly MarketplaceDbContext dbContext;

        public ItemsController(MarketplaceDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IEnumerable<Item> Get()
        {
            return dbContext.Items.ToList();
        }
    }
}
