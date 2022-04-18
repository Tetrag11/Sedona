gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({ defaults: { duration: 1 } });

const timeline_2 = gsap.timeline({ paused: true });

timeline_2
  .to(".nav-rel", { opacity: 0 })
  .to(".nav-line-left", { x: "0%", duration: 1, ease: Power3.easeIn }, 1)
  .to(".nav-line-right", { x: "0%", duration: 1, ease: Power3.easeIn }, 1)
  .to(".navbar-link", { opacity: 1 }, "<2");

const timeline_3 = gsap.timeline();

// loader related

// loader first animation
const loaderpreload = gsap.timeline();
loaderpreload.from(".loader-lines", { y: "-150%", duration: 1, stagger: 0.1 });

let load = false;
let loadtime = false;
let seconds = 0;

window.addEventListener("load", (event) => {
  load = true;
});

function increment() {
  seconds += 1;
  if (seconds > 2 && load == true) {
    // document.querySelector(".loader").style.display = "none";
    document.querySelector(".body").style.overflowY = "visible";
    document.querySelector(".body-content").style.display = "block";

    timeline
      .to(".loader-lines", { opacity: 0, duration: 1, stagger: 0.5 })
      .add(loaderdestroy)
      .from(".animate-1", { opacity: 0 }, "<0.1")
      .from(".animate-2", { opacity: 0 }, "<1")
      .from(".animate-3", { opacity: 0 }, "<1")
      .add(hamBtn);

    clearInterval(secondscalc);
  }
}
let secondscalc = setInterval(increment, 1000);

function hamBtn() {
  let hamBtnclass = document.querySelectorAll(".ham-btn");
  hamBtnclass.forEach((hamBtnel) => {
    hamBtnel.style.pointerEvents = "auto";
  });
}

function loaderdestroy() {
  document.querySelector(".loader").style.display = "none";
}

// navBar

function openNav() {
  document.querySelector(".navbar-lines").style.zIndex = "100";
  timeline_2.play();
}

function closeNav() {
  document.querySelector(".navbar-lines").style.zIndex = "30";
  timeline_2.reverse();
}
