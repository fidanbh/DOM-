//First task
//Task 1: Change Background Color
//Create an HTML file with a button. When the button is clicked, change the background color of the page to a random color.

let btn = document.getElementById("btn");
let bodyColor = document.getElementById("bodyColor");

let getRandomColor = () => {
  let red = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  return `rgb(${red},${blue},${green})`;
};

btn.addEventListener("click", changeColor);

function changeColor() {
  //const randomColorOne = getRandomColor();
  document.body.style.backgroundColor = getRandomColor();
}

//Task 2: Create an HTML file with a button and a counter display. When the button is clicked, increment
//the counter and update the display.

btn.addEventListener("click", changeInner);

function changeInner() {
  let i = bodyColor.innerHTML;
  i++;
  bodyColor.innerHTML = i;
}

//Task 3: Create an HTML element for the image tag and show the screen an image then create a button in HTML
//and write a function in js for button click. When click the button change the image source(src) attribute

function changeImage() {
  let getAttribute = document.getElementById("image");
  console.log(getAttribute);
  getAttribute.setAttribute(
    "src",
    "https://th.bing.com/th/id/OIP.86ELhh20ZbpygQXDDXHXxgAAAA?pid=ImgDet&rs=1"
  );
}

btn.addEventListener("click", changeImage);
