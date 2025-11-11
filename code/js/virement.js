
const hammenu = document.getElementById("menu-btn");
const icon = document.getElementById("menu-icon");
const menu=document.getElementById("menu");

hammenu.addEventListener("click", function() {
  if (icon.classList.contains("fa-bars")) {
    icon.className = "fa-solid fa-xmark";
    menu.classList.add("scale-y-100");
  } else {
    icon.className = "fa-solid fa-bars";
    menu.classList.remove("scale-y-100");
    menu.classList.add("scale-y-0");
  }
});



const deconnect=document.getElementById("DECONNECT");
const usercirclebtn=document.getElementById("user-circle-btn");

    usercirclebtn.addEventListener("click",function(){
    deconnect.classList.toggle("scale-y-100");
})

const deconnectbtn=document.getElementById("DECONNECT-btn");
const deconnecticon=document.getElementById("deconnect-icon");


deconnectbtn.addEventListener("click",function(){
    deconnecticon.classList.remove("fa-toggle-on" , "text-green-600");
    deconnecticon.classList.add("fa-toggle-off" , "text-red-600");

    window.location.href = "connexion.html"; 
})