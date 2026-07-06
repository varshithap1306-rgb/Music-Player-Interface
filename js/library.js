// Search Songs

const search = document.getElementById("searchSong");

search.addEventListener("keyup", () => {

let filter = search.value.toLowerCase();

let songs = document.querySelectorAll(".song-card");

songs.forEach(song => {

let title = song.querySelector("h3").innerText.toLowerCase();

if(title.includes(filter)){

song.style.display="block";

}else{

song.style.display="none";

}

});

});

// Favorite Button

const favButtons = document.querySelectorAll(".fav");

favButtons.forEach(button=>{

button.addEventListener("click",()=>{

button.classList.toggle("active");

});

});

// Play Button

const playButtons=document.querySelectorAll(".play");

playButtons.forEach(button=>{

button.addEventListener("click",()=>{

alert("Now Playing 🎵");

});

});