import { games } from "./data.js";
let galery = document.getElementById("galery-card");
let inputSearch = document.getElementById("search");
let all = document.getElementById("all");
let sport=document.getElementById('sport')
let action=document.getElementById('action')
let FPS=document.getElementById('FPS')
let Panier=document.getElementById('panier')
let main=document.getElementById('main')
let home=document.getElementById('home')
let imagePanier=document.getElementById('imagePanier')
let panierContainer=document.getElementById('panierContainer')
let infocard=document.getElementById('infocard')
let titlePanier=document.getElementById('titlePanier')

let listgames=[]
// function saveloca
localStorage.setItem("games", JSON.stringify(listgames));
console.log(localStorage.getItem("games"));
function displayGame() {
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
        let iconPanier = document.querySelectorAll('.iconPanier');
        // console.log(iconPanier)
        // iconPanier.forEach(icon => {
            for(let i=0; i<iconPanier.length;i++){

                iconPanier[i].onclick = function() {
                    console.log('clicked panier');
                    listgames.push(games[i])
                    console.log(listgames)
                }
            }
    // }
// )
}
}
function panier(){
    for(let i=0;i<listgames.length;i++){
        // localStorage.setItem("games", JSON.stringify(listgames));
        // let listgames = JSON.parse(localStorage.getItem("games"));
        let titre=listgames[i].title
        titlePanier.textContent=titre
        console.log(titlePanier)
    
    // console.log(listgames);
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
Panier.onclick=function(){
    main.style.display="none"
    panier()
}
home.onclick=function(){
    main.style.display="flex"
    // main.style
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
