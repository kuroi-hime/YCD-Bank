
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
const ceicon=document.getElementById("icon-ce");
const cpicon=document.getElementById("icon-cp");
const typecompte=document.getElementById("typecompte");
const RIB=document.getElementById("RIB");
const benificaire=document.getElementById("Benificaire");
const benificaire3=document.getElementById("Benificaireicon3");

cpbutton.addEventListener("click",function(){
    ceicon.classList.remove("text-[#CCC9DC]");
    ceicon.classList.add("text-[#05B013]");
    cpicon.classList.remove("text-[#05B013]");
    cpicon.classList.add("text-[#CCC9DC]");
    typecompte.textContent="Compte principale";
    RIB.textContent="4210 9834 7612 5098 3478 1209";
    
})


const benificairelist=document.querySelectorAll(".Benificaire");
cebutton.addEventListener("click",function(){
    cpicon.classList.remove("text-[#CCC9DC]");
    cpicon.classList.add("text-[#05B013]");
    ceicon.classList.remove("text-[#05B013]");
    ceicon.classList.add("text-[#CCC9DC]");
    typecompte.textContent="Compte d'epargne ";
    RIB.textContent="5210 9834 7612 5098 3478 1209";
    benificairelist.forEach(Benificaire => {
    Benificaire.classList.add("hidden");
    benificaire.textContent="Compte principale";
    benificaire3.classList.remove("hidden");
    benificaire3.classList.add("text-[#05B013]");
})
  });

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

    window.location.href = "connexion.html"; 
})

function confirmpopup(text,id){
    const ptext=document.getElementById(id);
    ptext.textContent=text;
}



const validatebtn=document.getElementById("validate-btn");
const confirmmessage=document.getElementById("confirmation-popup")

validatebtn.addEventListener("click",function(){
    this.classList.remove("drop-shadow-[0_4px_6px_black]");
    confirmmessage.classList.remove("hidden");
    confirmpopup("voulez-vous","Confirmation-text");
})

const oui=document.getElementById("oui");
const non=document.getElementById("non");

oui.addEventListener("click",function(){
    confirmmessage.classList.add("hidden");
})

non.addEventListener("click",function(){
    confirmmessage.classList.add("hidden");
})

const montant=document.getElementById("montant");
const motif=document.getElementById("motif");
const password=document.getElementById("password");

validatebtn.addEventListener("click",function(){
   if(montant.value==""){
    confirmmessage.classList.remove("hidden");
    oui.classList.add("hidden");
    non.classList.add("hidden");
    confirmpopup("Veuillez completer les champs","Confirmation-text")
  }
})

validatebtn.addEventListener("click",function(){
   if(motif.value==""){
    confirmmessage.classList.remove("hidden");
    oui.classList.add("hidden");
    non.classList.add("hidden");
    confirmpopup("Veuillez completer les champs","Confirmation-text")
  }
})

validatebtn.addEventListener("click",function(){
   if(password.value==""){
    confirmmessage.classList.remove("hidden");
    oui.classList.add("hidden");
    non.classList.add("hidden");
    confirmpopup("Veuillez completer les champs","Confirmation-text")
  }
})

const close=document.getElementById("close");

close.addEventListener("click",function(){
   confirmmessage.classList.add("hidden");
})

for (let i = 1; i < 6; i++) {
  const btn = document.getElementById(`Benificairebtn${i}`);

  btn.addEventListener("click", function () {

    for (let j = 1; j < 6; j++) {
      const icon = document.getElementById(`Benificaireicon${j}`);
      icon.classList.remove("text-[#05B013]");
      icon.classList.add("text-[#CCC9DC]");
    }

    const iconbenificaire=document.getElementById(`Benificaireicon${i}`);
    iconbenificaire.classList.remove("text-[#CCC9DC]");
    iconbenificaire.classList.add("text-[#05B013]");
  });
}