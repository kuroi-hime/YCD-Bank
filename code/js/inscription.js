let prenom, nom, mail, telephone, civilite, adresse, data;
let suivantButton = document.querySelector('button');

function getPrenom(){
    let data = document.getElementById('prenom');
    if(!data) throw new Error('inexistant');
    if(data.value=='') throw new Error('vide');

    // let re = /^[a-zà-ÿ]+(\s[a-zà-ÿ'-])*$/i;
    // if(re.test(data.value))
    //     console.log(data.value);
    // else
    //     console.log(data.value +' invalid');
    return data.value;
}

function getNom(){
    let data = document.getElementById('nom');
    if(!data) throw new Error('inexistant');
    if(data.value=='') throw new Error('vide');
    return data.value;
}

function getMail(){
    let data = document.getElementById('email');
    if(!data) throw new Error('inexistant');
    if(data.value=='') throw new Error('vide');
    return data.value;
}

function getTelephone(){
    let data = document.getElementById('telephone');
    if(!data) throw new Error('inexistant');
    if(data.value=='') throw new Error('vide');
    // let re = /[0-9]{10}/
    // if(!re.test(data.value)) console.log(data.value + 'num invalide')
    return data.value;
}

function getCivilite(){
    let data = document.getElementById('civilite');
    if(!data) throw new Error('inexistant');
    return data.value;
}

function getAdresse(){
    let data = document.getElementById('adresse');
    if(!data) throw new Error('inexistant');
    if(data.value=='') throw new Error('vide');
    return data.value;
}

function getForm() {
    prenom = getPrenom();
    nom = getNom();
    mail = getMail();
    telephone = getTelephone();
    civilite = getCivilite();
    adresse = getAdresse();

    return {prenom:prenom, nom:nom, mail:mail, telephone:telephone, civilite:civilite, adresse:adresse};
}

suivantButton.addEventListener("click", () => {
    
    try{
        // document.querySelector('iframe').sandbox = 'allow-modals'
        sessionStorage.setItem('inscriptionData', JSON.stringify(getForm()));
        let a = document.createElement('a');
        a.href = '../html/confirmation.html';
        a.click();
    }catch(erreur){
        if(erreur.message == 'vide')
            alert('veuillez remplir tous les champs');
        else
            console.log(erreur.message);
    }
});