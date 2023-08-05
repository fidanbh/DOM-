let left = document.getElementById("leftIcon");
let right = document.getElementById("rightIcon");
let imageclass = document.querySelector(".imageclass");


let imgArr = [
  "https://i.hizliresim.com/97s7pya.jpg",
  "https://i.hizliresim.com/pumz2de.jpg",
  "https://i.hizliresim.com/du732s1.jpg",
  "https://i.hizliresim.com/r4jhsqm.jpg",
  "https://i.hizliresim.com/8gtidbw.jpg",
];

let i = 0;
imageclass.src = imgArr[0];
function getLeftBtn() {
  i--;
  if (i == -1) {
    i = imgArr.length - 1;
  }
  imageclass.setAttribute("src", imgArr[i]);
}

function getRightBtn() {
  i++;
  if (i == imgArr.length) {
    i = 0;
  }
  imageclass.setAttribute("src", imgArr[i]);
}


