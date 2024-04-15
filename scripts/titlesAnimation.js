$(document).on("scroll", function () {
  var pageWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  $("#aboutme").css(
    "left",
    Math.max(-300 + 0.35 * window.scrollY, -10000) + "px"
  );
  $("#myskills").css(
    "right",
    Math.max(-pageWidth + 800 + 0.35 * window.scrollY, -10000) + "px"
  );
  $("#contactme").css(
    "left",
    Math.max(-400 + 0.35 * (window.scrollY - 3550), -10000) + "px"
  );
});

$(window).resize(function () {
  var pageWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (pageWidth < 535) {
    document.querySelector("#aboutme").textContent = "ABOUT";
    document.querySelector("#myskills").textContent = "SKILLSET";
  } else {
    document.querySelector("#aboutme").textContent = "ABOUT ME";
    document.querySelector("#myskills").textContent = "MY SKILLSET";
  }
  $("#aboutme").css(
    "left",
    Math.max(-300 + 0.35 * window.scrollY, -1000) + "px"
  );
  $("#myskills").css(
    "right",
    Math.max(-pageWidth + 800 + 0.35 * window.scrollY, -10000) + "px"
  );
  $("#contactme").css(
    "left",
    Math.max(-300 + 0.35 * window.scrollY, -1000) + "px"
  );
});
