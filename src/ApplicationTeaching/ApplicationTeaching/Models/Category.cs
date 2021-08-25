using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApplicationTeaching.Models
{
    public class Category:ModelBase
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public IEnumerable<Item> Items { get; set; }

    }
}
