const timeline = gsap.timeline();
const timeline_3 = gsap.timeline();
const menu = gsap.timeline();
const menuLink = gsap.timeline();
const sectionscroll = gsap.timeline();

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

//-->

// loader related

// loader first animation
const loaderpreload = gsap.timeline();
loaderpreload
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
    if (viewportwidth >= 1024) {
      timeline
        .to(".load-centered-logo", { opacity: 0, duration: 0.5 })
        .to(".loader-lines", { opacity: 0, stagger: 0.2 })
        .to(".animation-content-1", { opacity: 1 }, "< 0.8")
        .to(".loader", { display: "none" })
        .add(loaderdestroy);

      clearInterval(secondscalc);
    } else {
      timeline
        .to(".load-centered-logo", { opacity: 0, duration: 0.5 })
        .to(".loader-lines", { opacity: 0 })
        .to(".animation-content-1", { opacity: 1 }, "<")
        .to(".loader", { display: "none" })
        .add(loaderdestroy);

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

function loaderdestroy() {
  document.querySelector(".body").style.overflowY = "visible";

  const scrolls = document.querySelectorAll(".c");
  const stubbornscrolls = document.querySelectorAll(".cd");
  gsap.registerPlugin(ScrollTrigger);

  scrolls.forEach((scroll) => {
    gsap.from(scroll, {
      scrollTrigger: {
        trigger: scroll,
      },
      opacity: 0,
      delay: 1,
      duration: 1,
    });
  });

  stubbornscrolls.forEach((scroll) => {
    gsap.to(scroll, {
      scrollTrigger: {
        trigger: scroll,
      },
      opacity: 1,
      delay: 1,
      duration: 1,
    });
  });
  if (viewportwidth > 1024) {
    $(function () {
      $("body").niceScroll();
    });
  }
}

// menu

function menuappear() {
  document.querySelector(".menu").style.display = "block";
}

function menudisappear() {
  document.querySelectorAll(".openmenudisaappear").forEach((element) => {
    element.style.opacity = 1;
  });
  document.querySelector(".menu").style.display = "none";
}
function hide() {
  document.querySelectorAll(".openmenudisaappear").forEach((element) => {
    element.style.opacity = 0;
  });
}

function openMenu() {
  if (viewportwidth >= 1024) {
    menu
      .add(hide)
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
      .add(hide)
      .to(".openMenu", { pointerEvents: "none" })
      .to(".menu-kill", { display: "none" }, "<")
      .to(".closeMenu", { pointerEvents: "none" }, "<")
      .to(".animation-content-2", { opacity: 0 }, "<")
      .to(".openMenu", { opacity: 0 }, "<")
      .to(".closeMenu", { opacity: 0 }, "<")
      .to(".menu", { display: "block" }, "<")
      .to(".menu-line-items", { opacity: 1 }, "<")
      .to(".closeMenu", { opacity: 1 })
      .to(".menu-tab-mob-appear", { opacity: 1 }, "< ")
      .to(".openMenu", { pointerEvents: "auto" })
      .to(".closeMenu", { pointerEvents: "auto" }, "<");
  }
}

function closeMenu() {
  if (viewportwidth >= 1024) {
    menu
      .to(".openMenu", { pointerEvents: "none" })
      .to(".closeMenu", { pointerEvents: "none", opacity: 0 }, "<")
      .to(".menu-tab-mob-appear", { opacity: 0 }, "<")
      .to(".menu-line-items", { opacity: 0, stagger: 0.2 }, "<")
      .add(menudisappear)
      .to(".animation-content-2", { opacity: 1 })
      .to(".openMenu", { pointerEvents: "auto", opacity: 1 })
      .to(".menu-kill", { display: "block" }, "<")
      .to(".closeMenu", { pointerEvents: "auto" }, "<");
  } else {
    menu
      .to(".openMenu", { pointerEvents: "none" })
      .to(".closeMenu", { pointerEvents: "none", opacity: 0 }, "<")
      .to(".menu-tab-mob-appear", { opacity: 0 }, "<")
      .to(".menu-line-items", { opacity: 0 }, "<")
      .add(menudisappear)
      .to(".animation-content-2", { opacity: 1 })
      .to(".openMenu", { pointerEvents: "auto", opacity: 1 })
      .to(".menu-kill", { display: "block" }, "<")
      .to(".closeMenu", { pointerEvents: "auto" }, "<");
  }
}

function project() {
  function projectL() {
    location.replace("./map.html");
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

// gsap.to(".scroll-2", {
//   opacity: 1,
//   y: "10%",
//   duration: 1,
//   de
// });
