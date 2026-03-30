import {games} from './data.js'
let galery=document.getElementById('galery-card')
// let card=document.getElementById('card')








for (let i=0;i<games.length;i++){
    let card=document.createElement('div')
    card.className='bg-pink-400 p-10'
    let img=document.createElement('img')
    let title=document.createElement('h1')
   img.src=games[i].image
   title.textContent=games[i].title

   card.appendChild(img)
   card.appendChild(title)
   galery.appendChild(card)

    }
