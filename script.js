import { games } from "./data.js";
let galery = document.getElementById("galery-card");
let inputSearch = document.getElementById("search");

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
function search(value) {
  galery.innerHTML = "";
  value = value.toLowerCase(); // met la valeur tapée en minuscules

  for (let i = 0; i < games.length; i++) {
    if (games[i].title.toLowerCase().includes(value)) {
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
    // if(games[i].title.toLowerCase!=includes(value)){
    //   galery.innerHTML+=`<h2>dont found</h2>`
    // }
  }
}

// Écoute le champ de recherche
inputSearch.onkeyup = function () {
  search(inputSearch.value);
};
