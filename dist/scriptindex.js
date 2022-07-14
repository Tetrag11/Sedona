gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline();
const timeline_3 = gsap.timeline();
const menu = gsap.timeline();
const menuLink = gsap.timeline();

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
      .to(".loader-lines", { opacity: 0, stagger: 0.2 })
      .to(".loader", { display: "none" })
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
}

function loaderdestroy() {
  document.querySelector(".body").style.overflowY = "visible";
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

// menu

function menuappear() {
  document.querySelector(".menu").style.display = "block";
}

function menudisappear() {
  document.querySelector(".menu").style.display = "none";
}

function openMenu() {
  menu
    .to(".openMenu", { pointerEvents: "none" })
    .to(".closeMenu", { pointerEvents: "none" }, "<")
    .to(".animation-content-2", { opacity: 0 }, "<")
    .to(".openMenu", { opacity: 0 }, "<")
    .to(".closeMenu", { opacity: 0 }, "<")
    .to(".menu", { display: "block" }, "<")
    .to(".menu-line-items", { opacity: 1, stagger: -0.1 }, "<")
    .to(".closeMenu", { opacity: 1 })
    .to(".menu-tab-mob-appear", { opacity: 1 }, "< 0.2")
    .to(".openMenu", { pointerEvents: "auto" })
    .to(".closeMenu", { pointerEvents: "auto" }, "<");
}

function closeMenu() {
  menu
    .to(".openMenu", { pointerEvents: "none" })
    .to(".closeMenu", { pointerEvents: "none", opacity: 0 }, "<")
    .to(".menu-tab-mob-appear", { opacity: 0 }, "<")
    .to(".menu-line-items", { opacity: 0, stagger: 0.2 }, "<")
    .add(menudisappear)
    .to(".animation-content-2", { opacity: 1 })
    .to(".openMenu", { pointerEvents: "auto", opacity: 1 })
    .to(".closeMenu", { pointerEvents: "auto" }, "<");
}

function project() {
  function projectL() {
    location.replace("./index.html");
  }
  menuLink.to(".animation-content", { opacity: 0, duration: 1 }).add(projectL);
}

function architecture() {
  function projectL() {
    location.replace("./architecture.html");
  }
  menuLink.to(".animation-content", { opacity: 0, duration: 1 }).add(projectL);
}

function lifestyle() {
  function projectL() {
    location.replace("./lifestyle.html");
  }
  menuLink.to(".animation-content", { opacity: 0, duration: 1 }).add(projectL);
}

function production() {
  function projectL() {
    location.replace("./production.html");
  }
  menuLink.to(".animation-content", { opacity: 0, duration: 1 }).add(projectL);
}

function contact() {
  function projectL() {
    location.replace("./contact.html");
  }
  menuLink.to(".animation-content", { opacity: 0, duration: 1 }).add(projectL);
}
