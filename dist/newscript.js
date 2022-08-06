gsap.registerPlugin(ScrollTrigger);

// lag fixes
gsap.ticker.lagSmoothing(1000, 16);

// TimeLines
const timeline = gsap.timeline();
const loaderpreload = gsap.timeline();
const cardanimation = gsap.timeline();
const menu = gsap.timeline();
const menuLink = gsap.timeline();
const mobiletabcard = gsap.timeline();
const webmapmove = gsap.timeline();
const mobiletabmapmove = gsap.timeline();
const oncardtoggle = gsap.timeline();
const closeCardtl = gsap.timeline();

// variables
let load = false;
let seconds = 0;

// check if loadedconst loaderpreload = gsap.timeline();
loaderpreload
  .to(".load-centered-logo", { opacity: 1 })
  .to(".loader", { backgroundColor: "transparent" });
window.addEventListener("load", (event) => {
  load = true;
});

let secondscalc = setInterval(increment, 1000);

// After Work

function enableScroll() {
  document.querySelector(".body").style.overflowY = "visible";
}

// first animation(loader)

// second animation
function increment() {
  seconds += 1;
  if (seconds > 2 && load == true) {
    // document.querySelector(".loader").style.display = "none";

    // document.querySelector(".body-content").style.display = "block";

    timeline
      .to(".load-centered-logo", { opacity: 0, duration: 0.5 })
      .to(".loader-lines", { opacity: 0, stagger: 0.2 })
      .to(".loader", { display: "none" });

    clearInterval(secondscalc);
  }
}

function loaderdestroy() {
  document.querySelector(".loader").style.display = "none";
  document.querySelector(".body").style.overflowY = "visible";
}

function chechpos(event) {
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

  var x = event.clientX;
  var y = event.clientY;
  var coords = (x / viewportwidth) * 100;
  console.log(coords);
}
let enable = true;
function webmapmoveonmouse(event) {
  var x = -((event.pageX * -0.1) / 15);
  var y = -((event.pageY * -0.1) / 15);

  // webmapmoveonmouseinner(x, enable);
}

function webmapmoveonmouseinner(x, enable) {
  if (enable == true) {
    if (x * 14.7 >= 100) {
      x = 100;
      gsap.to(".lot1", { duration: 2, objectPosition: x });
      gsap.to(".lot2", { duration: 2, objectPosition: x });
      gsap.to(".lot3", { duration: 2, objectPosition: x });
      gsap.to(".lot4", { duration: 2, objectPosition: x });
    } else {
      x = x * 14.7;
      gsap.to(".lot1", { duration: 2, objectPosition: x });
      gsap.to(".lot2", { duration: 2, objectPosition: x });
      gsap.to(".lot3", { duration: 2, objectPosition: x });
      gsap.to(".lot4", { duration: 2, objectPosition: x });
    }
  }
}

function changeMap1() {
  // webmapmove
  //   .to(".lot1", { duration: 1, objectPosition: "0% 50%" })
  //   .to(".lot2", { duration: 1, objectPosition: "0% 50%" }, "<")
  //   .to(".lot3", { duration: 1, objectPosition: "0% 50%" }, "<")
  //   .to(".lot4", { duration: 1, objectPosition: "0% 50%" }, "<");
  gsap.to(".lot1", {
    duration: 2,
    objectPosition: "16.080729166666664% 50%",
  });
  gsap.to(".lot2", {
    duration: 2,
    objectPosition: "16.080729166666664% 50%",
  });
  gsap.to(".lot3", {
    duration: 2,
    objectPosition: "16.080729166666664% 50%",
  });
  gsap.to(".lot4", {
    duration: 2,
    objectPosition: "16.080729166666664% 50%",
  });

  document.querySelector(".lot1").style.opacity = 1;
  document.querySelector(".lot0").style.opacity = 0;
  document.querySelector(".lot2").style.opacity = 0;
  document.querySelector(".lot3").style.opacity = 0;
  document.querySelector(".lot4").style.opacity = 0;
}

function changeMap2() {
  // webmapmove
  //   .to(".lot1", { duration: 1, objectPosition: "45% 50%" })
  //   .to(".lot2", { duration: 1, objectPosition: "45% 50%" }, "<")
  //   .to(".lot3", { duration: 1, objectPosition: "45% 50%" }, "<")
  //   .to(".lot4", { duration: 1, objectPosition: "45% 50%" }, "<");
  gsap.to(".lot1", {
    duration: 2,
    objectPosition: "70% 50%",
  });
  gsap.to(".lot2", {
    duration: 2,
    objectPosition: "70% 50%",
  });
  gsap.to(".lot3", {
    duration: 2,
    objectPosition: "70% 50%",
  });
  gsap.to(".lot4", {
    duration: 2,
    objectPosition: "70% 50%",
  });

  document.querySelector(".lot2").style.opacity = 1;
  document.querySelector(".lot0").style.opacity = 0;
  document.querySelector(".lot1").style.opacity = 0;
  document.querySelector(".lot3").style.opacity = 0;
  document.querySelector(".lot4").style.opacity = 0;
}

function changeMap3() {
  // webmapmove
  //   .to(".lot1", { duration: 1, objectPosition: "75% 50%" })
  //   .to(".lot2", { duration: 1, objectPosition: "75% 50%" }, "<")
  //   .to(".lot3", { duration: 1, objectPosition: "75% 50%" }, "<")
  //   .to(".lot4", { duration: 1, objectPosition: "75% 50%" }, "<");
  gsap.to(".lot1", {
    duration: 2,
    objectPosition: "60% 50%",
  });
  gsap.to(".lot2", {
    duration: 2,
    objectPosition: "60% 50%",
  });
  gsap.to(".lot3", {
    duration: 2,
    objectPosition: "60% 50%",
  });
  gsap.to(".lot4", {
    duration: 2,
    objectPosition: "60% 50%",
  });

  document.querySelector(".lot3").style.opacity = 1;
  document.querySelector(".lot0").style.opacity = 0;
  document.querySelector(".lot1").style.opacity = 0;
  document.querySelector(".lot2").style.opacity = 0;
  document.querySelector(".lot4").style.opacity = 0;
}

function changeMap4() {
  // webmapmove
  //   .to(".lot1", { duration: 1, objectPosition: "90% 30%" })
  //   .to(".lot2", { duration: 1, objectPosition: "90% 30%" }, "<")
  //   .to(".lot3", { duration: 1, objectPosition: "90% 30%" }, "<")
  //   .to(".lot4", { duration: 1, objectPosition: "90% 30%" }, "<");

  gsap.to(".lot1", {
    duration: 2,
    objectPosition: "65% 50%",
  });
  gsap.to(".lot2", {
    duration: 2,
    objectPosition: "65% 50%",
  });
  gsap.to(".lot3", {
    duration: 2,
    objectPosition: "65% 50%",
  });
  gsap.to(".lot4", {
    duration: 2,
    objectPosition: "65% 50%",
  });

  document.querySelector(".lot4").style.opacity = 1;
  document.querySelector(".lot0").style.opacity = 0;
  document.querySelector(".lot1").style.opacity = 0;
  document.querySelector(".lot2").style.opacity = 0;
  document.querySelector(".lot3").style.opacity = 0;
}

// function zoomOut() {
//   document.querySelector(".lot1").style.transform =
//     " scale(100%) translateX(0)";
//   document.querySelector(".lot2").style.transform =
//     " scale(100%) translateX(0)";
//   document.querySelector(".lot3").style.transform =
//     " scale(100%) translateX(0)";
//   document.querySelector(".lot4").style.transform =
//     " scale(100%) translateX(0)";
// }

let lotLinks = document.querySelectorAll(".lot-link");

function enableClick() {
  lotLinks.forEach((lotLink) => {
    lotLink.style.pointerEvents = "auto";
  });
}

function openCard(x) {
  enable = false;
  document.querySelector(".banner").style.opacity = 0;

  lotLinks.forEach((lotLink) => {
    lotLink.style.pointerEvents = "none";
  });

  if (!document.querySelector(".card").classList.contains("card-expand")) {
    document.querySelector(".card").classList.add("card-expand");

    if (x == 1) {
      document.querySelector(".card-heading").innerHTML = "LOT 02";
      document.querySelector(".card-lines").style.gridTemplateColumns =
        "10% 1fr 1fr";

      document.querySelector(".card-text").style.gridTemplateColumns =
        "10% 1fr";

      document.querySelector(".card-col-switch-first").style.display = "block";

      document.querySelector(".card-col-switch-last").style.display = "none";

      // document.querySelector(".card-lines").style.gridTemplateColumns =
      //   "1fr 1fr 10%";

      // document.querySelector(".card-text").style.gridTemplateColumns =
      //   "1fr 10%";

      // document.querySelector(".card-col-switch-first").style.display = "none";

      // document.querySelector(".card-col-switch-last").style.display = "block";

      cardanimation
        .to(".oncardtoggle", { opacity: 0 })
        .to(".oncardtoggle", { pointerEvents: "none" }, "<")
        .to(".animation-content-2", { opacity: 0 }, "<")
        .to(".card", { x: "-100%" }, "<")
        .to(".card", { display: "block" }, "<")
        .to(".card-lines", { opacity: 1, stagger: 0.1 })
        .add(changetextto1)
        .to("#card-close", { opacity: 1, delay: 1 }, "end")
        .to("#card-close", { pointerEvents: "auto" }, "end")
        .to(".card-heading", { opacity: 1, delay: 1 }, "end")
        .to(".card-p", { opacity: 1, delay: 1 }, "end")
        .to(".card-close", { opacity: 1, delay: 1 }, "end")
        .to(".card-inquire", { opacity: 1, delay: 1 }, "end")
        .add(enableClick);

      gsap.to(".lot1", {
        duration: 2,
        objectPosition: "16.080729166666664% 50%",
      });
      gsap.to(".lot2", {
        duration: 2,
        objectPosition: "16.080729166666664% 50%",
      });
      gsap.to(".lot3", {
        duration: 2,
        objectPosition: "16.080729166666664% 50%",
      });
      gsap.to(".lot4", {
        duration: 2,
        objectPosition: "16.080729166666664% 50%",
      });
    }

    if (x == 2) {
      document.querySelector(".card-heading").innerHTML = "LOT 06";
      document.querySelector(".card-lines").style.gridTemplateColumns =
        "10% 1fr 1fr";

      document.querySelector(".card-text").style.gridTemplateColumns =
        "10% 1fr";

      document.querySelector(".card-col-switch-first").style.display = "block";

      document.querySelector(".card-col-switch-last").style.display = "none";

      // document.querySelector(".card-lines").style.gridTemplateColumns =
      //   "1fr 1fr 10%";

      // document.querySelector(".card-text").style.gridTemplateColumns =
      //   "1fr 10%";

      // document.querySelector(".card-col-switch-first").style.display = "none";

      // document.querySelector(".card-col-switch-last").style.display = "block";

      cardanimation
        .to(".oncardtoggle", { opacity: 0 })
        .to(".oncardtoggle", { pointerEvents: "none" }, "<")
        .to(".animation-content-2", { opacity: 0 }, "<")
        .to(".card", { x: "-100%" }, "<")
        .to(".card", { display: "block" }, "<")
        .to(".card-lines", { opacity: 1, stagger: 0.1 })
        .add(changetextto2)
        .to("#card-close", { opacity: 1, delay: 1 }, "end")
        .to("#card-close", { pointerEvents: "auto" }, "end")
        .to(".card-heading", { opacity: 1, delay: 1 }, "end")
        .to(".card-p", { opacity: 1, delay: 1 }, "end")
        .to(".card-close", { opacity: 1, delay: 1 }, "end")
        .to(".card-inquire", { opacity: 1, delay: 1 }, "end")
        .add(enableClick);

      gsap.to(".lot1", {
        duration: 2,
        objectPosition: "70% 50%",
      });
      gsap.to(".lot2", {
        duration: 2,
        objectPosition: "70% 50%",
      });
      gsap.to(".lot3", {
        duration: 2,
        objectPosition: "70% 50%",
      });
      gsap.to(".lot4", {
        duration: 2,
        objectPosition: "70% 50%",
      });
    }

    if (x == 3) {
      document.querySelector(".card-heading").innerHTML = "LOT 07";

      document.querySelector(".card-lines").style.gridTemplateColumns =
        "10% 1fr 1fr";

      document.querySelector(".card-text").style.gridTemplateColumns =
        "10% 1fr";

      document.querySelector(".card-col-switch-first").style.display = "block";

      document.querySelector(".card-col-switch-last").style.display = "none";

      cardanimation
        .to(".oncardtoggle", { opacity: 0 })
        .to(".oncardtoggle", { pointerEvents: "none" }, "<")
        .to(".animation-content-2", { opacity: 0 }, "<")
        .to(".card", { x: "-100%" }, "<")
        .to(".card", { display: "block" }, "<")
        .to(".card-lines", { opacity: 1, stagger: 0.1 })
        .add(changetextto3)
        .to("#card-close", { opacity: 1, delay: 1 }, "end")
        .to("#card-close", { pointerEvents: "auto" }, "end")
        .to(".card-heading", { opacity: 1, delay: 1 }, "end")
        .to(".card-p", { opacity: 1, delay: 1 }, "end")
        .to(".card-close", { opacity: 1, delay: 1 }, "end")
        .to(".card-inquire", { opacity: 1, delay: 1 }, "end")
        .add(enableClick);

      gsap.to(".lot1", {
        duration: 2,
        objectPosition: "60% 50%",
      });
      gsap.to(".lot2", {
        duration: 2,
        objectPosition: "60% 50%",
      });
      gsap.to(".lot3", {
        duration: 2,
        objectPosition: "60% 50%",
      });
      gsap.to(".lot4", {
        duration: 2,
        objectPosition: "60% 50%",
      });
    }

    if (x == 4) {
      document.querySelector(".card-heading").innerHTML = "LOT 07";
      document.querySelector(".card-lines").style.gridTemplateColumns =
        "10% 1fr 1fr";

      document.querySelector(".card-text").style.gridTemplateColumns =
        "10% 1fr";

      document.querySelector(".card-col-switch-first").style.display = "block";

      document.querySelector(".card-col-switch-last").style.display = "none";

      cardanimation
        .to(".oncardtoggle", { opacity: 0 })
        .to(".oncardtoggle", { pointerEvents: "none" }, "<")
        .to(".animation-content-2", { opacity: 0 }, "<")
        .to(".card", { x: "-100%" }, "<")
        .to(".card", { display: "block" }, "<")
        .to(".card-lines", { opacity: 1, stagger: 0.1 })
        .add(changetextto4)
        .to("#card-close", { opacity: 1, delay: 1 }, "end")
        .to("#card-close", { pointerEvents: "auto" }, "end")
        .to(".card-heading", { opacity: 1, delay: 1 }, "end")
        .to(".card-p", { opacity: 1, delay: 1 }, "end")
        .to(".card-close", { opacity: 1, delay: 1 }, "end")
        .to(".card-inquire", { opacity: 1, delay: 1 }, "end")
        .add(enableClick);

      gsap.to(".lot1", {
        duration: 2,
        objectPosition: "65% 50%",
      });
      gsap.to(".lot2", {
        duration: 2,
        objectPosition: "65% 50%",
      });
      gsap.to(".lot3", {
        duration: 2,
        objectPosition: "65% 50%",
      });
      gsap.to(".lot4", {
        duration: 2,
        objectPosition: "65% 50%",
      });
    }
  } else {
    if (x == 1) {
      cardanimation
        .to(".oncardtoggle", { opacity: 0 })
        .to(".oncardtoggle", { pointerEvents: "none" }, "<")
        .to(".card-lines", { opacity: 0, stagger: -0.1 }, "<")
        .to(".animation-content-2", { opacity: 0 }, "<")
        .to(".card", { display: "block" }, "<")
        .to(".card-heading", { opacity: 0 }, "<")
        .to(".card-p", { opacity: 0 }, "<")
        .to(".card-close", { opacity: 0 }, "<")
        .to(".card-inquire", { opacity: 0 }, "<")
        .to("#card-close", { opacity: 0 }, "<")
        .to("#card-close", { pointerEvents: "none" }, "<")
        .to(".card", { display: "none" })

        .to(
          ".card",
          {
            x: "-100%",
          },
          "<"
        )
        .add(checksideleft)

        .add(changetextto1)
        .to(".card", { display: "block" })
        .to(".card-lines", { opacity: 1, stagger: 0.1 }, "<")
        .to(".card-heading", { opacity: 1 })
        .to(".card-p", { opacity: 1 }, "<")
        .to(".card-close", { opacity: 1 }, "<")
        .to(".card-inquire", { opacity: 1 }, "<")
        .to("#card-close", { opacity: 1 }, "<")
        .to("#card-close", { pointerEvents: "auto" }, "<")
        .add(enableClick);
      gsap.to(".lot1", {
        duration: 2,
        objectPosition: "16.080729166666664% 50%",
      });
      gsap.to(".lot2", {
        duration: 2,
        objectPosition: "16.080729166666664% 50%",
      });
      gsap.to(".lot3", {
        duration: 2,
        objectPosition: "16.080729166666664% 50%",
      });
      gsap.to(".lot4", {
        duration: 2,
        objectPosition: "16.080729166666664% 50%",
      });
    }

    if (x == 2) {
      cardanimation
        .to(".oncardtoggle", { opacity: 0 })
        .to(".oncardtoggle", { pointerEvents: "none" }, "<")
        .to(".card-lines", { opacity: 0, stagger: -0.1 }, "<")
        .to(".animation-content-2", { opacity: 0 }, "<")
        .to(".card", { display: "block" }, "<")
        .to(".card-heading", { opacity: 0 }, "<")
        .to(".card-p", { opacity: 0 }, "<")
        .to(".card-close", { opacity: 0 }, "<")
        .to(".card-inquire", { opacity: 0 }, "<")
        .to("#card-close", { opacity: 0 }, "<")
        .to("#card-close", { pointerEvents: "none" }, "<")
        .to(".card", { display: "none" })

        .to(
          ".card",
          {
            x: "-100%",
          },
          "<"
        )
        .add(checksideleft)

        .add(changetextto2)
        .to(".card", { display: "block" })
        .to(".card-lines", { opacity: 1, stagger: 0.1 }, "<")
        .to(".card-heading", { opacity: 1 })
        .to(".card-p", { opacity: 1 }, "<")
        .to(".card-close", { opacity: 1 }, "<")
        .to(".card-inquire", { opacity: 1 }, "<")
        .to("#card-close", { opacity: 1 }, "<")
        .to("#card-close", { pointerEvents: "auto" }, "<")
        .add(enableClick);

      gsap.to(".lot1", {
        duration: 2,
        objectPosition: "70% 50%",
      });
      gsap.to(".lot2", {
        duration: 2,
        objectPosition: "70% 50%",
      });
      gsap.to(".lot3", {
        duration: 2,
        objectPosition: "70% 50%",
      });
      gsap.to(".lot4", {
        duration: 2,
        objectPosition: "70% 50%",
      });
    }

    if (x == 3) {
      cardanimation
        .to(".oncardtoggle", { opacity: 0 })
        .to(".oncardtoggle", { pointerEvents: "none" }, "<")
        .to(".card-lines", { opacity: 0, stagger: -0.1 }, "<")
        .to(".animation-content-2", { opacity: 0 }, "<")
        .to(".card", { display: "block" }, "<")
        .to(".card-heading", { opacity: 0 }, "<")
        .to(".card-p", { opacity: 0 }, "<")
        .to(".card-close", { opacity: 0 }, "<")
        .to(".card-inquire", { opacity: 0 }, "<")
        .to("#card-close", { opacity: 0 }, "<")
        .to("#card-close", { pointerEvents: "none" }, "<")
        .to(".card", { display: "none" })

        .to(
          ".card",
          {
            x: "-100%",
          },
          "<"
        )
        .add(checksideright)

        .add(changetextto3)
        .to(".card", { display: "block" })
        .to(".card-lines", { opacity: 1, stagger: 0.1 }, "<")
        .to(".card-heading", { opacity: 1 })
        .to(".card-p", { opacity: 1 }, "<")
        .to(".card-close", { opacity: 1 }, "<")
        .to(".card-inquire", { opacity: 1 }, "<")
        .to("#card-close", { opacity: 1 }, "<")
        .to("#card-close", { pointerEvents: "auto" }, "<")
        .add(enableClick);

      gsap.to(".lot1", {
        duration: 2,
        objectPosition: "60% 50%",
      });
      gsap.to(".lot2", {
        duration: 2,
        objectPosition: "60% 50%",
      });
      gsap.to(".lot3", {
        duration: 2,
        objectPosition: "60% 50%",
      });
      gsap.to(".lot4", {
        duration: 2,
        objectPosition: "60% 50%",
      });
    }

    if (x == 4) {
      cardanimation
        .to(".oncardtoggle", { opacity: 0 })
        .to(".oncardtoggle", { pointerEvents: "none" }, "<")
        .to(".card-lines", { opacity: 0, stagger: -0.1 }, "<")
        .to(".animation-content-2", { opacity: 0 }, "<")

        .to(".card-heading", { opacity: 0 }, "<")
        .to(".card-p", { opacity: 0 }, "<")
        .to(".card-close", { opacity: 0 }, "<")
        .to(".card-inquire", { opacity: 0 }, "<")
        .to("#card-close", { opacity: 0 }, "<")
        .to("#card-close", { pointerEvents: "none" }, "<")
        .to(".card", { display: "none" })

        .to(
          ".card",
          {
            x: "-100%",
          },
          "<"
        )
        .add(checksideright)
        .add(changetextto4)
        .to(".card", { display: "block" })
        .to(".card-lines", { opacity: 1, stagger: 0.1 }, "<")
        .to(".card-heading", { opacity: 1 })
        .to(".card-p", { opacity: 1 }, "<")
        .to(".card-close", { opacity: 1 }, "<")
        .to(".card-inquire", { opacity: 1 }, "<")
        .to("#card-close", { opacity: 1 }, "<")
        .to("#card-close", { pointerEvents: "auto" }, "<")
        .add(enableClick);

      gsap.to(".lot1", {
        duration: 2,
        objectPosition: "65% 50%",
      });
      gsap.to(".lot2", {
        duration: 2,
        objectPosition: "65% 50%",
      });
      gsap.to(".lot3", {
        duration: 2,
        objectPosition: "65% 50%",
      });
      gsap.to(".lot4", {
        duration: 2,
        objectPosition: "65% 50%",
      });
    }
  }
}

function checksideleft() {
  // document.querySelector(".card-lines").style.gridTemplateColumns =
  //   "1fr 1fr 10%";

  // document.querySelector(".card-text").style.gridTemplateColumns = "1fr 10%";

  // document.querySelector(".card-col-switch-first").style.display = "none";

  // document.querySelector(".card-col-switch-last").style.display = "block";
  document.querySelector(".card-lines").style.gridTemplateColumns =
    "10% 1fr 1fr";

  document.querySelector(".card-text").style.gridTemplateColumns = "10% 1fr";

  document.querySelector(".card-col-switch-first").style.display = "block";

  document.querySelector(".card-col-switch-last").style.display = "none";
}

function checksideright() {
  document.querySelector(".card-lines").style.gridTemplateColumns =
    "10% 1fr 1fr";

  document.querySelector(".card-text").style.gridTemplateColumns = "10% 1fr";

  document.querySelector(".card-col-switch-first").style.display = "block";

  document.querySelector(".card-col-switch-last").style.display = "none";
}

function changetextto1() {
  document.querySelector(".card-close").classList.remove("mr-5");
  document.querySelector(".card-heading").innerHTML =
    "<h1 class=''>LOT 02</h1>";
  document.querySelector(".card-p").innerHTML =
    "<p class= ''>This 1-acre site offers a tranquil and authentic life immersed in nature.<br>With the heritage forest reserve in the back and blessed with a free-flowing<br> stream to the right, this property is a hidden gem for a nature lover.<br> Anyone purchasing this beautiful property can collaborate<br> and design their home with Shakticola.<br></p>";
}

function changetextto2() {
  document.querySelector(".card-close").classList.remove("mr-5");
  document.querySelector(".card-heading").innerHTML =
    "<h1 class=''>LOT 06</h1>";
  document.querySelector(".card-p").innerHTML =
    "<p class= ''>This site, which is just under an acre has views over the forests<br> and the Nakiyadeniya mountain ranges. Anyone purchasing<br> this beautiful property can collaborate and design<br>their home with Shakticola.<br></p>";
}

function changetextto3() {
  document.querySelector(".card-close").classList.add("mr-5");
  document.querySelector(".card-heading").innerHTML = "<h1>LOT 07</h1>";
  document.querySelector(".card-p").innerHTML =
    "<p>Considered the best site on the estate, this lush 1-acre property sits<br> at the top-centre of the estate on a dramatic site with 20- kilometer views<br> overlooking lush green tea estates and the Nakiyadeniya mountain ranges.<br> Anyone purchasing this beautiful property can collaborate<br> and design their home with Shakticola.<br></p>";
}

function changetextto4() {
  document.querySelector(".card-close").classList.add("mr-5");
  document.querySelector(".card-heading").innerHTML = "<h1>LOT 08</h1>";
  document.querySelector(".card-p").innerHTML =
    "<p>Phoenix Residence. With a completion date of June, 2022,<br> this private contemporary home showcases floor to ceiling glass doors<br> and windows and comes with a generous outdoor deck which spills<br> right into a seamless eternity pool. Designed and project managed<br> by Shakticola and build by Crystal Construction.<br></p>";
}

function closeCard() {
  enable = true;

  closeCardtl
    .to(".lot-link", { pointerEvents: "none" })
    .to(".card-heading", { opacity: 0 }, "<")
    .to(".card-p", { opacity: 0 }, "<")
    .to(".card-close", { opacity: 0 }, "<")
    .to(".card-inquire", { opacity: 0 }, "<")
    .to(".card-lines", { opacity: 0, stagger: -0.1 })
    .to(".animation-content-2", { opacity: 1 }, "<")
    .to(".card", { display: "none" })
    .add(() => {
      oncardtoggle
        .to("#card-close", { opacity: 0 }, "<")
        .to("#card-close", { pointerEvents: "none" }, "<")
        .to(".oncardtoggle", { opacity: 1 })
        .to(".oncardtoggle", { pointerEvents: "auto" }, "<");
    })
    .to(".lot-link", { pointerEvents: "auto" });
}

// menu
function menuappear() {
  document.querySelector(".menu").style.display = "block";
}

function menudisappear() {
  document.querySelector(".menu").style.display = "none";
}

function openMenu() {
  document.querySelector(".body").style.overflowY = "hidden";
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
  document.querySelector(".body").style.overflowY = "auto";

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

// mobile and tab cards

mobilecards = document.querySelectorAll(".mobile-card");

function mobileOpencard() {
  mobiletabcard
    .to(".lotbtn", { opacity: 0, pointerEvents: "none" })
    .to(".appear-w-c", { display: "none" })
    .to(".appear-w-e", { display: "flex" }, "<")
    .add(mobilecardHeightChecker)
    .to(".mobile-content-p", { opacity: 1, delay: 0.5 })
    .to(".appear-w-e", { opacity: 1 });
}

function mobileClosecard() {
  mobiletabcard
    .to(".mobile-content-p", { opacity: 0 })
    .to(".appear-w-e", { opacity: 0 })
    .to(".appear-w-e", { display: "none" })
    .to(".appear-w-c", { display: "flex" }, "<")
    .to(".mobile-card", { y: "84%" })
    .to(".lotbtn", { opacity: 1, pointerEvents: "auto" });
}

function tabOpencard() {
  mobiletabcard
    .to(".lotbtn-tab", { opacity: 0, pointerEvents: "none" })
    .to(".appear-w-c-tab", { display: "none" })
    .to(".appear-w-e-tab", { display: "flex" }, "<")
    .add(mobilecardHeightCheckertab)
    .to(".mobile-content-tab", { opacity: 1, delay: 0.5 })
    .to(".appear-w-e-tab", { opacity: 1 });
}

function tabClosecard() {
  mobiletabcard
    .to(".mobile-content-tab", { opacity: 0 })
    .to(".appear-w-e-tab", { opacity: 0 })
    .to(".appear-w-e-tab", { display: "none" })
    .to(".appear-w-c-tab", { display: "flex" }, "<")
    .to(".tab-card", { y: "84%" })
    .to(".lotbtn-tab", { opacity: 1, pointerEvents: "auto" });
}

// map lot slider management

let slide = 1;

function nextLot() {
  gsap.to(".map-mobile", { objectPosition: "left center", duration: 1 });
}

function mobilecardHeightChecker() {
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

  if (viewportheight <= 1080) {
    gsap.to(".mobile-card", { y: "0" });
  } else {
    mobilecards.forEach((card) => {
      gsap.to(".mobile-card", { y: "50%" });
    });
  }
}

function mobilecardHeightCheckertab() {
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

  if (viewportheight <= 655) {
    gsap.to(".tab-card", { y: "0" });
  } else {
    mobilecards.forEach((card) => {
      gsap.to(".tab-card", { y: "50%" });
    });
  }
}

// mobile and tab map move

// tab

let tabcount = 1;
let direction;

function nextLotTab() {
  if (tabcount < 4) {
    tabcount++;
    direction = "forwards";
    nextMap(tabcount, direction);
  }
}

function prevLotTab() {
  if (tabcount > 1) {
    tabcount = tabcount - 1;
    direction = "backwards";
    nextMap(tabcount, direction);
  }
}

function nextMap(tabcount, direction) {
  switch (tabcount) {
    case 1:
      mobiletabmapmove
        .to(".prev", { opacity: 0, pointerEvents: "none" })
        .to(".next", { opacity: 1, pointerEvents: "auto" }, "<")
        .to(".lot1-tab", { objectPosition: "0% 50%", duration: 1 }, "<")
        .to(".lot2-tab", { objectPosition: "0% 50%", duration: 1 }, "<")
        .to(".lot3-tab", { objectPosition: "0% 50%", duration: 1 }, "<")
        .to(".lot4-tab", { objectPosition: "0% 50%", duration: 1 }, "<")
        .add(changetexttabto1);
      document.querySelector(".lot1-tab").style.opacity = 1;
      document.querySelector(".lot2-tab").style.opacity = 0;
      document.querySelector(".lot3-tab").style.opacity = 0;
      document.querySelector(".lot4-tab").style.opacity = 0;

      break;
    case 2:
      mobiletabmapmove
        .to(".prev", { opacity: 1, pointerEvents: "auto" })
        .to(".next", { opacity: 1, pointerEvents: "auto" }, "<")
        .to(".lot1-tab", { objectPosition: "45% 50%", duration: 1 }, "<")
        .to(".lot2-tab", { objectPosition: "45% 50%", duration: 1 }, "<")
        .to(".lot3-tab", { objectPosition: "45% 50%", duration: 1 }, "<")
        .to(".lot4-tab", { objectPosition: "45% 50%", duration: 1 }, "<")
        .add(changetexttabto2);
      document.querySelector(".lot2-tab").style.opacity = 1;
      document.querySelector(".lot1-tab").style.opacity = 0;
      document.querySelector(".lot3-tab").style.opacity = 0;
      document.querySelector(".lot4-tab").style.opacity = 0;
      break;
    case 3:
      mobiletabmapmove
        .to(".prev", { opacity: 1, pointerEvents: "auto" })
        .to(".next", { opacity: 1, pointerEvents: "auto" }, "<")
        .to(".lot1-tab", { objectPosition: "70% 50%", duration: 1 }, "<")
        .to(".lot2-tab", { objectPosition: "70% 50%", duration: 1 }, "<")
        .to(".lot3-tab", { objectPosition: "70% 50%", duration: 1 }, "<")
        .to(".lot4-tab", { objectPosition: "70% 50%", duration: 1 }, "<")
        .add(changetexttabto3);

      document.querySelector(".lot3-tab").style.opacity = 1;
      document.querySelector(".lot1-tab").style.opacity = 0;
      document.querySelector(".lot2-tab").style.opacity = 0;
      document.querySelector(".lot4-tab").style.opacity = 0;

      break;
    case 4:
      mobiletabmapmove
        .to(".prev", { opacity: 1, pointerEvents: "auto" })
        .to(".next", { opacity: 0, pointerEvents: "none" }, "<")
        .to(".lot1-tab", { objectPosition: "90% 30%", duration: 1 }, "<")
        .to(".lot2-tab", { objectPosition: "90% 30%", duration: 1 }, "<")
        .to(".lot3-tab", { objectPosition: "90% 30%", duration: 1 }, "<")
        .to(".lot4-tab", { objectPosition: "90% 30%", duration: 1 }, "<")
        .add(changetexttabto4);
      document.querySelector(".lot4-tab").style.opacity = 1;
      document.querySelector(".lot1-tab").style.opacity = 0;
      document.querySelector(".lot2-tab").style.opacity = 0;
      document.querySelector(".lot3-tab").style.opacity = 0;

      break;
  }
}

// mobile
let mobilecount = 1;
let mobiledirection;

function nextLotMob() {
  if (mobilecount < 4) {
    mobilecount++;
    mobiledirection = "forwards";
    nextMapMob(mobilecount, mobiledirection);
  }
}

function previousLotMob() {
  if (mobilecount > 1) {
    mobilecount = mobilecount - 1;
    mobiledirection = "backwards";
    nextMapMob(mobilecount, mobiledirection);
  }
}

function nextMapMob(mobilecount, mobiledirection) {
  switch (mobilecount) {
    case 1:
      mobiletabmapmove
        .to(".prev-mob", { opacity: 0, pointerEvents: "none" })
        .to(".next-mob", { opacity: 1, pointerEvents: "auto" }, "<")
        .to(".lot1-mobile", { objectPosition: "5% 50%", duration: 1 }, "<")
        .to(".lot2-mobile", { objectPosition: "5% 50%", duration: 1 }, "<")
        .to(".lot3-mobile", { objectPosition: "5% 50%", duration: 1 }, "<")
        .to(".lot4-mobile", { objectPosition: "5% 50%", duration: 1 }, "<")
        .add(changetextmobileto1);
      document.querySelector(".lot1-mobile").style.opacity = 1;
      document.querySelector(".lot2-mobile").style.opacity = 0;
      document.querySelector(".lot3-mobile").style.opacity = 0;
      document.querySelector(".lot4-mobile").style.opacity = 0;

      break;
    case 2:
      mobiletabmapmove
        .to(".prev-mob", { opacity: 1, pointerEvents: "auto" })
        .to(".next-mob", { opacity: 1, pointerEvents: "auto" }, "<")
        .to(".lot1-mobile", { objectPosition: "45% 50%", duration: 1 }, "<")
        .to(".lot2-mobile", { objectPosition: "45% 50%", duration: 1 }, "<")
        .to(".lot3-mobile", { objectPosition: "45% 50%", duration: 1 }, "<")
        .to(".lot4-mobile", { objectPosition: "45% 50%", duration: 1 }, "<")
        .add(changetextmobileto2);
      document.querySelector(".lot2-mobile").style.opacity = 1;
      document.querySelector(".lot1-mobile").style.opacity = 0;
      document.querySelector(".lot3-mobile").style.opacity = 0;
      document.querySelector(".lot4-mobile").style.opacity = 0;

      break;
    case 3:
      mobiletabmapmove
        .to(".prev-mob", { opacity: 1, pointerEvents: "auto" })
        .to(".next-mob", { opacity: 1, pointerEvents: "auto" }, "<")
        .to(".lot1-mobile", { objectPosition: "70% 50%", duration: 1 }, "<")
        .to(".lot2-mobile", { objectPosition: "70% 50%", duration: 1 }, "<")
        .to(".lot3-mobile", { objectPosition: "70% 50%", duration: 1 }, "<")
        .to(".lot4-mobile", { objectPosition: "70% 50%", duration: 1 }, "<")
        .add(changetextmobileto3);

      document.querySelector(".lot3-mobile").style.opacity = 1;
      document.querySelector(".lot1-mobile").style.opacity = 0;
      document.querySelector(".lot2-mobile").style.opacity = 0;
      document.querySelector(".lot4-mobile").style.opacity = 0;

      break;
    case 4:
      mobiletabmapmove
        .to(".prev-mob", { opacity: 1, pointerEvents: "auto" })
        .to(".next-mob", { opacity: 0, pointerEvents: "none" }, "<")
        .to(".lot1-mobile", { objectPosition: "90% 0%", duration: 1 }, "<")
        .to(".lot2-mobile", { objectPosition: "90% 0%", duration: 1 }, "<")
        .to(".lot3-mobile", { objectPosition: "90% 0%", duration: 1 }, "<")
        .to(".lot4-mobile", { objectPosition: "90% 0%", duration: 1 }, "<")
        .add(changetextmobileto4);
      document.querySelector(".lot4-mobile").style.opacity = 1;
      document.querySelector(".lot1-mobile").style.opacity = 0;
      document.querySelector(".lot2-mobile").style.opacity = 0;
      document.querySelector(".lot3-mobile").style.opacity = 0;

      break;
  }
}

function changetexttabto1() {
  document.querySelector(".card-tab-heading").innerHTML = "LOT 02";
  document.querySelector(".card-tab-p").innerHTML =
    "This 1-acre site offers a tranquil and authentic life immersed in nature.<br>With the heritage forest reserve in the back and blessed with a free-flowing<br> stream to the right, this property is a hidden gem for a nature lover.<br> Anyone purchasing this beautiful property can collaborate<br> and design their home with Shakticola.<br>";
}

function changetexttabto2() {
  document.querySelector(".card-tab-heading").innerHTML = "LOT 06";
  document.querySelector(".card-tab-p").innerHTML =
    "This site, which is just under an acre has views over the forests<br> and the Nakiyadeniya mountain ranges. Anyone purchasing<br> this beautiful property can collaborate and design<br>their home with Shakticola.<br><br>";
}

function changetexttabto3() {
  document.querySelector(".card-tab-heading").innerHTML = "LOT 07";
  document.querySelector(".card-tab-p").innerHTML =
    "Considered the best site on the estate, this lush 1-acre property sits<br> at the top-centre of the estate on a dramatic site with 20- kilometer views<br> overlooking lush green tea estates and the Nakiyadeniya mountain ranges.<br> Anyone purchasing this beautiful property can collaborate<br> and design their home with Shakticola.<br>";
}

function changetexttabto4() {
  document.querySelector(".card-tab-heading").innerHTML = "LOT 08";
  document.querySelector(".card-tab-p").innerHTML =
    "Phoenix Residence. With a completion date of June, 2022,<br> this private contemporary home showcases floor to ceiling glass doors<br> and windows and comes with a generous outdoor deck which spills<br> right into a seamless eternity pool. Designed and project managed<br> by Shakticola and build by Crystal Construction.";
}

function changetextmobileto1() {
  document.querySelector(".card-mobile-heading").innerHTML = "LOT 02";
  document.querySelector(".card-mobile-p").innerHTML =
    "This 1-acre site offers a tranquil and authentic life immersed in nature.With the heritage forest reserve in the back and blessed with a free-flowing stream to the right, this property is a hidden gem for a nature lover. Anyone purchasing this beautiful property can collaborate and design their home with Shakticola.";
}

function changetextmobileto2() {
  document.querySelector(".card-mobile-heading").innerHTML = "LOT 06";
  document.querySelector(".card-mobile-p").innerHTML =
    "This site, which is just under an acre has views over the forests and the Nakiyadeniya mountain ranges. Anyone purchasing this beautiful property can collaborate and design their home with Shakticola.<span class ='hide'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex consectetur quasi velit, voluptatum inventore obcaecati molestiae ipsam </span>";
}

function changetextmobileto3() {
  document.querySelector(".card-mobile-heading").innerHTML = "LOT 07";
  document.querySelector(".card-mobile-p").innerHTML =
    "Considered the best site on the estate, this lush 1-acre property sits at the top-centre of the estate on a dramatic site with 20- kilometer views overlooking lush green tea estates and the Nakiyadeniya mountain ranges. Anyone purchasing this beautiful property can collaborate and design their home with Shakticola.";
}

function changetextmobileto4() {
  document.querySelector(".card-mobile-heading").innerHTML = "LOT 08";
  document.querySelector(".card-mobile-p").innerHTML =
    "Phoenix Residence. With a completion date of June, 2022, this private contemporary home showcases floor to ceiling glass doors and windows and comes with a generous outdoor deck which spills right into a seamless eternity pool. Designed and project managed by Shakticola and build by Crystal Construction.";
}
