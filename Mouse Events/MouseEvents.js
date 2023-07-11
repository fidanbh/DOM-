let firstImg = document.getElementById("img-first");
let secondImg = document.getElementById("img-second");
let thirdImg = document.getElementById("img-third");

firstImg.addEventListener("mouseover", () => {
  firstImg.style.width = "500px";
  firstImg.style.height = "572px";
  secondImg.style.width = "150px";
  thirdImg.style.width = "150px";
});
secondImg.addEventListener("mouseover", () => {
  secondImg.style.width = "500px";
  firstImg.style.width = "150px";
  thirdImg.style.width = "150px";
});

thirdImg.addEventListener("mouseover", () => {
  thirdImg.style.width = "500px";
  firstImg.style.width = "150px";
  secondImg.style.width = "150px";
});


