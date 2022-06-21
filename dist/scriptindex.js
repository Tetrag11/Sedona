gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline();
const timeline_3 = gsap.timeline();

gsap.ticker.lagSmoothing(1000, 16);
// loader related

// loader first animation
const loaderpreload = gsap.timeline();
loaderpreload
  .from(".loader-lines", { y: "-150%", duration: 0.5, stagger: 0.1 })
  .to(".load-centered-logo", { opacity: 1 })
  .to(".loader", { backgroundColor: "transparent" });

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

    document.querySelector(".body-content").style.display = "block";

    timeline
      .to(".load-centered-logo", { opacity: 0, duration: 0.5 })
      .to(".loader-lines", { opacity: 0, duration: 0.5, stagger: 0.2 })
      .to(".sls-animation", { opacity: 1, duration: 1.5 })
      .to(".sls-animation", { opacity: 0, duration: 1.5 })
      .to(".fade-in", { opacity: 1, stagger: 0.2 })
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
  document.querySelector(".loader").style.display = "none";
  document.querySelector(".body").style.overflowY = "visible";
  gsap.to(".fade-in-green", { opacity: 0 });
  document.querySelector(".web-green-layer").style.background =
    "linear-gradient(180.3deg, #2B3C1F 0.26%, #6A7736 99.74%)";
}

function loaderdestroy() {
  document.querySelector(".loader").style.display = "none";
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
