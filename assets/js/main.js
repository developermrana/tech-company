// navbar start
const showMenuIcon = document.getElementById("show-icon");
const hideMenuIcon = document.getElementById("hide-icon");
const navbar = document.querySelector("header nav ul");

function showMenu() {
  navbar.style.display = "block";
  navbar.style.top = "50px";
  showMenuIcon.classList.add("d-none");
  hideMenuIcon.classList.remove("d-none");
}

function hideMenu() {
  navbar.style.display = "none";
  hideMenuIcon.classList.add("d-none");
  showMenuIcon.classList.remove("d-none");
}

// typing animation
var typing = new Typed(".text", {
  strings: ["", "Freelancer", "Web Designer", "Web Developer"],
  typeSpeed: 120,
  backSpeed: 50,
  loop: true,
});

// Progress Bar
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target;
          const targetWidth = progressBar.getAttribute("data-target");
          progressBar.style.width = targetWidth + "%";
          // progressBar.textContent = targetWidth + "%";
          observer.unobserve(progressBar);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  document.querySelectorAll(".progress-bar").forEach((bar) => {
    observer.observe(bar);
  });
});

// splide slider code
var splide = new Splide(".splide", {
  type: "loop",
  perPage: 3,
  focus: "center",
  autoplay: true,
  height: 300,
  gap: 30,
  speed: 400,
  interval: 3000,
  pauseOnHover: true,
});

splide.mount();

// counter
var counted = 0;
$(window).scroll(function () {
  var oTop = $("#counter").offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $(".count").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 2000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          },
        }
      );
    });
    counted = 1;
  }
});

// set navbar bg 
const navigationBar = document.getElementById("full-navbar")
window.addEventListener("scroll", ()=>{
  if (window.scrollY > 200) {
    navigationBar.classList.add("set-nav-bg")
  } else {
    navigationBar.classList.remove("set-nav-bg")
  }
})

// go top btn
const goTopBtn = document.getElementById("goTop");
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    goTopBtn.style.bottom = "20px";
  } else {
    goTopBtn.style.bottom = "10000px";
  }
});
// handle event bottom to top button
goTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// loader
const loader = document.getElementById("loader");
window.addEventListener("load", () => {
  loader.style.display = "none";
});
