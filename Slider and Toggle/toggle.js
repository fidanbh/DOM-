const oval = document.getElementById("toggle-oval");

const circle = document.getElementById("toggle-circle");

circle.addEventListener("click", function () {
  let body = document.body;
  circle.classList.toggle("circle_left");
  body.classList.toggle("body_bg_color");
});
