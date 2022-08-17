const explore = gsap.timeline();

const inner = gsap.timeline();

let tabcount = 1;

function textSwitch() {
  gsap.to("#explore", { pointerEvents: "none" });
  if (tabcount <= 3) {
    tabcount++;
    console.log(tabcount);
    nextSlide(tabcount);
  } else {
    tabcount = 1;
    console.log(tabcount);

    nextSlide(tabcount);
  }
}

function nextSlide(tabcount) {
  switch (tabcount) {
    case 1:
      explore
        .to(".exp-1", { opacity: 1 })
        .to(".exp-2", { opacity: 0 }, "<")
        .to(".exp-3", { opacity: 0 }, "<")
        .to(".exp-4", { opacity: 0 }, "<")
        .to(".exp-5", { opacity: 0 }, "<")
        .to(".exp-6", { opacity: 0 }, "<")
        .add(changeText(1))
        .to("#explore", { pointerEvents: "auto" });
      break;

    case 2:
      explore
        .to(".exp-1", { opacity: 0 })
        .to(".exp-2", { opacity: 1 }, "<")
        .to(".exp-3", { opacity: 0 }, "<")
        .to(".exp-4", { opacity: 0 }, "<")
        .to(".exp-5", { opacity: 0 }, "<")
        .to(".exp-6", { opacity: 0 }, "<")
        .add(changeText(2))
        .to("#explore", { pointerEvents: "auto" });
      break;
    case 3:
      explore
        .to(".exp-1", { opacity: 0 })
        .to(".exp-2", { opacity: 0 }, "<")
        .to(".exp-3", { opacity: 1 }, "<")
        .to(".exp-4", { opacity: 0 }, "<")
        .to(".exp-5", { opacity: 0 }, "<")
        .to(".exp-6", { opacity: 0 }, "<")
        .add(changeText(3))
        .to("#explore", { pointerEvents: "auto" });
      break;
    case 4:
      explore
        .to(".exp-1", { opacity: 0 })
        .to(".exp-2", { opacity: 0 }, "<")
        .to(".exp-3", { opacity: 0 }, "<")
        .to(".exp-4", { opacity: 1 }, "<")
        .to(".exp-5", { opacity: 0 }, "<")
        .to(".exp-6", { opacity: 0 }, "<")
        .add(changeText(4))
        .to("#explore", { pointerEvents: "auto" });
      break;
    case 5:
      explore
        .to(".exp-1", { opacity: 0 })
        .to(".exp-2", { opacity: 0 }, "<")
        .to(".exp-3", { opacity: 0 }, "<")
        .to(".exp-4", { opacity: 0 }, "<")
        .to(".exp-5", { opacity: 1 }, "<")
        .to(".exp-6", { opacity: 0 }, "<")
        .add(changeText(5))
        .to("#explore", { pointerEvents: "auto" });
      break;
    case 6:
      explore
        .to(".exp-1", { opacity: 0 })
        .to(".exp-2", { opacity: 0 }, "<")
        .to(".exp-3", { opacity: 0 }, "<")
        .to(".exp-4", { opacity: 0 }, "<")
        .to(".exp-5", { opacity: 0 }, "<")
        .to(".exp-6", { opacity: 1 }, "<")
        .add(changeText(5))
        .to("#explore", { pointerEvents: "auto" });
      break;

    default:
      explore
        .to(".exp-1", { opacity: 1 })
        .to(".exp-2", { opacity: 0 }, "<")
        .to(".exp-3", { opacity: 0 }, "<")
        .to(".exp-4", { opacity: 0 }, "<")
        .to(".exp-5", { opacity: 0 }, "<")
        .to(".exp-6", { opacity: 0 }, "<")
        .add(changeText(1), "< 2");
      break;
  }
}

function changeText(x) {
  let alltext = document.querySelectorAll(".exploretextswitch");
  alltext.forEach((element) => {
    switch (x) {
      case 1:
        gsap.from(element, { opacity: 0 });
        element.innerHTML =
          "<br class='hidden sm:block'><br class='hidden sm:block'>30 minutes to Heritage Galle Fort, an eclectic fusion <br class='hidden sm:block'>of history and modern life with a hint of nostalgia <br class='hidden sm:block'>of an era gone by. ";
        break;

      case 2:
        gsap.from(element, { opacity: 0 });
        element.innerHTML =
          "<br class='hidden sm:block'><br class='hidden sm:block'>35 minutes to Heritage Galle Fort, an eclectic fusion<br class='hidden sm:block'> of history and modern life with a hint of nostalgia<br class='hidden sm:block'> of an era gone by.";
        break;
      case 3:
        gsap.from(element, { opacity: 0 });
        element.innerHTML =
          "<br class='hidden sm:block'>40 minutes to the lively boho-style town of Unawatuna,<br class='hidden sm:block'> and further down the coast to the Light House in Ahangama to<br class='hidden sm:block'> the yoga retreats of Talalla Bay to the beautiful beaches of Hiriketiya <br class='hidden sm:block'>and on to the sleepy town of Tangalle. The coast is all yours";
        break;
      case 4:
        gsap.from(element, { opacity: 0 });
        element.innerHTML =
          "Dotted all around the southern coast are luxury villas, resorts,<br class='hidden sm:block'> and eco-living, all creating a beautiful melting pot of places to visit.<br class='hidden sm:block'> Surfing, sailing, whale watching, kayaking or just simply sipping a<br class='hidden sm:block'> delicious hot cup of our famous Sri Lankan tea on the balcony<br class='hidden sm:block'> at the Amangala Hotel.";
        break;
      case 5:
        gsap.from(element, { opacity: 0 });
        element.innerHTML =
          "Sedona Canyon Estate is a few minutes away from the<br class='hidden sm:block'> lush green Kottawa Rain Forest Reserve where birds of paradise<br class='hidden sm:block'> do exist alongside monkeys, peacocks, and fauna. The forests,<br class='hidden sm:block'> the mountains, the paddy fields & tea estates, all simply<br class='hidden sm:block'> melting around you. It’s pure living. ";
        break;

      default:
        gsap.from(element, { opacity: 0 });
        element.innerHTML =
          "30 minutes to Heritage Galle Fort, an eclectic fusion <br class='hidden sm:block'>of history and modern life with a hint of nostalgia <br class='hidden sm:block'>of an era gone by. ";
        break;
    }
  });
}
