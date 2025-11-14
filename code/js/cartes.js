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

cardcontainer1=document.getElementById("cardcontainer1");
cardcontainer2=document.getElementById("cardcontainer2");
buttondetails1=document.getElementById("buttondetails1");
buttondetails2=document.getElementById("buttondetails2");
card1details=document.querySelectorAll(".card1details");
leftarrowbutton=document.getElementById("leftarrow");
leftarrowicon=document.getElementById("leftarrowicon");
mescartes=document.getElementById("mescartes");
plafonds=document.getElementById("plafonds");

buttondetails1.addEventListener("click",function(){
    cardcontainer2.classList.add("hidden");
    buttonbloquer1.classList.add("hidden");
    buttondetails1.classList.add("hidden");
    plafonds.classList.remove("hidden");
    card1details.forEach(element => {
        element.classList.remove("hidden");
    });
    leftarrowbutton.classList.remove("hidden");

    mescartes.textContent="Card Détails";
})

buttondetails2.addEventListener("click",function(){
    cardcontainer1.classList.add("hidden");
    buttonbloquer2.classList.add("hidden");
    buttondetails2.classList.add("hidden");
    plafonds.classList.remove("hidden");
    card1details.forEach(element => {
        element.classList.remove("hidden");
    });
    leftarrowbutton.classList.remove("hidden");
    mescartes.textContent="Card Détails";
})


leftarrowbutton.addEventListener("click",function(){
    cardcontainer2.classList.remove("hidden");
    buttonbloquer1.classList.remove("hidden");
    buttondetails1.classList.remove("hidden");
    cardcontainer1.classList.remove("hidden");
    buttonbloquer2.classList.remove("hidden");
    buttondetails2.classList.remove("hidden")
    card1details.forEach(element => {
        element.classList.add("hidden");
    });
    leftarrowbutton.classList.remove("hidden");
    mescartes.textContent="Mes Cartes";

})

 const slider = document.getElementById("dailyLimit");
  const output = document.getElementById("dailyValue");

  slider.addEventListener("input", () => {
    output.textContent = slider.value;
  });


