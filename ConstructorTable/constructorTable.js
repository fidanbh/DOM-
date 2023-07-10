let inputName = document.getElementById("inputName");
let inputSurname = document.getElementById("inputSurname");
let inputPassword = document.getElementById("inputPassword");
let form = document.querySelector("form");
let pText1 = document.getElementById("pText1");
let tableText = document.getElementById("tableText");

// const submitData = (event) => {
//   event.preventDefault();
//   console.log(event);
//   //pText.innerHTML = event.value;
// };

//console.log(input.value);

function Person(name, surname, password) {
  this.name = name;
  this.surname = surname;
  this.password = password;
}

let dataArr = [];
form.addEventListener("submit", function (event) {
  dataArr = [];
  event.preventDefault();
  dataArr.push(
    new Person(inputName.value, inputSurname.value, inputPassword.value)
  );
  console.log(dataArr);

  let mapData = dataArr.map((item) => {
    // console.log(item.name);
    // let trText = document.createElement("tr");
    // let tdName = document.createElement("td");
    // tdName.classList.add("td");
    // tdName.innerHTML = item.name;
    // trText.appendChild(tdName);
    // item.name = " ";

    // let tdSurname = document.createElement("td");
    // tdSurname.classList.add("td");
    // tdSurname.innerHTML = item.surname;
    // trText.appendChild(tdSurname);
    // item.surname = " ";

    // let tdPassword = document.createElement("td");
    // tdPassword.classList.add("td");
    // tdPassword.innerHTML = item.password;
    // trText.appendChild(tdPassword);
    // item.password = " ";

    // tableText.appendChild(trText);

    tableText.innerHTML += `<tr><td>${item.name}</td><td>${item.surname}</td><td>${item.password}</td></tr>`;
  });
});
// inputName.value=' '
// inputName.value=' '
// inputName.value=' '
