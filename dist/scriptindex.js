gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline();
const timeline_3 = gsap.timeline();

gsap.ticker.lagSmoothing(1000, 16);
// loader related

// loader first animation
const loaderpreload = gsap.timeline();
loaderpreload.to(".load-centered-logo", { opacity: 1 });
let load = false;
let loadtime = false;
let seconds = 0;
let image = document.querySelector(".header-back-image");

window.addEventListener("load", (event) => {
  load = true;
});

function increment() {
  seconds += 1;
  if (seconds > 2 && load == true) {
    // document.querySelector(".loader").style.display = "none";

    // document.querySelector(".body-content").style.display = "block";

    timeline
      .to(".load-centered-logo", { opacity: 0, duration: 0.5 })
      .to(".fade-in-green", { opacity: 1, stagger: 0.2 })
      .to(".main-vid", { opacity: 1, duration: 0.8 })
      .to(".animation-content-1", { opacity: 1 })
      .to(".animation-content-2", { opacity: 1 })
      .to(".animation-content-3", { opacity: 1 })
      .add(secondloadscreenDestroy);

    clearInterval(secondscalc);
  }
}
let secondscalc = setInterval(increment, 1000);
let hamBtnclass = document.querySelectorAll(".ham-btn");
function hamBtn() {
  hamBtnclass.forEach((hamBtnel) => {
    hamBtnel.style.pointerEvents = "auto";
  });
}

function secondloadscreenDestroy() {
  document.querySelector(".body").style.overflowY = "visible";

  document.querySelector(".web-green-layer").style.background =
    "linear-gradient(243.18deg, #2B3C1F 0%, #6A7736 100%)";
}

function loaderdestroy() {
  document.querySelector(".body").style.overflowY = "visible";
}

// navBar

const timeline_2 = gsap.timeline({
  paused: true,
});

function openNav() {
  document.querySelector(".close-btn").style.pointerEvents = "none";
  document.querySelector(".menue").style.display = "block";
  hamBtnclass.forEach((hamBtnel) => {
    hamBtnel.style.pointerEvents = "none";
  });

  gsap.to(".nav-line-left", { x: "0%", duration: 2 });
  gsap.to(".nav-line-right", { x: "0%", duration: 2 });
  gsap.to(".navbar-link", {
    opacity: 1,
    delay: 3,
    onComplete: () => {
      document.querySelector(".close-btn").style.pointerEvents = "auto";
    },
  });
}

function closeNav() {
  document.querySelector(".close-btn").style.pointerEvents = "none";
  gsap.to(".nav-line-left", { x: "-100%", duration: 2, delay: 1 });
  gsap.to(".nav-line-right", {
    x: "100%",
    duration: 2,
    delay: 1,
    onComplete: () => {
      document.querySelector(".menue").style.display = "none";
      hamBtnclass.forEach((hamBtnel) => {
        hamBtnel.style.pointerEvents = "auto";
      });
    },
  });
  gsap.to(".navbar-link", { opacity: 0 });
}

function exitAnimation() {
  timeline_3
    .to(".animation-content-3", { opacity: 0 })
    .to(".animation-content-2", { opacity: 0 })
    .to(".animation-content-1", { opacity: 0 })
    .to(".main-vid", { opacity: 0, duration: 0.8 })
    .to(".fade-in-green", { opacity: 0, stagger: -0.2 })
    .to(".main", { opacity: 0 })
    .to(".load-centered-logo", { opacity: 1, duration: 0.5 })
    .add(redirect);
}

function redirect() {
  location.replace("./map.html");
}
