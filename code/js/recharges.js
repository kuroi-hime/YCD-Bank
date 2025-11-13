let favoris = document.getElementById('favoris');
let libelle = document.getElementById('libelle');
const operateur = document.getElementById('operateur');
const logo = document.getElementById('operateur_logo');
const service = document.getElementById('service');
const offres = document.getElementById('offres');
const numLigne = document.getElementById('numero');
const selectmontant = document.getElementById('montant');
const recharges = [];
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

fetch('../../media/recharges.json')
.then(res => res.json())
.then(montants => {
    montants.montant.forEach(recharge => {
        recharges.push(recharge);
    });
});

function getOperateur(){
    return operateur.value;
}

function getService(){
    if(service.value == 'none') throw new Error('vide');

    return service.value;
}

function getNum(){
    if(numLigne.value == '') throw new Error('vide');

    return numLigne.value;
}

function getMontant(){
    if(selectmontant.value == 'none') throw new Error('vide');

    return parseFloat(selectmontant.value);
}

service.addEventListener('change', ()=>{
    selectmontant.innerHTML = '<option value="none" disabled selected>Montant</option>';
    if(service.value == 'telecom'){
            recharges.forEach(prix => {
                let opt = document.createElement('option');
                opt.innerText = `${prix} dh`;
                selectmontant.appendChild(opt);
            });
        }else{
            let montant = document.createElement('option'); 
            montant.innerText = `${((Math.random()*19 + 2)*10).toFixed(2)} dh`; //parseFloat(); tofixed => string
            selectmontant.appendChild(montant);
        }
});

numLigne.addEventListener('blur', ()=>{
    if(numLigne.value != ''){
        selectmontant.removeAttribute('disabled');
    }
    else{
        selectmontant.setAttribute('disabled', 'disabled');
    }
});

function getLibelle(){
    if(libelle.value == '') throw new Error('vide');

    return libelle.value;
}

function getForm(){
    let recharge = {};
    recharge.operateur = getOperateur();
    recharge.type = getService();
    recharge.numero = getNum();
    recharge.montant = getMontant();
    recharge.status = '';
    recharge.date = new Date();
    if(favoris.checked){
        recharge.libelle = getLibelle();
        recharge.status = 'favoris';
    }

    return recharge;
}

document.querySelector('button').addEventListener('click', ()=>{
    try {
        let bankData = JSON.parse(localStorage.getItem('YCD_Bank'));
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let recharge = getForm();
        recharge.id = bankData[currentUser.index].recharges.length;
        bankData[currentUser.index].recharges.push(recharge);
        if(bankData[currentUser.index].comptes[0].credit < recharge.montant) throw new Error('solde insufisant');
        bankData[currentUser.index].comptes[0].credit -= recharge.montant;
        localStorage.setItem('YCD_Bank', JSON.stringify(bankData));
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
    finally{

    }
});