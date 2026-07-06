const songs = [

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
},

{
title:"Perfect",
artist:"Ed Sheeran",
image:"images/song4.jpg"
}

];

let index = 0;

const cover = document.getElementById("cover");
const title = document.getElementById("title");
const artist = document.getElementById("artist");

const playBtn = document.getElementById("play");

function loadSong(){

cover.src = songs[index].image;

title.innerHTML = songs[index].title;

artist.innerHTML = songs[index].artist;

}

loadSong();

document.getElementById("next").onclick = ()=>{

index++;

if(index>=songs.length){

index=0;

}

loadSong();

};

document.getElementById("prev").onclick = ()=>{

index--;

if(index<0){

index=songs.length-1;

}

loadSong();

};

let playing=false;

playBtn.onclick=()=>{

playing=!playing;

playBtn.innerHTML=playing

?'<i class="fa-solid fa-pause"></i>'

:'<i class="fa-solid fa-play"></i>';

};

document.getElementById("favorite").onclick=function(){

this.classList.toggle("active");

};

document.getElementById("shuffle").onclick=()=>{

alert("Shuffle Enabled");

};

document.getElementById("repeat").onclick=()=>{

alert("Repeat Enabled");

};

document.getElementById("volume").addEventListener("input",()=>{

console.log("Volume Changed");

});

document.getElementById("progress").addEventListener("input",()=>{

console.log("Song Progress Changed");

});