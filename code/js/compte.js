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

const cpbutton=document.getElementById("button-cp");
const cebutton=document.getElementById("button-ce");
const typecompte=document.getElementById("typecompte");
const RIB=document.getElementById("RIB");

cebutton.addEventListener("click",function(){
    cebutton.classList.remove("text-[#CCC9DC]");
    cebutton.classList.add("text-[#05B013]");
    cpbutton.classList.remove("text-[#05B013]");
    cpbutton.classList.add("text-[#CCC9DC]");
    typecompte.textContent="Compte d'épargne "
}
)

cpbutton.addEventListener("click",function(){
    cpbutton.classList.remove("text-[#CCC9DC]");
    cpbutton.classList.add("text-[#05B013]");
    cebutton.classList.remove("text-[#05B013]");
    cebutton.classList.add("text-[#CCC9DC]");
    typecompte.textContent="Compte principale "
}
)


for (let i = 1; i < 4; i++) {
  const btn = document.getElementById(`btn-transaction${i}`);

  btn.addEventListener("click", function () {

    for (let j = 1; j < 4; j++) {
      const otherBtn = document.getElementById(`btn-transaction${j}`);
      otherBtn.classList.remove("text-[#05B013]");
      otherBtn.classList.add("text-[#CCC9DC]");
    }


    this.classList.remove("text-[#CCC9DC]");
    this.classList.add("text-[#05B013]");
  });
}

const hidebtn=document.getElementById("hideshow");
const eyeicon=document.getElementById("eye");
const amount=document.getElementById("amount")
hidebtn.addEventListener("click",function(){
    if(eyeicon.classList.contains("fa-regular")){
      eyeicon.className=("fa-solid fa-eye-slash");
      amount.textContent="*****";
    }
    else{
      eyeicon.className=("fa-regular fa-eye");
      amount.textContent="7000 MAD";}
})

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

    window.location.href = "co.html"; 
})