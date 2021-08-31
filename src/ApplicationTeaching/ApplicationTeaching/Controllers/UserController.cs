using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApplicationTeaching.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        [HttpGet("{action}")]
        public string UserName()
        {
            if (!HttpContext.User.Identity.IsAuthenticated)
            {
                HttpContext.Response.StatusCode = 401;
                return "";
            }
            return HttpContext.User.Identity.Name;
        }

        

        //[HttpGet("{action}")]
        //public string IsLoggedIn()
        //{
        //    return HttpContext.User.Identity.Name;
        //}


    }
}
