const data = [
    {
      id: 1,
      title: "Xiaomi Redmi 12",
      price: "1500",
      buttonText: "Add to cart",
      image:
        "https://kontakt.az/wp-content/uploads/2023/06/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82-15-17_png.webp",
    },
    {
      id: 2,
      title: "Iphone 13 128 GB",
      price: "1600",
      buttonText: "Add to cart",
      image:
        "https://kontakt.az/wp-content/uploads/2021/09/iPhone-13-Midnight-1_png.webp",
    },
    {
      id: 3,
      title: "Iphone 11 64 GB White",
      price: "1000",
      buttonText: "Add to cart",
      image: "https://kontakt.az/wp-content/uploads/2019/09/00453542_3.jpg",
    },
    {
      id: 4,
      title: "Iphone 13 128 GB Blue",
      price: "1200",
      buttonText: "Add to cart",
      image:
        "https://kontakt.az/wp-content/uploads/2021/09/1_304241-min_png.webp",
    },
    {
      id: 5,
      title: "Samsung Galaxy S11",
      price: "1600",
      buttonText: "Add to cart",
      image:
        "https://kontakt.az/wp-content/uploads/2023/06/New-Project-2023-06-14T145823.296_png.webp",
    },
    {
      id: 6,
      title: "Iphone 14 128 GB",
      price: "900",
      buttonText: "Add to cart",
      image:
        "https://kontakt.az/wp-content/uploads/2022/09/iPhone-14-Pro-Max-128-GB-Space-Black-1_png.webp",
    },
    {
      id: 7,
      title: "Samsung Galaxy A53",
      price: "1000",
      buttonText: "Add to cart",
      image:
        "https://kontakt.az/wp-content/uploads/gallery-tum/TM-DG-SBP-1105-SM-2232_baa8d08d9b511945b3afafb9dc551fdf_w_png.webp",
    },
    {
      id: 8,
      title: "Iphone 14 Pro 256 GB",
      price: "1500",
      buttonText: "Add to cart",
      image:
        "https://kontakt.az/wp-content/uploads/2022/09/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82-2022-09-28T092235.773_png.webp",
    },
    {
      id: 9,
      title: "Samsung Galaxy A54",
      price: "900",
      buttonText: "Add to cart",
      image:
        "https://kontakt.az/wp-content/uploads/gallery-tum/TM-DG-SBP-1105-SM-2229_dd6f08cbcdd3885138ac48a8c00e1bcd_w_png.webp",
    },
    {
      id: 10,
      title: "Apple Airpods 2",
      price: "700",
      buttonText: "Add to cart",
      image:
        "https://kontakt.az/wp-content/uploads/2019/03/Kontakt-home-37_png.webp",
    },
  ];
  
  let carts = document.getElementById("carts");
  data.map((item) => {
    carts.innerHTML += `<div class='cart'><img src='${item.image}'><h2>${item.title}</h2><div class='p_button'><p>${item.price} $</p><button id='${item.id}' class='buttonStyle'>${item.buttonText}</button></div></div>`;
  });
  
  let arrData = [];
  let button = document.querySelectorAll(".buttonStyle");
  let basket = document.getElementById("basket");
  let counterText = document.getElementById("numberProducts");
  let counter = 1;
  const clickableButtons = document.getElementsByClassName("buttonStyle");
  let basketProducts = document.getElementById("basketProducts");
  let dataFromLocal = localStorage.getItem("arrDatas");
  
  function findItemById(id) {
    return data.find((item) => item.id === id);
  }
  function handleClick(event) {
    const buttonId = event.target.id;
    const item = findItemById(parseInt(buttonId));
    arrData.push(item);
  
    counterText.innerHTML = counter++;
    localStorage.setItem("arrDatas", JSON.stringify(arrData));
  }
  
  for (const button of clickableButtons) {
    button.addEventListener("click", handleClick);
  }
  
  let dataFromLocalStr = localStorage.getItem("arrDatas");
  let dataFromLocalParse = JSON.parse(dataFromLocalStr);
  let basketModal = document.getElementById("basketModal");
  
  basket.addEventListener("click", function () {
    dataFromLocalParse.forEach((key) => {
      console.log("key: " + key);
      basketModal.innerHTML += `<div class='modal_page'><img src='${key.image}'><h2>${key.title}</h2><p>${key.price} $</p><button id="deleteButton"><i class="fa-solid fa-trash"></i></button></div>`;
    });
    carts.style.display = "none";
    basketModal.classList.add("open");
    console.log(basketProducts);
    let closeButton = document.getElementById("closeButton");
    closeButton.addEventListener("click", function () {
      basketModal.classList.remove("open");
      carts.style.display = "flex";
    });
    let deleteButton = document.getElementById("deleteButton");
    deleteButton.addEventListener("click", function () {
      dataFromLocalParse.remove();
    });
  });