import { games } from "./data.js";
let galery = document.getElementById("galery-card");
let inputSearch = document.getElementById("search");
let all = document.getElementById("all");
let RPG = document.getElementById("RPG");
let sport = document.getElementById("sport");
let action = document.getElementById("action");
let FPS = document.getElementById("FPS");
let Panier = document.getElementById("panier");
let main = document.getElementById("main");
let home = document.getElementById("home");
let footerPanier = document.getElementById("addpanier");
let panierContainer = document.getElementById("panierContainer");
let titlePanier = document.getElementById("titlePanier");
let alert=document.getElementById('alert')
let btnalert=document.getElementById('btnalert')
let iconPanier=document.querySelector('.iconPanier')
let homefooter=document.getElementById('homefooter')

let listgames = [];

function displayGame() {
  galery.innerHTML=''
  let array = JSON.parse(localStorage.getItem("games"));
  if (Array.isArray(array)) {
    listgames = array;
  }
  localStorage.setItem("games", JSON.stringify(listgames));

  for (let i = 0; i < games.length; i++) {
    galery.innerHTML += `
        <div id="card" class="card relative  rounded-2xl shadow w-64 h-96  mb-2 ">
        <div class="">
        <img src="${games[i].image}" class="imgcard w-full h-80 object-cover rounded-t-3xl bg-black">
        </div>
        <div class="border border-black p-4 bg-white rounded-3xl absolute bottom-2 w-full ">
        <div class="flex justify-between">
        <h2  class="name font-bold text-lg text-[#4949ff]">${games[i].title}</h2>
        <img src="./images/cart.png" class="iconPanier w-10 h-10 cursor-pointer">
        </div>
        <div class="flex justify-between ">
        <p class="price text-green-600 font-bold">${games[i].price}$</p>
        <p class="text-gray-500 font-bold">${games[i].category}</p>
        </div>
        </div>
        </div>`;
    let iconPanier = document.querySelectorAll(".iconPanier");

    for (let i = 0; i < iconPanier.length; i++) {
      iconPanier[i].onclick = function () {
        console.log("clicked panier");
          alert.style.display="block"

        listgames.push(games[i]);

        localStorage.setItem("games", JSON.stringify(listgames));

      };
    }

  }
 
}
function panier() {
  let games = JSON.parse(localStorage.getItem("games")) || [];

  galery.classList.add("hidden");
  panierContainer.classList.remove("hidden");

  panierContainer.innerHTML =
    games
      .map(
        ({ image, category, title, price }) => `
          <div class="p-4 m-2 flex flex-col bg-white rounded-2xl border-black shadow-md md:flex-row md:gap-6">
            <img src="${image}" class="w-full h-60 md:w-40 md:h-60 rounded-xl object-cover">
            <div class="flex flex-col justify-between flex-1 mt-4 md:mt-0">
              <div class="font-bold flex flex-col gap-2 md:gap-4">
                <p class="text-[#4949ff] text-lg md:text-xl">${title}</p>
                <p class="text-gray-600">${category}</p>
                <p class="pricecalcule text-green-400 font-semibold">${price}</p>
              </div>

              <div class="flex flex-col gap-2 mt-4 md:mt-0">
                <div class="flex gap-2 md:gap-4 items-center">
                  <button class="add cursor-pointer h-10 w-10 rounded-full bg-[#4949ff] text-white flex items-center justify-center">+</button>
                  <span class="quantity font-bold px-2">1</span>
                  <button class="subtract cursor-pointer h-10 w-10 rounded-full bg-[#4949ff] text-white flex items-center justify-center">-</button>
                </div>

                <div class="flex justify-between items-center mt-2">
                  <p class="font-bold">Total: <span class="Spantotalprice text-green-400">$0</span></p>
                  <img class="delete w-10 h-10 cursor-pointer" src="./images/delete.png" alt="delete">
                </div>
              </div>
            </div>
          </div>
        `
      )
      .join("") +
    `
      <div class="md:mt-40 md:m-[50px] mb-[10px] pb-24 border-black">
        <div class="flex justify-center mt-4">
          <div>
            <p>Total: <span class="text-green-400" id="totalAmount">$0.00</span></p>
            <button id="validateOrder" class="cursor-pointer bg-[#4949ff] text-yellow-400 font-bold px-4 py-2 rounded-full">
              Valider la commande
            </button>
          </div>
        </div>
      </div>
    `;

  let add = document.querySelectorAll(".add");
  let quantityElement = document.querySelectorAll(".quantity");
  let subtract = document.querySelectorAll(".subtract");
  let deleteBtn = document.querySelectorAll(".delete");
  let priceCalcule = document.querySelectorAll(".pricecalcule");
  let Spantotalprice = document.querySelectorAll(".Spantotalprice");
  let totalAmountElement = document.getElementById("totalAmount");
  let validateOrderButton = document.getElementById("validateOrder");


  function updateLineTotal(i) {
    let price = parseFloat(priceCalcule[i].textContent);
    let quantity = parseInt(quantityElement[i].textContent, 10);
    Spantotalprice[i].textContent = `${(price * quantity).toFixed(2)}$`;
  }

  function calculateTotal() {
    let somme = 0;
    for (let i = 0; i < priceCalcule.length; i++) {
      let price = parseFloat(priceCalcule[i].textContent);
      let quantity = parseInt(quantityElement[i].textContent, 10);
      somme += price * quantity;
      
    }
    return somme;
  }

  function updateTotal() {
    totalAmountElement.textContent = `$${calculateTotal().toFixed(2)}`;
  }

  for (let i = 0; i < priceCalcule.length; i++) {
    updateLineTotal(i);
  }
  updateTotal();

  for (let i = 0; i < add.length; i++) {
    add[i].onclick = function () {
      let current = parseInt(quantityElement[i].textContent, 10);
      quantityElement[i].textContent = current + 1;
      updateLineTotal(i);
      updateTotal();
    };
  }

  for (let i = 0; i < subtract.length; i++) {
    subtract[i].onclick = function () {
      let current = parseInt(quantityElement[i].textContent, 10);
      if (current > 1) {
        quantityElement[i].textContent = current - 1;
        updateLineTotal(i);
        updateTotal();
      }
    };
  }

  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].onclick = function () {
      let games = JSON.parse(localStorage.getItem("games")) || [];
      games.splice(i, 1);
      localStorage.setItem("games", JSON.stringify(games));
      panier();
    };
  }

  validateOrderButton.onclick = function () {
    localStorage.removeItem("games");
    panier();
  };
}
displayGame();

function NOTfound() {
  galery.innerHTML += `   <div class="col-span-full flex justify-center items-center h-64">
                <h2 class="font-bold text-[#4949ff] text-xl text-center md:text-white">
                Oups ! Aucun jeu trouvé
                </h2>
                </div> `;
}
function search(value) {
  galery.innerHTML = "";
  value = value.toLowerCase(); 
  let found = false;
  for (let i = 0; i < games.length; i++) {
    if (games[i].title.toLowerCase().includes(value)) {
      found = true;
      galery.innerHTML += `  
            <div class="card relative rounded-2xl shadow w-64 h-96 mb-2">
            <div>
            <img src="${games[i].image}" class="w-full h-80 object-cover rounded-t-3xl bg-black">
            </div>
            <div class="border border-black p-4 bg-white rounded-3xl absolute bottom-2 w-full">
            <div class="flex justify-between">
            <h2 class="name font-bold text-lg text-[#4949ff]">${games[i].title}</h2>
            <img src="./images/cart.png" class="w-10 h-10 cursor-pointer">
                    </div>
                    <div class="flex justify-between">
                    <p class="text-green-600 font-bold">${games[i].price}$</p>
                    <p class="text-gray-500 font-bold">${games[i].category}</p>
                    </div>
                    </div>
                    </div>`;
    }
  }
  if (!found) {
    NOTfound();
  }
}


inputSearch.onkeyup = function () {
  search(inputSearch.value);
};

// let add = document.getElementById("add");

RPG.onclick = function () {
  RPGcategory();
};
all.onclick = function () {
  displayGame();
};
sport.onclick = function () {
  sportcategory();
};
action.onclick = function () {
  actioncategory();
};
FPS.onclick = function () {
  FPScategory();
};
Panier.onclick = function () {

  main.style.display = "none";
  panier();

};
btnalert.onclick=function(){
  alert.style.display="none"
}


footerPanier.onclick = function () {

  panierContainer.classList.remove("hidden");
  main.style.display = "none";
  panier();

};
home.onclick = function () {

    panierContainer.classList.add("hidden");
  panierContainer.style.display = ""; 
  galery.classList.remove("hidden");
  main.style.display = "flex";
  displayGame();


 
};
homefooter.onclick=function(){
   console.log("click home foter");
  panierContainer.classList.add("hidden");
  panierContainer.style.display = ""; 
  galery.classList.remove("hidden");
  main.style.display = "flex";
  displayGame();

}

function RPGcategory() {
  let RPG = document.getElementById("RPG");

  galery.innerHTML = "";

  let found = false;
  for (let i = 0; i < games.length; i++) {
    if ("RPG" == games[i].category) {
      found = true;
      galery.innerHTML += ` 
            <div class="card relative rounded-2xl shadow w-64 h-96 mb-2">
            <div>
            <img src="${games[i].image}" class="w-full h-80 object-cover rounded-t-3xl bg-black">
            </div>
            <div class="border border-black p-4 bg-white rounded-3xl absolute bottom-2 w-full">
            <div class="flex justify-between">
            <h2 class="name font-bold text-lg text-[#4949ff]">${games[i].title}</h2>
            <img src="./images/cart.png" class="w-10 h-10 cursor-pointer">
                    </div>
                    <div class="flex justify-between">
                    <p class="text-green-600 font-bold">${games[i].price}$</p>
                    <p class="text-gray-500 font-bold">${games[i].category}</p>
                    </div>
                    </div>
                    </div>`;
    }
  }
  if (!found) {
    NOTfound();
  }
}
function sportcategory() {
  galery.innerHTML = "";

  let found = false;
  for (let i = 0; i < games.length; i++) {
    if ("Sport" == games[i].category) {
      found = true;
      galery.innerHTML += `  
            <div class="card relative rounded-2xl shadow w-64 h-96 mb-2">
            <div>
            <img src="${games[i].image}" class="w-full h-80 object-cover rounded-t-3xl bg-black">
            </div>
            <div class="border border-black p-4 bg-white rounded-3xl absolute bottom-2 w-full">
            <div class="flex justify-between">
            <h2 class="name font-bold text-lg text-[#4949ff]">${games[i].title}</h2>
            <img src="./images/cart.png" class="w-10 h-10 cursor-pointer">
                    </div>
                    <div class="flex justify-between">
                    <p class="text-green-600 font-bold">${games[i].price}$</p>
                    <p class="text-gray-500 font-bold">${games[i].category}</p>
                    </div>
                    </div>
                    </div>`;
    }
  }
  if (!found) {
    NOTfound();
  }
}
function actioncategory() {
  galery.innerHTML = "";

  let found = false;
  for (let i = 0; i < games.length; i++) {
    if ("Action" == games[i].category) {
      found = true;
      galery.innerHTML += `  
            <div class="card relative rounded-2xl shadow w-64 h-96 mb-2">
            <div>
            <img src="${games[i].image}" class="w-full h-80 object-cover rounded-t-3xl bg-black">
            </div>
            <div class="border border-black p-4 bg-white rounded-3xl absolute bottom-2 w-full">
            <div class="flex justify-between">
            <h2 class="name font-bold text-lg text-[#4949ff]">${games[i].title}</h2>
            <img src="./images/cart.png" class="w-10 h-10 cursor-pointer">
                    </div>
                    <div class="flex justify-between">
                    <p class="text-green-600 font-bold">${games[i].price}$</p>
                    <p class="text-gray-500 font-bold">${games[i].category}</p>
                    </div>
                    </div>
                    </div>`;
    }
  }
  if (!found) {
    NOTfound();
  }
}
function FPScategory() {
  galery.innerHTML = "";

  let found = false;
  for (let i = 0; i < games.length; i++) {
    if ("FPS" == games[i].category) {
      found = true;
      galery.innerHTML += `  
            <div class="card relative rounded-2xl shadow w-64 h-96 mb-2">
            <div>
            <img src="${games[i].image}" class="w-full h-80 object-cover rounded-t-3xl bg-black">
            </div>
            <div class="border border-black p-4 bg-white rounded-3xl absolute bottom-2 w-full">
            <div class="flex justify-between">
            <h2 class="name font-bold text-lg text-[#4949ff]">${games[i].title}</h2>
            <img src="./images/cart.png" class="w-10 h-10 cursor-pointer">
                    </div>
                    <div class="flex justify-between">
                    <p class="text-green-600 font-bold">${games[i].price}$</p>
                    <p class="text-gray-500 font-bold">${games[i].category}</p>
                    </div>
                    </div>
                    </div>`;
    }
  }
  if (!found) {
    NOTfound();
  }
}

