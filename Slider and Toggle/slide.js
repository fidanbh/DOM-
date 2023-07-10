let left = document.getElementById("leftIcon");
let right = document.getElementById("rightIcon");
let slider = document.querySelectorAll(".slider");
let slider1 = document.getElementById("slider1");
//let slider2 = document.getElementById("slider2");

//console.log(slider);

// let imgArr = [
//   "https://i.hizliresim.com/97s7pya.jpg",
//   "https://i.hizliresim.com/pumz2de.jpg",
//   "https://i.hizliresim.com/1fx5qz5.jpg",
//   "https://i.hizliresim.com/r4jhsqm.jpg",
//   "https://i.hizliresim.com/8gtidbw.jpg",
// ];

left.addEventListener("click", function () {
  slider.forEach((item) => {
    console.log(item);
    console.log(item.previousElementSibling);
  });
  console.log(slider1.previousElementSibling);
});
