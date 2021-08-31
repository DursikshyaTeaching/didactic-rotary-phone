using ApplicationTeaching.ViewModel;
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
        public string ImageUrl { get; set; }
        public string Category { get; set; }
        public decimal Price { get; set; }

        public static explicit operator Item(ItemViewModel item)
        {
            return new Item()
            {
                Name = item.Name,
                Description = item.Description,
                Category = item.Category,
                Price = item.Price
            };
        }

    }
}
