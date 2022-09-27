// Enable hidden nav bar
{
    const navbar = document.querySelector(".nav");
    let lastScrollY
  
    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY) {
        navbar.classList.add("nav--hidden");
      } else {
        navbar.classList.remove("nav--hidden");
      }
  
      lastScrollY = window.scrollY;
    });
  }