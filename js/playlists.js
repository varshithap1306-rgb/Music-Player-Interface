const modal = document.getElementById("playlistModal");
const addBtn = document.getElementById("addPlaylistBtn");
const closeBtn = document.querySelector(".close");
const form = document.getElementById("playlistForm");
const grid = document.getElementById("playlistGrid");
const search = document.getElementById("searchPlaylist");

let playlists = JSON.parse(localStorage.getItem("playlists")) || [];

function savePlaylists(){
localStorage.setItem("playlists",JSON.stringify(playlists));
}

function displayPlaylists(){

grid.innerHTML="";

playlists.forEach((playlist,index)=>{

grid.innerHTML+=`

<div class="playlist-card">

<i class="fa-solid fa-music"></i>

<h3>${playlist}</h3>

<div class="actions">

<button class="edit" onclick="editPlaylist(${index})">

Edit

</button>

<button class="delete" onclick="deletePlaylist(${index})">

Delete

</button>

</div>

</div>

`;

});

}

addBtn.onclick=()=>{

modal.style.display="flex";

};

closeBtn.onclick=()=>{

modal.style.display="none";

};

form.addEventListener("submit",(e)=>{

e.preventDefault();

const name=document.getElementById("playlistName").value;

playlists.push(name);

savePlaylists();

displayPlaylists();

form.reset();

modal.style.display="none";

});

function deletePlaylist(index){

if(confirm("Delete this playlist?")){

playlists.splice(index,1);

savePlaylists();

displayPlaylists();

}

}

function editPlaylist(index){

let newName=prompt("Edit Playlist Name",playlists[index]);

if(newName){

playlists[index]=newName;

savePlaylists();

displayPlaylists();

}

}

search.addEventListener("keyup",()=>{

let value=search.value.toLowerCase();

let cards=document.querySelectorAll(".playlist-card");

cards.forEach(card=>{

let title=card.querySelector("h3").innerText.toLowerCase();

card.style.display=title.includes(value)?"block":"none";

});

});

displayPlaylists();