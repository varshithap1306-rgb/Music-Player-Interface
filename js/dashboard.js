// Protect dashboard

if(localStorage.getItem("loggedIn")!=="true"){
    window.location.href="index.html";
}

// Logout

document.getElementById("logoutBtn").addEventListener("click",()=>{

    localStorage.removeItem("loggedIn");

    alert("Logged Out Successfully");

    window.location.href="index.html";

});