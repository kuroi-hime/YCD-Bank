let listeOperateurs = document.getElementById('fournisseur');
let favoris = document.getElementById('favoris');
let libelle = document.getElementById('libelle');
const alertFaild = document.getElementById('alertFaild');
let ref = document.getElementById('ref');
let selectmontant = document.getElementById('montant');
let menuIcon = document.getElementById("menu-icon");
let navbar = document.getElementById("menu");
let btnDeconnecter = document.getElementById("deconnecter");

btnDeconnecter.addEventListener('click', ()=>{if(confirm("Voulez-vous vraiment vous déconnecter?")){
    let a = document.createElement('a');
    a.href = 'connexion.html';
    a.click();
    localStorage.removeItem('currentUser');
}});
menuIcon.addEventListener('click', ()=>{navbar.classList.toggle('hidden')});

favoris.addEventListener('click', ()=>{
    if(favoris.checked)
        libelle.classList.remove('hidden');
    else
        libelle.classList.add('hidden');
});


fetch("../../media/fournisseurs.json").then(response => response.json()).then(data => {
    let groupOp1 = document.createElement('optgroup');
    groupOp1.label = "Eau";
    data.eau.forEach(fournisseur => {
        let opt = document.createElement('option');
        opt.innerText = fournisseur;
        groupOp1.appendChild(opt);
    });
    listeOperateurs.appendChild(groupOp1);

    let groupOp2 = document.createElement('optgroup');
    groupOp2.label = "Electricité";
    data.electricite.forEach(fournisseur => {
        let opt = document.createElement('option');
        opt.innerText = fournisseur;
        groupOp2.appendChild(opt);
    });
    listeOperateurs.appendChild(groupOp2);
}).catch(e => console.log(e.message));

function getFournisseur(){
    if(listeOperateurs.value == '') throw new Error('veuillez remplir tous les champs');
    if(!listeOperateurs.options[listeOperateurs.selectedIndex].closest('optgroup'))throw new Error('veuillez remplir tous les champs');
    let type = listeOperateurs.options[listeOperateurs.selectedIndex].closest('optgroup').label;
    
    return {fournisseur: listeOperateurs.value, type: type};
}

function getFacture(){
    if(!ref) throw new Error('inexistant');
    if(ref.value == '') throw new Error('veuillez remplir tous les champs');
    let re = /^[0-9]{8,}$/;
    if(!re.test(ref.value)) throw new Error('référence de facture éronnée');

    return ref.value;
}

function getMontant(){
    if(selectmontant.value == 'none') throw new Error('veuillez remplir tous les champs');
    return parseFloat(selectmontant.value);
}

ref.addEventListener('change', ()=>{
    selectmontant.innerHTML = '<option value="none" disabled selected>Montant</option>';
    if(ref.value != ''){
        let montant = document.createElement('option'); 
        montant.innerText = ((Math.random()*19 + 2)*10).toFixed(2); //parseFloat(); tofixed => string
        selectmontant.appendChild(montant);
    }
});

function getLibelle(){
    if(libelle.value == '') throw new Error('veuillez remplir tous les champs');

    return libelle.value;
}

function getForm(){
    let facture = getFournisseur();
    facture.ref = getFacture();
    facture.montant = getMontant();
    facture.status = '';
    facture.date = new Date();
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
        let facture = getForm();
        facture.id = bankData[currentUser.index].factures.length;
        bankData[currentUser.index].factures.push(facture);
        if(bankData[currentUser.index].comptes[0].credit < facture.montant) throw new Error('solde insufisant');
        bankData[currentUser.index].comptes[0].credit -= facture.montant;
        localStorage.setItem('YCD_Bank', JSON.stringify(bankData));
        const alertBox = document.getElementById("alertSuccess");
        alertBox.classList.remove("hidden");

        setTimeout(() => {
        alertBox.classList.add("hidden");
        }, 1500);
        listeOperateurs.value = 'none';
        ref.value = '';
        selectmontant.value = 'none';
        if(favoris.checked){
            favoris.checked = false;
            libelle.classList.add('hidden');
        } 
    } catch (erreur) {
        if(erreur.message == 'veuillez remplir tous les champs' || erreur.message == 'référence de facture éronnée' || erreur.message == 'solde insufisant'){
            alertFaild.innerText = erreur.message;
            alertFaild.classList.remove('hidden');

            setTimeout(()=>{
                alertFaild.classList.add('hidden');
            }, 1500);
            if(erreur.message == 'référence de facture éronnée')
                ref.value = '';
        }
        else{
            console.log(erreur.message);
        }
    }
});
