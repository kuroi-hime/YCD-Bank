let prenom, nom, mail, pays, ville, quartier, data;
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

function getPays(){
    let data = document.getElementById('pays');
    if(!data) throw new Error('inexistant');
    if(data.value=='') throw new Error('vide');
    return data.value;
}

function getVille(){
    let data = document.getElementById('ville');
    if(!data) throw new Error('inexistant');
    if(data.value=='') throw new Error('vide');
    return data.value;
}

function getQuartier(){
    let data = document.getElementById('quartier');
    if(!data) throw new Error('inexistant');
    if(data.value=='') throw new Error('vide');
    return data.value;
}

function getForm() {
    prenom = getPrenom();
    nom = getNom();
    mail = getMail();
    pays = getPays();
    ville = getVille();
    quartier = getQuartier();

    return {prenom:prenom, nom:nom, mail:mail, pays:pays, ville:ville, quartier:quartier};
}

try{
    suivantButton.addEventListener("click", () => {
        // let bankData = localStorage.getItem('YCD_Bank');
        // if(!bankData) throw new Error('Clé inéxistante');
        // localStorage.setItem('YCD_Bank', JSON.stringify([]))
        sessionStorage.setItem('inscriptionData', JSON.stringify(getForm()));
        let a = document.createElement('a');
        a.href = 'confirmation.html';
        a.click();
    });
    
}catch(erreur){
    console.log(erreur.message);
    // if(erreur.message == 'vide')
    //     console.log
    alert('Veuillez remplir tous les champs');
};