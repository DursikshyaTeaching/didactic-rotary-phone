using ApplicationTeaching.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
namespace ApplicationTeaching.Data
{
    public class MarketplaceDbContext: IdentityDbContext
    {
        public MarketplaceDbContext(DbContextOptions<MarketplaceDbContext> options)
            :base(options)
        {

        }
        public DbSet<Item> Items { get; set; }

    }
}
