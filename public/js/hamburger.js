const hamburger = document.querySelector("#hamburger");
const sidemenu = document.querySelector("#side-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger__active");
  sidemenu.classList.toggle("side-menu__active");
});
