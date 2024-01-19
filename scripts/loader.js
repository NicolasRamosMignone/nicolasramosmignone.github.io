preloaderText = document.getElementById("preloader-text");
eye = document.querySelector(".eye");

// Get the target element's position
var targetRect = eye.getBoundingClientRect();
var targetX = targetRect.left + window.scrollX;
var targetY = targetRect.top + window.scrollY;

// Calculate the distance between the source and target elements
var distanceX = targetX - preloaderText.offsetLeft;
var distanceY = targetY - preloaderText.offsetTop;

distanceX -= (preloaderText.offsetWidth - eye.offsetWidth) / 2;
distanceY -= (preloaderText.offsetHeight - eye.offsetHeight) / 2;

this.setTimeout(function () {
  preloaderText.classList.add("fade-in");
}, 2000);

var loader = document.getElementById("preloader");

function fadeOut(element) {
  let opacity = 1;
  //if (window.innerWidth > 991) {
    //console.log(distanceX + "-" + distanceY);
    //preloaderText.style.transform =
      //"translate(" + distanceX + "px, " + distanceY + "px)";
   // preloaderText.classList.add("intoEye");
    //preloaderText.style.fontSize = "8px";
  //} else preloaderText.style.fontSize = "1px";
  this.setTimeout(function () {
    function decreaseOpacity() {
      if (opacity <= 0) {
        element.style.display = "none";
        //document.querySelector(".home").style.opacity = 1;
      } else {
        element.style.opacity = opacity;
        opacity -= 0.02;
        requestAnimationFrame(decreaseOpacity);
      }
    }
    decreaseOpacity();
  }, 800);
}

window.addEventListener("load", function () {
  this.setTimeout(function () {
    fadeOut(loader);
    this.setTimeout(function () {
      document.getElementById("body").classList.remove("scroll-disabled");

      document.querySelector(".home-title").classList.remove("no-opacity");
      document.querySelector(".home-text").classList.remove("no-opacity");
      document.querySelector("#side-name").classList.remove("no-opacity");
      document.querySelector("#side-buttons").classList.remove("no-opacity");
    }, 2200);

    this.setTimeout(function(){
      document.querySelector(".home-picture").classList.remove("no-opacity");
    }, 1200)
  }, 2100);
});
