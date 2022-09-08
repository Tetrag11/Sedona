let mapmovetl = gsap.timeline();
let mobiletabmapmove = gsap.timeline();

function movemap1() {
  document.querySelector(".lot0").style.opacity = 0;
  document.querySelector(".lot1").style.opacity = 1;
  document.querySelector(".lot2").style.opacity = 0;

  mapmovetl
    .to(".lot0", { scale: 1.1, x: "10px" })
    .to(".lot1", { scale: 1.1, x: "10px" }, "<")
    .to(".lot2", { scale: 1.1, x: "10px" }, "<");
}

function movemap2() {
  document.querySelector(".lot0").style.opacity = 0;
  document.querySelector(".lot1").style.opacity = 0;
  document.querySelector(".lot2").style.opacity = 1;

  mapmovetl
    .to(".lot0", { scale: 1.1, x: "-10px" })
    .to(".lot1", { scale: 1.1, x: "-10px" }, "<")
    .to(".lot2", { scale: 1.1, x: "-10px" }, "<");
}

function killBanner() {
  gsap.to(".map-web-banner", { opacity: 0, duration: 2 });
}

let tabcount = 1;

function nextLotTab() {
  console.log("adashdg");
  if (tabcount < 4) {
    tabcount++;
    direction = "forwards";
    nextMap(tabcount);
  }
}

function prevLotTab() {
  if (tabcount > 1) {
    tabcount = tabcount - 1;
    direction = "backwards";
    nextMap(tabcount);
  }
}

function nextMap(tabcount) {
  switch (tabcount) {
    case 1:
      mobiletabmapmove
        .to(".prev", { opacity: 0, pointerEvents: "none" })
        .to(".next", { opacity: 1, pointerEvents: "auto" }, "<")
        .to(".lot0", { objectPosition: "0% 50%", duration: 1 }, "<")
        .to(".lot1", { objectPosition: "0% 50%", duration: 1 }, "<")
        .to(".lot2", { objectPosition: "0% 50%", duration: 1 }, "<")
        .add(changetext1);
      document.querySelector(".lot0").style.opacity = 0;
      document.querySelector(".lot1").style.opacity = 1;
      document.querySelector(".lot2").style.opacity = 0;

      break;

    case 2:
      mobiletabmapmove
        .to(".prev", { opacity: 1, pointerEvents: "auto" })
        .to(".next", { opacity: 0, pointerEvents: "none" }, "<")
        .to(".lot0", { objectPosition: "100% 50%", duration: 1 }, "<")
        .to(".lot1", { objectPosition: "100% 50%", duration: 1 }, "<")
        .to(".lot2", { objectPosition: "100% 50%", duration: 1 }, "<")
        .add(changetext2);

      document.querySelector(".lot0").style.opacity = 0;
      document.querySelector(".lot1").style.opacity = 0;
      document.querySelector(".lot2").style.opacity = 1;

      break;
  }
}

function changetext1() {
  document.querySelector(".tab-showing-text").innerHTML = "LOT 02";
}

function changetext2() {
  document.querySelector(".tab-showing-text").innerHTML = "LOT 07";
}
