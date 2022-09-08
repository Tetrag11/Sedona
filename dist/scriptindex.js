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

// width and height
var viewportwidth;
var viewportheight;

// the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight

if (typeof window.innerWidth != "undefined") {
  (viewportwidth = window.innerWidth), (viewportheight = window.innerHeight);
}

// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
else if (
  typeof document.documentElement != "undefined" &&
  typeof document.documentElement.clientWidth != "undefined" &&
  document.documentElement.clientWidth != 0
) {
  (viewportwidth = document.documentElement.clientWidth),
    (viewportheight = document.documentElement.clientHeight);
}

// older versions of IE
else {
  (viewportwidth = document.getElementsByTagName("body")[0].clientWidth),
    (viewportheight = document.getElementsByTagName("body")[0].clientHeight);
}

//--

function increment() {
  seconds += 1;
  if (seconds > 2 && load == true) {
    // document.querySelector(".loader").style.display = "none";

    // document.querySelector(".body-content").style.display = "block";

    if (viewportwidth >= 1024) {
      timeline
        .to(".load-centered-logo", { opacity: 0, duration: 0.5 })
        .to(".loader-lines", { opacity: 0, stagger: 0.2 })
        .to(".animation-content-1", { opacity: 1 }, "<0.8")
        .to(".animation-content-2", { opacity: 1 }, "<")
        .to(".animation-content-3", { opacity: 1 }, "<")
        .to(".loader", { display: "none" })
        .add(secondloadscreenDestroy);

      clearInterval(secondscalc);
    } else {
      timeline
        .to(".load-centered-logo", { opacity: 0, duration: 0.5 })
        .to(".loader-lines", { opacity: 0 })
        .to(".animation-content-1", { opacity: 1 }, "<")
        .to(".animation-content-2", { opacity: 1 }, "<")
        .to(".animation-content-3", { opacity: 1 }, "<")
        .to(".loader", { display: "none" })
        .add(secondloadscreenDestroy);

      clearInterval(secondscalc);
    }
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
  // .to(".navigation", { display: "none" })
  // .to(".animation-content-3", { opacity: 0 }, "<")
  // .to(".animation-content-2", { opacity: 0 })
  // .to(".animation-content-1", { opacity: 0 })
  // .to(".main-vid", { opacity: 0, duration: 0.8 })
  // .to(".fade-in-green", { opacity: 0, stagger: -0.2 })
  // .to(".main", { opacity: 0 })
  // .to(".load-centered-logo", { opacity: 1, duration: 0.5 })

  if (viewportwidth >= 1024) {
    timeline_3
      .to(".loader", { display: "block" })
      .to(".animation-content-3", { opacity: 0 }, "<")
      .to(".animation-content-2", { opacity: 0 }, "<")
      .to(".animation-content-1", { opacity: 0 }, "<")
      .to(".loader-lines", { opacity: 1, stagger: -0.2 }, "<-1")
      .add(redirect);
  } else {
    timeline_3
      .to(".loader", { display: "block" })
      .to(".animation-content-3", { opacity: 0 }, "<")
      .to(".animation-content-2", { opacity: 0 }, "<")
      .to(".animation-content-1", { opacity: 0 }, "<")
      .to(".loader-lines", { opacity: 1 })
      .add(redirect);
  }
}

function redirect() {
  location.replace("./project.html");
}

// menu

function menuappear() {
  document.querySelector(".menu").style.display = "block";
}

function menudisappear() {
  document.querySelector(".menu").style.display = "none";
}

function openMenu() {
  if (viewportwidth >= 1024) {
    menu
      .to(".openMenu", { pointerEvents: "none" })
      .to(".menu-kill", { display: "none" }, "<")
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
  } else {
    menu
      .to(".openMenu", { pointerEvents: "none" })
      .to(".menu-kill", { display: "none" }, "<")
      .to(".closeMenu", { pointerEvents: "none" }, "<")
      .to(".animation-content-2", { opacity: 0 }, "<")
      .to(".openMenu", { opacity: 0 }, "<")
      .to(".closeMenu", { opacity: 0 }, "<")
      .to(".menu", { display: "block" }, "<")
      .to(".menu-line-items", { opacity: 1 }, "<")
      .to(".closeMenu", { opacity: 1 })
      .to(".menu-tab-mob-appear", { opacity: 1 }, "<")
      .to(".openMenu", { pointerEvents: "auto" })
      .to(".closeMenu", { pointerEvents: "auto" }, "<");
  }
}

function closeMenu() {
  if (viewportwidth >= 1024) {
    menu
      .to(".animation-content-3", { opacity: 1 })

      .to(".closeMenu", { pointerEvents: "none", opacity: 0 }, "<")
      .to(".menu-tab-mob-appear", { opacity: 0 }, "<")
      .to(".menu-line-items", { opacity: 0, stagger: 0.2 }, "<")
      .to(".animation-content-2", { opacity: 1 }, "<0.8")
      .to(".web-navigation-menu", { opacity: 0 }, "<")
      .to(".openMenu", { pointerEvents: "auto", opacity: 1 }, "<")
      .add(menudisappear)
      .to(".menu-kill", { display: "block" }, "<")
      .to(".closeMenu", { pointerEvents: "auto" }, "<");
  } else {
    menu
      .to(".animation-content-3", { opacity: 1 })
      .to(".closeMenu", { pointerEvents: "none", opacity: 0 }, "<")
      .to(".menu-tab-mob-appear", { opacity: 0 }, "<")
      .to(".menu-line-items", { opacity: 0 }, "<")
      .to(".animation-content-2", { opacity: 1 }, "<")
      .to(".web-navigation-menu", { opacity: 0 }, "<")
      .to(".openMenu", { pointerEvents: "auto", opacity: 1 }, "<")
      .add(menudisappear)
      .to(".menu-kill", { display: "block" }, "<")
      .to(".closeMenu", { pointerEvents: "auto" }, "<");
  }
}

function project(x) {
  function projectL() {
    location.replace("./project.html");
  }
  if (x == 0) {
    if (viewportwidth >= 1024) {
      timeline_3
        .to(".loader", { display: "block" })
        .to(".animation-content-3", { opacity: 0 }, "<")
        .to(".animation-content-2", { opacity: 0 }, "<")
        .to(".animation-content-1", { opacity: 0 }, "<")
        .to(".loader-lines", { opacity: 1, stagger: -0.2 }, "<-1")
        .add(projectL);
    } else {
      timeline_3
        .to(".loader", { display: "block" })
        .to(".navigation", { display: "none" }, "<")
        .to(".animation-content-3", { opacity: 0 }, "<")
        .to(".animation-content-2", { opacity: 0 }, "<")
        .to(".animation-content-1", { opacity: 0 }, "<")
        .to(".loader-lines", { opacity: 1 })
        .add(projectL);
    }
  } else {
    menuLink
      .to(".animation-content", { opacity: 0, duration: 1 })
      .add(projectL);
  }
}

function architecture(x) {
  function projectL() {
    location.replace("./architecture.html");
  }
  if (x == 0) {
    if (viewportwidth >= 1024) {
      timeline_3
        .to(".loader", { display: "block" })
        .to(".animation-content-3", { opacity: 0 }, "<")
        .to(".animation-content-2", { opacity: 0 }, "<")
        .to(".animation-content-1", { opacity: 0 }, "<0.8")
        .to(".loader-lines", { opacity: 1, stagger: -0.2 }, "<-1")
        .add(projectL);
    } else {
      timeline_3
        .to(".loader", { display: "block" })
        .to(".navigation", { display: "none" }, "<")
        .to(".animation-content-3", { opacity: 0 }, "<")
        .to(".animation-content-2", { opacity: 0 }, "<")
        .to(".animation-content-1", { opacity: 0 }, "<")
        .to(".loader-lines", { opacity: 1 })
        .add(projectL);
    }
  } else {
    menuLink
      .to(".animation-content", { opacity: 0, duration: 1 })
      .add(projectL);
  }
}

function lifestyle(x) {
  function projectL() {
    location.replace("./lifestyle.html");
  }
  if (x == 0) {
    if (viewportwidth >= 1024) {
      timeline_3
        .to(".loader", { display: "block" })
        .to(".animation-content-3", { opacity: 0 }, "<")
        .to(".animation-content-2", { opacity: 0 }, "<")
        .to(".animation-content-1", { opacity: 0 }, "<0.8")
        .to(".loader-lines", { opacity: 1, stagger: -0.2 }, "<-1")
        .add(projectL);
    } else {
      timeline_3
        .to(".loader", { display: "block" })
        .to(".navigation", { display: "none" }, "<")
        .to(".animation-content-3", { opacity: 0 }, "<")
        .to(".animation-content-2", { opacity: 0 }, "<")
        .to(".animation-content-1", { opacity: 0 }, "<")
        .to(".loader-lines", { opacity: 1 })
        .add(projectL);
    }
  } else {
    menuLink
      .to(".animation-content", { opacity: 0, duration: 1 })
      .add(projectL);
  }
}

function production(x) {
  function projectL() {
    location.replace("./production.html");
  }
  if (x == 0) {
    if (viewportwidth >= 1024) {
      timeline_3
        .to(".loader", { display: "block" })
        .to(".animation-content-3", { opacity: 0 }, "<")
        .to(".animation-content-2", { opacity: 0 }, "<")
        .to(".animation-content-1", { opacity: 0 }, "<0.8")
        .to(".loader-lines", { opacity: 1, stagger: -0.2 }, "<-1")
        .add(projectL);
    } else {
      timeline_3
        .to(".loader", { display: "block" })
        .to(".navigation", { display: "none" }, "<")
        .to(".animation-content-3", { opacity: 0 }, "<")
        .to(".animation-content-2", { opacity: 0 }, "<")
        .to(".animation-content-1", { opacity: 0 }, "<")
        .to(".loader-lines", { opacity: 1 })
        .add(projectL);
    }
  } else {
    menuLink
      .to(".animation-content", { opacity: 0, duration: 1 })
      .add(projectL);
  }
}

function contact(x) {
  function projectL() {
    location.replace("./contact.html");
  }
  if (x == 0) {
    if (viewportwidth >= 1024) {
      timeline_3
        .to(".loader", { display: "block" })
        .to(".animation-content-3", { opacity: 0 }, "<")
        .to(".animation-content-2", { opacity: 0 }, "<")
        .to(".animation-content-1", { opacity: 0 }, "<0.8")
        .to(".loader-lines", { opacity: 1, stagger: -0.2 }, "<-1")
        .add(projectL);
    } else {
      timeline_3
        .to(".loader", { display: "block" })
        .to(".navigation", { display: "none" }, "<")
        .to(".animation-content-3", { opacity: 0 }, "<")
        .to(".animation-content-2", { opacity: 0 }, "<")
        .to(".animation-content-1", { opacity: 0 }, "<")
        .to(".loader-lines", { opacity: 1 })
        .add(projectL);
    }
  } else {
    menuLink
      .to(".animation-content", { opacity: 0, duration: 1 })
      .add(projectL);
  }
}
