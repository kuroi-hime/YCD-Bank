function confirmpopup(text,id){
    const ptext=document.getElementById(id);
    ptext.textContent=text;
}
const oui=document.getElementById("oui");
const non=document.getElementById("non");

oui.addEventListener("click",function(){
    confirmpopup1.classList.add("hidden");
})

const close=document.getElementById("close");

close.addEventListener("click",function(){
   confirmpopup1.classList.add("hidden");
   
})

non.addEventListener("click",function(){
    confirmpopup1.classList.add("hidden");
})

const buttonbloquer1=document.getElementById("buttonbloquer1");
const buttonbloquer2=document.getElementById("buttonbloquer2");
const confirmpopup1=document.getElementById("confirmation-popup");
const card1=document.getElementById("card1");
const card2=document.getElementById("card2");
const statut1=document.getElementById("statut1");
const statut2=document.getElementById("statut2");

let currentcard=null;
let currentstatut=null;
let currentbtn=null;

function blockcard(){
    currentcard.classList.toggle("blur-sm");
    if(currentstatut.textContent=="STATUT : BLOQUE"){
        currentstatut.textContent="STATUT : ACTIVE";
        currentbtn.textContent="Bloquer";

    }
    else{
        currentstatut.textContent="STATUT : BLOQUE";
        currentbtn.textContent="Debloquer" ; }
    currentstatut.classList.toggle("text-green-600");
    currentstatut.classList.toggle("text-red-600");
}

buttonbloquer1.addEventListener("click",function(){
    confirmpopup("voulez-vous bloquez la carte ?","Confirmation-text" );
    confirmpopup1.classList.remove("hidden");
    currentcard=card1;
    currentstatut=statut1;

    currentbtn = buttonbloquer1;
})




buttonbloquer2.addEventListener("click",function(){
    confirmpopup("voulez-vous bloquez la carte ?","Confirmation-text" );
    confirmpopup1.classList.remove("hidden");
    currentcard=card2;
    currentstatut=statut2;
    currentbtn = buttonbloquer2;
})

oui.addEventListener("click",blockcard);