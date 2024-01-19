const header = document.querySelector("header");
const homebg = document.querySelector(".homeBackground");
const menu = document.querySelector(".toggleMenu");
const links = document.querySelector("nav");
const sections = document.querySelectorAll("section");
let menuOpen = false;

const config = {
  rootMargin: "0px",
  threshold: [0.6, 0.9],
};

//Header menu animation
function handleLinks() {
  if (window.innerWidth <= 991) {
    if (!menuOpen) {
      menu.classList.add("open");
      header.style.backgroundColor = "#181818";
      menuOpen = true;
    } else {
      menu.classList.remove("open");
      setTimeout(function () {
        header.style.backgroundColor = "transparent";
      }, 350);
      menuOpen = false;
    }

    links.classList.toggle("visible");
  }
}


window.addEventListener("resize", (event) => {
  links.classList.remove("visible");
  menu.classList.remove("open");
  menuOpen = false;
  if (window.innerWidth > 991) {
    header.style.backgroundColor = "#181818";
  } else {
    header.style.backgroundColor = "transparent";
  }
  // window.scrollTo(0, 0);
  // location.reload();
});

menu.addEventListener("click", handleLinks);
links.addEventListener("click", handleLinks);

//made with ai text animation --------------------------------------------------------------------------------------------
// const arrow =  document.querySelector(' #arrow');
// const aiText =  document.querySelector(' #aiText');

// document.querySelector('.homeProfilePicture').addEventListener("mouseover", () =>{
//   arrow.style.display = "initial";
//   this.setTimeout(()=>{
//     if( arrow.style.display != "none") aiText.style.display = "initial";
//   }, 1200)

// });

// document.querySelector('.homeProfilePicture').addEventListener("mouseout", () =>{
//   arrow.style.display = "none";
//   aiText.style.display = "none";
// });

//----------------------------------------------------------------------------------------------------------------------------

//skillset orbit animation

$(document).ready(function () {
  var pageWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (
    pageWidth >= 535 &&
    !$("#myCanvas").tagcanvas(
      {
        textFont: "Montserrat, sans-serif",
        maxSpeed: 0.043,
        minSpeed: 0.01,
        textColour: "#FFF",
        textHeight: 40,
        outlineMethod: "colour",
        outlineColour: "#D2B48C",
        outlineOffset: 0,
        depth: 0.97,
        minBrightness: 0.2,
        reverse: false,
        shadowBlur: 2,
        initial: [0.05, 0],
        clickToFront: 400,
        wheelZoom: false,
        stretchY: 0.75,
      },
      "tags"
    )
  ) {
    // something went wrong hide the canvas container,
    $("#myCanvasContainer");
  } else 
  if (
     pageWidth < 535 &&
    !$("#myCanvas").tagcanvas(
      {
        textFont: "Montserrat, sans-serif",
        maxSpeed: 0.043,
        minSpeed: 0.01,
        textColour: "#FFF",
        textHeight: 40,
        outlineMethod: "colour",
        outlineColour: "#D2B48C",
        outlineOffset: 0,
        depth: 0.97,
        minBrightness: 0.2,
        reverse: false,
        shadowBlur: 2,
        initial: [0.05, 0],
        clickToFront: 400,
        wheelZoom: false,
        stretchX: 0.75,
      },
      "tags"
    )
  ) {
    // something went wrong hide the canvas container,
    $("#myCanvasContainer");
  }
});
