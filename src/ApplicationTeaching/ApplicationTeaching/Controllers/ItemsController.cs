using ApplicationTeaching.Data;
using ApplicationTeaching.Models;
using ApplicationTeaching.ViewModel;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace ApplicationTeaching.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ItemsController:ControllerBase
    {
        private readonly MarketplaceDbContext dbContext;
        private readonly IWebHostEnvironment webHostEnvironment;

        public ItemsController(MarketplaceDbContext dbContext,IWebHostEnvironment webHostEnvironment)
        {
            this.dbContext = dbContext;
            this.webHostEnvironment = webHostEnvironment;
        }

        [HttpGet]
        public IEnumerable<Item> Get()
        {
            return dbContext.Items.ToList();
        }


        private Task Upload(IFormFile file)
        {
            string uploads = Path.Combine(webHostEnvironment.WebRootPath, "uploads");
            //Create directory if it doesn't exist 
            Directory.CreateDirectory(uploads);


            if (file.Length > 0)
            {
                string filePath = Path.Combine(uploads, file.FileName);
                using (Stream fileStream = new FileStream(filePath, FileMode.Create, FileAccess.Write))
                {
                    file.CopyTo(fileStream);
                }
            }
            return Task.CompletedTask;
        }

        [HttpPost("addImage")]
        public void AddImage(IFormFile file)
        {
            Upload(file);
        }



        [HttpPost]
        public void AddItem([FromForm]ItemViewModel model)
        {

            var item = (Item)model;
            Upload(model.Image);

            item.ImageUrl = "/uploads/" + model.Image.FileName;

            dbContext.Items.Add(item);
            dbContext.SaveChanges();
        }
    }
}
