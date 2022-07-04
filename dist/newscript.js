gsap.registerPlugin(ScrollTrigger);

// lag fixes
gsap.ticker.lagSmoothing(1000, 16);

// TimeLines
const timeline = gsap.timeline();
const loaderpreload = gsap.timeline();

// variables
let load = false;
let seconds = 0;

// check if loaded
window.addEventListener("load", (event) => {
  load = true;
});

let secondscalc = setInterval(increment, 1000);

// After Work

function enableScroll() {
  document.querySelector(".body").style.overflowY = "visible";
}

// first animation(loader)
loaderpreload.to(".load-centered-logo", { opacity: 1 });

// second animation
function increment() {
  seconds += 1;
  if (seconds > 2 && load == true) {
    // document.querySelector(".loader").style.display = "none";

    // document.querySelector(".body-content").style.display = "block";

    timeline
      .to(".load-centered-logo", { opacity: 0, duration: 0.5 })


    clearInterval(secondscalc);
  }
}

function changeMap1() {
  document.querySelector(".lot1").style.opacity = 1;
  document.querySelector(".lot0").style.opacity = 0;
  document.querySelector(".lot2").style.opacity = 0;
  document.querySelector(".lot3").style.opacity = 0;
  document.querySelector(".lot4").style.opacity = 0;

  document.querySelector(".lot-b-1").style.background = "rgba(31, 47, 22, 0.2)";
  document.querySelector(".lot-b-2").style.background = "transparent";
  document.querySelector(".lot-b-3").style.background = "transparent";
  document.querySelector(".lot-b-4").style.background = "transparent";

  document.querySelector(".lot1").style.transform = 'scale(110%) translateX(60px)';
  document.querySelector(".lot2").style.transform = 'scale(110%) translateX(60px)';
  document.querySelector(".lot3").style.transform = 'scale(110%) translateX(60px)';
  document.querySelector(".lot4").style.transform = 'scale(110%) translateX(60px)';



}

function changeMap2() {
  document.querySelector(".lot2").style.opacity = 1;
  document.querySelector(".lot0").style.opacity = 0;
  document.querySelector(".lot1").style.opacity = 0;
  document.querySelector(".lot3").style.opacity = 0;
  document.querySelector(".lot4").style.opacity = 0;

  document.querySelector(".lot-b-2").style.background = "rgba(31, 47, 22, 0.2)";
  document.querySelector(".lot-b-1").style.background = "transparent";
  document.querySelector(".lot-b-3").style.background = "transparent";
  document.querySelector(".lot-b-4").style.background = "transparent";

  document.querySelector(".lot2").style.transform = 'scale(110%) translateX(0px) translateY(200px)';
  document.querySelector(".lot1").style.transform = 'scale(110%) translateX(0px) translateY(200px)';
  document.querySelector(".lot3").style.transform = 'scale(110%) translateX(0px) translateY(200px)';
  document.querySelector(".lot4").style.transform = 'scale(110%) translateX(0px) translateY(200px)';
}

function changeMap3() {
  document.querySelector(".lot3").style.opacity = 1;
  document.querySelector(".lot0").style.opacity = 0;
  document.querySelector(".lot1").style.opacity = 0;
  document.querySelector(".lot2").style.opacity = 0;
  document.querySelector(".lot4").style.opacity = 0;

  document.querySelector(".lot-b-3").style.background = "rgba(31, 47, 22, 0.2)";
  document.querySelector(".lot-b-1").style.background = "transparent";
  document.querySelector(".lot-b-2").style.background = "transparent";
  document.querySelector(".lot-b-4").style.background = "transparent";

  document.querySelector(".lot3").style.transform = 'scale(110%) translateX(-60px) translateY(300px)';
  document.querySelector(".lot1").style.transform = 'scale(110%) translateX(-60px) translateY(300px)';
  document.querySelector(".lot2").style.transform = 'scale(110%) translateX(-60px) translateY(300px)';
  document.querySelector(".lot4").style.transform = 'scale(110%) translateX(-60px) translateY(300px)';
}

function changeMap4() {
  document.querySelector(".lot4").style.opacity = 1;
  document.querySelector(".lot0").style.opacity = 0;
  document.querySelector(".lot1").style.opacity = 0;
  document.querySelector(".lot2").style.opacity = 0;
  document.querySelector(".lot3").style.opacity = 0;

  document.querySelector(".lot-b-4").style.background = "rgba(31, 47, 22, 0.2)";
  document.querySelector(".lot-b-1").style.background = "transparent";
  document.querySelector(".lot-b-2").style.background = "transparent";
  document.querySelector(".lot-b-3").style.background = "transparent";

  document.querySelector(".lot3").style.transform = 'scale(110%) translateX(-80px) translateY(300px)';
  document.querySelector(".lot1").style.transform = 'scale(110%) translateX(-80px) translateY(300px)';
  document.querySelector(".lot3").style.transform = 'scale(110%) translateX(-80px) translateY(300px)';
  document.querySelector(".lot4").style.transform = 'scale(110%) translateX(-80px) translateY(300px)';
}


let maps = document.querySelectorAll('.movemap');


