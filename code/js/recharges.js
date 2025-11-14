let favoris = document.getElementById('favoris');
let libelle = document.getElementById('libelle');
const operateur = document.getElementById('operateur');
const logo = document.getElementById('operateur_logo');
const service = document.getElementById('service');
const offres = document.getElementById('offres');
const numLigne = document.getElementById('numero');
const selectmontant = document.getElementById('montant');
const recharges = [];
let montants;
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
    if(service.value == 'none') throw new Error('champ type service est vide');

    return service.value;
}

function getNum(){
    if(numLigne.value == '') throw new Error('champ numero est vide');
    let re = service.value == 'telecom'? /^(05|06|07)[0-9]{8}$/g:/\d{8,}/g;
    if(!re.test(numLigne.value)) throw new Error('numéro invalid');

    return numLigne.value;
}

function getMontant(){
    if(selectmontant.value == 'none') throw new Error('champ montant est vide');

    return parseFloat(selectmontant.value);
}

service.addEventListener('change', ()=>{
    selectmontant.innerHTML = '<option value="none" disabled selected>Montant</option>';
    montants = [];
    if(service.value == 'telecom'){
        montants = recharges;
    }else{
        montants.push(((Math.random()*19 + 2)*10).toFixed(2));
    }
    numLigne.blur();
});

numLigne.addEventListener('change', ()=>{
    selectmontant.innerHTML = '<option value="none" disabled selected>Montant</option>';
    montants = [];
    if(service.value == 'telecom'){
        montants = recharges;
    }else{
        montants.push(((Math.random()*19 + 2)*10).toFixed(2));
    }
    if(getNum()){
        montants.forEach(montant=>{
            let opt = document.createElement('option');
            opt.innerText = `${montant} dh`;
            selectmontant.appendChild(opt);
        });
    }
});

function getLibelle(){
    if(libelle.value == '') throw new Error('champ libelle est vide');

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
        numLigne.value = '';
        service.value = 'none';
        selectmontant.innerHTML = '<option value="none" disabled selected>Montant</option>';
        libelle.value = '';
        if(favoris.checked){
            favoris.checked = false;
            libelle.classList.add('hidden');
        }
    } catch (error) {
        if(error.message.includes('vide')){
            alertFaild.innerText = 'Veuillez remplir tous les champs.';
            alertFaild.classList.remove('hidden');

            setTimeout(()=>{
                alertFaild.classList.add('hidden');
            }, 1500);
        }
        else{
            if(error.message.includes('insufisant') || error.message.includes('invalid')){
                alertFaild.innerText = error.message;
                alertFaild.classList.remove('hidden');

                setTimeout(()=>{
                    alertFaild.classList.add('hidden');
                }, 1500);
            }else{
                console.log(error.message);
            }
        } 
    }
});