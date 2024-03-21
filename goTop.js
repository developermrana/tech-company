// display bottom to top button when scroll
const goTopBtn = document.getElementById("bottomToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    goTopBtn.classList.remove("d-none");
  } else {
    goTopBtn.classList.add("d-none");
  }
});

// handle event bottom to top button
goTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// set background navbar when scroll
const navbar = document.getElementById("nav-section");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
});
