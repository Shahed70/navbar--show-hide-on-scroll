let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  console.log("got it");
  let navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
});

let headerFixed = document.querySelector(".myheader");
window.addEventListener("scroll", function myFunc() {
  if (window.scrollY > 200) {
    headerFixed.classList.remove("header-remove");
    headerFixed.classList.add("header-fixed");
  } else {
    headerFixed.classList.remove("header-fixed");
    headerFixed.classList.add("header-remove");
  }
});
