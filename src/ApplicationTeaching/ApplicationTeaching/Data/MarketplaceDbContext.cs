using ApplicationTeaching.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApplicationTeaching.Data
{
    public class MarketplaceDbContext:DbContext
    {
        public MarketplaceDbContext(DbContextOptions<MarketplaceDbContext> options)
            :base(options)
        {

        }
        public DbSet<Item> Items { get; set; }
        public DbSet<Category> Categories { get; set; }


    }
}
