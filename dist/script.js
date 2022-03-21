gsap.registerPlugin(ScrollTrigger);





const timeline = gsap.timeline({ defaults: { duration: 1 } });

const timeline_2 = gsap.timeline({paused:true});

timeline_2
      .to('.nav-rel', {opacity: 0})
      .to('.nav-line-left', {x:"0%", duration: 1, ease: Power3.easeIn}, 1)
      .to('.nav-line-right', {x:"0%", duration: 1, ease: Power3.easeIn}, 1)
      .to('.navbar', {x:"0%", duration: 2, stagger: 0.1})
      .to('.navbar-link', {opacity: 1})

const timeline_3 = gsap.timeline();

// loader related
let load = false;
let loadtime = false;
let seconds = 0;

window.addEventListener("load", (event) => {
  load = true;
});

function increment() {
  seconds += 1;
  if (seconds > 1 && load == true) {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".body").style.overflowY = "visible";
    document.querySelector(".body-content").style.display = "block";

    timeline
      .from(".lines", { y: "-150%", stagger: 0.1 })
      .from(".header-back-image", { y: "-150%" })
      .from(".animate-1", { opacity: 0 }, "<2")
      .from(".animate-2", { opacity: 0 }, "<1")
      .from(".animate-3", { opacity: 0,}, "<1")
      .add(hamBtn)
     
    clearInterval(secondscalc);
  }
}
let secondscalc = setInterval(increment, 1000);

function hamBtn() {
  document.querySelector('.ham-btn').style.pointerEvents = "auto"; 
}

// navBar

function openNav(){
  document.querySelector('.navbar-lines').style.zIndex = '100';
   timeline_2.play();
}

function closeNav(){
  document.querySelector('.navbar-lines').style.zIndex = '30';
  timeline_2.reverse()
}