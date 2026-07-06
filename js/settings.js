const form = document.getElementById("settingsForm");
const darkMode = document.getElementById("darkMode");
const logoutBtn = document.getElementById("logoutBtn");

// Load saved settings
window.onload = () => {

const settings = JSON.parse(localStorage.getItem("settings"));

if(settings){

document.getElementById("name").value = settings.name || "";

document.getElementById("email").value = settings.email || "";

document.getElementById("language").value = settings.language || "English";

document.getElementById("notification").checked = settings.notification;

darkMode.checked = settings.darkMode;

if(settings.darkMode){

document.body.classList.add("light-mode");

}

}

};

// Save settings

form.addEventListener("submit",(e)=>{

e.preventDefault();

const settings={

name:document.getElementById("name").value,

email:document.getElementById("email").value,

language:document.getElementById("language").value,

notification:document.getElementById("notification").checked,

darkMode:darkMode.checked

};

localStorage.setItem("settings",JSON.stringify(settings));

alert("Settings Saved Successfully!");

});

// Dark Mode Toggle

darkMode.addEventListener("change",()=>{

document.body.classList.toggle("light-mode");

});

// Logout

logoutBtn.addEventListener("click",()=>{

if(confirm("Do you want to Logout?")){

localStorage.removeItem("loggedIn");

window.location.href="index.html";

}

});