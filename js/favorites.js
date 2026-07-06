let favorites = JSON.parse(localStorage.getItem("favoriteSongs")) || [

{
title:"Blinding Lights",
artist:"The Weeknd",
image:"images/song1.jpg"
},

{
title:"Shape Of You",
artist:"Ed Sheeran",
image:"images/song2.jpg"
},

{
title:"Believer",
artist:"Imagine Dragons",
image:"images/song3.jpg"
}

];

const grid = document.getElementById("favoriteGrid");
const search = document.getElementById("searchFavorite");

function displayFavorites(){

grid.innerHTML="";

if(favorites.length===0){

grid.innerHTML="<h2 class='empty'>No Favorite Songs ❤️</h2>";

return;

}

favorites.forEach((song,index)=>{

grid.innerHTML+=`

<div class="song-card">

<img src="${song.image}" alt="${song.title}">

<h3>${song.title}</h3>

<p>${song.artist}</p>

<div class="actions">

<button class="play-btn"
onclick="playSong()">

<i class="fa-solid fa-play"></i>

</button>

<button class="remove-btn"
onclick="removeSong(${index})">

<i class="fa-solid fa-trash"></i>

</button>

</div>

</div>

`;

});

}

function removeSong(index){

favorites.splice(index,1);

localStorage.setItem(
"favoriteSongs",
JSON.stringify(favorites)
);

displayFavorites();

}

function playSong(){

alert("Now Playing 🎵");

}

search.addEventListener("keyup",()=>{

let value=search.value.toLowerCase();

let cards=document.querySelectorAll(".song-card");

cards.forEach(card=>{

let title=card.querySelector("h3").innerText.toLowerCase();

card.style.display=title.includes(value)
? "block"
: "none";

});

});

displayFavorites();