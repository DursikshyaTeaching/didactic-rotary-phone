using ApplicationTeaching.ViewModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApplicationTeaching.Controllers
{
    public class AccountController:Controller
    {
        private readonly UserManager<IdentityUser> userManager;
        private readonly SignInManager<IdentityUser> signInManager;

        public AccountController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
        }
        [HttpGet]

        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Register(RegisterViewModel model)
        {
            var user = new IdentityUser(model.Password) { Email = model.Email };
            var result = userManager.CreateAsync(user, model.Password);
            if (result.Result.Succeeded)
            {
                signInManager.PasswordSignInAsync(user, model.Password, true, default);
                return Redirect("/");
            }

            return RedirectToAction(nameof(Register));
        }

        [HttpGet]
        public IActionResult Login(RegisterViewModel model)
        {
            return View();
        }



        [HttpPost]
        public IActionResult Login(LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                var result = signInManager.PasswordSignInAsync(model.Username, model.Password, true, default);
                if(result.Result.Succeeded) return Redirect("/");

                return RedirectToAction(nameof(Login));
            }

            return Redirect("/");
        }
    }
}
