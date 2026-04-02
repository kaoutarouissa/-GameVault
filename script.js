import { games } from "./data.js";
let galery = document.getElementById("galery-card");
let inputSearch = document.getElementById("search");
let all = document.getElementById("all");
let sport=document.getElementById('sport')
let action=document.getElementById('action')
let FPS=document.getElementById('FPS')
// let valeur1="RPG"
// let valeur2="Sport"

function displayGame() {
  for (let i = 0; i < games.length; i++) {
    galery.innerHTML += `
        <div id="card" class="card relative  rounded-2xl shadow w-64 h-96  mb-2 ">
        <div class="">
        <img src="${games[i].image}" class="w-full h-80 object-cover rounded-t-3xl bg-black">
        </div>
        <div class="border border-black p-4 bg-white rounded-3xl absolute bottom-2 w-full ">
        <div class="flex justify-between">
        <h2  class="name font-bold text-lg text-[#4949ff]">${games[i].title}</h2>
        <img src="./images/cart.png" class="w-10 h-10 cursor-pointer">
        </div>
        <div class="flex justify-between ">
        <p class="text-green-600 font-bold">${games[i].price}$</p>
        <p class="text-gray-500 font-bold">${games[i].category}</p>
        </div>
        </div>
        </div>`;
  }
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
  value = value.toLowerCase(); // met la valeur tapée en minuscules
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

RPG.onclick = function () {
  RPGcategory();
};
all.onclick = function () {
    displayGame()
};
sport.onclick=function(){
    sportcategory()
}
action.onclick=function(){
    actioncategory()
}
FPS.onclick=function(){
FPScategory()
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
function sportcategory(){
    
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
function actioncategory(){
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
function  FPScategory(){
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