gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline();

const timeline_2 = gsap.timeline({
  paused: true,
  onReverseComplete: crashMenue,
});

timeline_2
  .to(".nav-line-left", { x: "0%", duration: 2 }, 1)
  .to(".nav-line-right", { x: "0%", duration: 2 }, 1)
  .to(".navbar-link", { opacity: 1 }, "<2");

const timeline_3 = gsap.timeline();

// loader related

// loader first animation
const loaderpreload = gsap.timeline();
loaderpreload.from(".loader-lines", { y: "-150%", duration: 1, stagger: 0.1 });

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
      .to(".loader-lines", { opacity: 0, duration: 1, stagger: 0.5 })
      .from(".animate-1", { opacity: 0 }, "<2")
      .from(".animate-2", { opacity: 0 })
      .from(".animate-3", { opacity: 0 })
      .add(loaderdestroy)
      .add(hamBtn);

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

function loaderdestroy() {
  document.querySelector(".loader").style.display = "none";
  document.querySelector(".body").style.overflowY = "visible";
}

// navBar

function openNav() {
  hamBtnclass.forEach((hamBtnel) => {
    hamBtnel.style.pointerEvents = "none";
  });
  timeline_2.play();
  document.querySelector(".menue").style.display = "block";
}

function closeNav() {
  hamBtnclass.forEach((hamBtnel) => {
    hamBtnel.style.pointerEvents = "none";
  });
  timeline_2.reverse();
}

function crashMenue() {
  document.querySelector(".menue").style.display = "none";
  hamBtnclass.forEach((hamBtnel) => {
    hamBtnel.style.pointerEvents = "auto";
  });
}
