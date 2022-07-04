gsap.registerPlugin(ScrollTrigger);

// lag fixes
gsap.ticker.lagSmoothing(1000, 16);

// TimeLines
const timeline = gsap.timeline();
const loaderpreload = gsap.timeline();
const cardanimation = gsap.timeline();
const menu = gsap.timeline();

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
      .to(".loader", { opacity: 0 })
      .add(loaderdestroy);

    clearInterval(secondscalc);
  }
}

function loaderdestroy() {
  document.querySelector(".loader").style.display = "none";
  document.querySelector(".body").style.overflowY = "visible";
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

  document.querySelector(".lot1").style.transform =
    " scale(160%) translateX(15%) translateY(-5%)";
  document.querySelector(".lot2").style.transform =
    " scale(160%) translateX(15%) translateY(-5%)";
  document.querySelector(".lot3").style.transform =
    " scale(160%) translateX(15%) translateY(-5%)";
  document.querySelector(".lot4").style.transform =
    " scale(160%) translateX(15%) translateY(-5%)";
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

  document.querySelector(".lot2").style.transform =
    "scale(160%) translateX(50px)";
  document.querySelector(".lot1").style.transform =
    "scale(160%) translateX(50px)";
  document.querySelector(".lot3").style.transform =
    "scale(160%) translateX(50px)";
  document.querySelector(".lot4").style.transform =
    "scale(160%) translateX(50px)";
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

  document.querySelector(".lot3").style.transform =
    "scale(160%) translateX(0px)";
  document.querySelector(".lot1").style.transform =
    "scale(160%) translateX(0px)";
  document.querySelector(".lot2").style.transform =
    "scale(160%) translateX(0px)";
  document.querySelector(".lot4").style.transform =
    "scale(160%) translateX(0px)";
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

  document.querySelector(".lot3").style.transform =
    "scale(160%) translateX(-100px)";
  document.querySelector(".lot1").style.transform =
    "scale(160%) translateX(-100px)";
  document.querySelector(".lot2").style.transform =
    "scale(160%) translateX(-100px)";
  document.querySelector(".lot4").style.transform =
    "scale(160%) translateX(-100px)";
}

function zoomOut() {
  document.querySelector(".lot1").style.transform =
    " scale(110%) translateX(0)";
  document.querySelector(".lot2").style.transform =
    " scale(110%) translateX(0)";
  document.querySelector(".lot3").style.transform =
    " scale(110%) translateX(0)";
  document.querySelector(".lot4").style.transform =
    " scale(110%) translateX(0)";
}

let lotLinks = document.querySelectorAll(".lot-link");

function enableClick() {
  lotLinks.forEach((lotLink) => {
    lotLink.style.pointerEvents = "auto";
  });
}

function openCard(x) {
  lotLinks.forEach((lotLink) => {
    lotLink.style.pointerEvents = "none";
  });

  if (!document.querySelector(".card").classList.contains("card-expand")) {
    document.querySelector(".card").classList.add("card-expand");
    gsap.to(".card", { y: 0, x: "0" });

    if (x == 1) {
      document.querySelector(".card-heading").innerHTML = "LOT 02";

      cardanimation
        .add(changetextto1)
        .to(".card-heading", { opacity: 1, delay: 1 }, "end")
        .to(".card-p", { opacity: 1, delay: 1 }, "end")
        .to(".card-close", { opacity: 1, delay: 1 }, "end")
        .to(".card-inquire", { opacity: 1, delay: 1 }, "end")
        .add(enableClick);
    }

    if (x == 2) {
      document.querySelector(".card-heading").innerHTML = "LOT 06";

      cardanimation
        .add(changetextto2)
        .to(".card-heading", { opacity: 1, delay: 1 }, "end")
        .to(".card-p", { opacity: 1, delay: 1 }, "end")
        .to(".card-close", { opacity: 1, delay: 1 }, "end")
        .to(".card-inquire", { opacity: 1, delay: 1 }, "end")
        .add(enableClick);
    }

    if (x == 3) {
      document.querySelector(".card-heading").innerHTML = "LOT 07";

      cardanimation
        .to(".card", { y: 0, x: "-125%" })
        .add(changetextto3)
        .to(".card-heading", { opacity: 1, delay: 1 }, "end")
        .to(".card-p", { opacity: 1, delay: 1 }, "end")
        .to(".card-close", { opacity: 1, delay: 1 }, "end")
        .to(".card-inquire", { opacity: 1, delay: 1 }, "end")
        .add(enableClick);
    }

    if (x == 4) {
      document.querySelector(".card-heading").innerHTML = "LOT 07";

      cardanimation
        .to(".card", { y: 0, x: "-125%" })
        .add(changetextto4)
        .to(".card-heading", { opacity: 1, delay: 1 }, "end")
        .to(".card-p", { opacity: 1, delay: 1 }, "end")
        .to(".card-close", { opacity: 1, delay: 1 }, "end")
        .to(".card-inquire", { opacity: 1, delay: 1 }, "end")
        .add(enableClick);
    }
  } else {
    if (x == 1) {
      cardanimation

        .to(".card-heading", { opacity: 0 })
        .to(".card-p", { opacity: 0 }, "<")
        .to(".card-close", { opacity: 0 }, "<")
        .to(".card-inquire", { opacity: 0 }, "<")
        .to(".card", {
          y: 0,
          x: 0,
          ease: Circ.easeOut,
          duration: 1,
        })
        .add(changetextto1)
        .to(".card-heading", { opacity: 1 })
        .to(".card-p", { opacity: 1 }, "<")
        .to(".card-close", { opacity: 1 }, "<")
        .to(".card-inquire", { opacity: 1 }, "<")
        .add(enableClick);
    }

    if (x == 2) {
      cardanimation

        .to(".card-heading", { opacity: 0 })
        .to(".card-p", { opacity: 0 }, "<")
        .to(".card-close", { opacity: 0 }, "<")
        .to(".card-inquire", { opacity: 0 }, "<")
        .to(".card", {
          y: 0,
          x: 0,
          ease: Circ.easeOut,
          duration: 1,
        })
        .add(changetextto2)
        .to(".card-heading", { opacity: 1 })
        .to(".card-p", { opacity: 1 }, "<")
        .to(".card-close", { opacity: 1 }, "<")
        .to(".card-inquire", { opacity: 1 }, "<")
        .add(enableClick);
    }

    if (x == 3) {
      cardanimation

        .to(".card-heading", { opacity: 0 })
        .to(".card-p", { opacity: 0 }, "<")
        .to(".card-close", { opacity: 0 }, "<")
        .to(".card-inquire", { opacity: 0 }, "<")
        .to(".card", {
          y: 0,
          x: "-125%",
          ease: Circ.easeOut,
          duration: 1,
        })
        .add(changetextto3)
        .to(".card-heading", { opacity: 1 })
        .to(".card-p", { opacity: 1 }, "<")
        .to(".card-close", { opacity: 1 }, "<")
        .to(".card-inquire", { opacity: 1 }, "<")
        .add(enableClick);
    }

    if (x == 4) {
      cardanimation

        .to(".card-heading", { opacity: 0 })
        .to(".card-p", { opacity: 0 }, "<")
        .to(".card-close", { opacity: 0 }, "<")
        .to(".card-inquire", { opacity: 0 }, "<")
        .to(".card", {
          y: 0,
          x: "-125%",
          ease: Circ.easeOut,
          duration: 1,
        })
        .add(changetextto4)
        .to(".card-heading", { opacity: 1 })
        .to(".card-p", { opacity: 1 }, "<")
        .to(".card-close", { opacity: 1 }, "<")
        .to(".card-inquire", { opacity: 1 }, "<")
        .add(enableClick);
    }
  }
}

function openCard2() {
  if (!document.querySelector(".card").classList.contains("card-expand")) {
    document.querySelector(".card").classList.add("card-expand-left");
  } else {
    document
      .querySelector(".card")
      .classList.replace("card-expand", "card-expand-left");
  }
}

function changetextto1() {
  document.querySelector(".card-heading").innerHTML = "LOT 02";
  document.querySelector(".card-p").innerHTML =
    "This 1-acre site offers a tranquil and authentic life immersed in nature.<br>With the heritage forest reserve in the back and blessed with a free-flowing stream to the right, this property is a hidden gem for a nature lover.<br> Anyone purchasing this beautiful property can collaborate<br> and design their home with Shakticola.<br>";
}

function changetextto2() {
  document.querySelector(".card-heading").innerHTML = "LOT 06";
  document.querySelector(".card-p").innerHTML =
    "This site, which is just under an acre has views over the forests<br> and the Nakiyadeniya mountain ranges. Anyone purchasing<br> this beautiful property can collaborate and design<br>their home with Shakticola.";
}

function changetextto3() {
  document.querySelector(".card-heading").innerHTML = "LOT 07";
  document.querySelector(".card-p").innerHTML =
    "Considered the best site on the estate, this lush 1-acre property sits<br> at the top-centre of the estate on a dramatic site with 20- kilometer views<br> overlooking lush green tea estates and the Nakiyadeniya mountain ranges.<br> Anyone purchasing this beautiful property can collaborate<br> and design their home with Shakticola.<br>";
}

function changetextto4() {
  document.querySelector(".card-heading").innerHTML = "LOT 08";
  document.querySelector(".card-p").innerHTML =
    "Phoenix Residence. With a completion date of June, 2022,<br> this private contemporary home showcases floor to ceiling glass doors<br> and windows and comes with a generous outdoor deck which spills<br> right into a seamless eternity pool. Designed and project managed<br> by Shakticola and build by Crystal Construction.";
}

function closeCard() {
  gsap.to(".card", { y: "100%" });
}

// menu
function menuappear() {
  document.querySelector(".menu").style.display = "block";
}

function menudisappear() {
  document.querySelector(".menu").style.display = "none";
}

function openMenu() {
  menu.add(menuappear).to(".menu", { opacity: 1 });
}

function closeMenu() {
  menu.to(".menu", { opacity: 0 }).add(menudisappear);
}
