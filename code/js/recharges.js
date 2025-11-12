let favoris = document.getElementById('favoris');
let libelle = document.getElementById('libelle');
const operateur = document.getElementById('operateur');
const logo = document.getElementById('operateur_logo');
const service = document.getElementById('service');
const offres = document.getElementById('offres');
const numLigne = document.getElementById('numero');
const selectmontant = document.getElementById('montant');

const alertFaild = document.getElementById('alertFaild');

operateur.addEventListener('change', ()=>{
    logo.src = `../../media/${operateur.value}_logo.png`;
});

favoris.addEventListener('click', ()=>{
    if(favoris.checked)
        libelle.classList.remove('hidden');
    else
        libelle.classList.add('hidden');
});


// a revoir
function getMontant(){
    if(selectmontant.value == 'none') throw new Error('vide');
    return parseFloat(selectmontant.value);
}

ref.addEventListener('change', ()=>{
    selectmontant.innerHTML = '<option value="none" disabled selected>Montant</option>';
    if(numLigne.value != ''){
        let montant = document.createElement('option'); 
        montant.innerText = ((Math.random()*19 + 2)*10).toFixed(2); //parseFloat(); tofixed => string
        selectmontant.appendChild(montant);
    }
});

function getLibelle(){
    if(libelle.value == '') throw new Error('vide');

    return libelle.value;
}

function getForm(){
    let facture = getFournisseur();
    facture.ref = getFacture();
    facture.montant = getMontant();
    facture.status = '';
    if(favoris.checked){
        facture.libelle = getLibelle();
        facture.status = 'favoris';
    }

    return facture;
}

document.querySelector('button').addEventListener('click', ()=>{
    try {
        let bankData = JSON.parse(localStorage.getItem('YCD_Bank'));
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // let facture = getForm();
        // bankData[currentUser.index].factures.push(facture);
        // if(bankData[currentUser.index].comptes[0].credit < facture.montant) throw new Error('solde insufisant');
        // bankData[currentUser.index].comptes[0].credit -= facture.montant;
        // localStorage.setItem('YCD_Bank', JSON.stringify(bankData));
        const alertBox = document.getElementById("alertSuccess");
        alertBox.classList.remove("hidden");

        setTimeout(() => {
        alertBox.classList.add("hidden");
        }, 1500);
    } catch (error) {
        if(error.message == 'vide'){
            alertFaild.innerText = 'Veuillez remplir tous les champs.';
            alertFaild.classList.remove('hidden');

            setTimeout(()=>{
                alertFaild.classList.add('hidden');
            }, 1500);
        }
        else
            console.log(error.message);
    }
});