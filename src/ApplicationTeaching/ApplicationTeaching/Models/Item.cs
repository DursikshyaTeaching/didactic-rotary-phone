using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApplicationTeaching.Models
{
    public class Item:ModelBase
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string CategoryId { get; set; }
        public Category Category { get; set; }
        public decimal Price { get; set; }

    }
}
