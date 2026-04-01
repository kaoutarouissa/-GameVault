


import {games} from './data.js'
let galery=document.getElementById('galery-card')
// let card=document.getElementById('card')








for (let i=0;i<games.length;i++){
    galery.innerHTML += `
    <div class=" relative  rounded-2xl shadow w-64 h-96 ">
    <div class="">
    <img src="${games[i].image}" class="w-full h-80 object-cover rounded-t-3xl bg-black">
    </div>
    <div class="border border-black p-4 bg-white rounded-3xl absolute bottom-2 w-full ">
    <div class="flex justify-between">
      <h2 class="font-bold text-lg text-[#4949ff]">${games[i].title}</h2>
      <img src="./images/cart.png" class="w-10 h-10 cursor-pointer">
      </div>
      <div class="flex justify-between ">
      <p class="text-green-600 font-bold">${games[i].price}$</p>
      <p class="text-gray-500 font-bold">${games[i].category}</p>
      </div>
      </div>
    </div>`
  ;
// let boxCard=document.createElement('div')
// // boxCard.style.backgroundColor="white"
// boxCard.className='flex gap-20 bg-white rounded-xl p-6 '

// let infoCard=document.createElement('div')

// let lastcard=document.createComment('div')

//     let card=document.createElement('div')
//     card.className='h-96 w-60 m-4 rounded-xl bg-cover bg-center flex items-end'
//     card.style.backgroundImage=`url(${games[i].image})`
   
//     let title=document.createElement('h1')
//     title.className='text-[#4949ff] font-bold'
//    title.textContent=games[i].title

//    let icon=document.createElement("img")
//    icon.src="./images/cart.png"
//    icon.className='w-10 h-10 cursor-pointer'

// let p=document.createElement('p')
// p.textContent=games[i].price

// boxCard.appendChild(title)
// boxCard.appendChild(icon)

// boxCard.appendChild(p)

// infoCard.appendChild(boxCard
// )
//    card.appendChild(infoCard)
//    galery.appendChild(card)

    }
