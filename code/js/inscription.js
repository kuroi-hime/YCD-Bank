let prenom, nom, mail, telephone, civilite, adresse, data;
let suivantButton = document.querySelector('button');
let alertBox = document.getElementById('alertFaild');

function getPrenom(){
    let data = document.getElementById('prenom');
    if(!data) throw new Error('inexistant');
    if(data.value=='') throw new Error('veuillez remplir tous les champs');

    let re = /^[a-zà-ÿ]+('?|-?)[a-zà-ÿ]+(?:\s[a-zà-ÿ]+('?|-?)[a-zà-ÿ]+)*$/;
    if(!re.test(data.value)) throw new Error ('veuillez respecter la syntaxe');
    
    return data.value;
}

function getNom(){
    let data = document.getElementById('nom');
    if(!data) throw new Error('inexistant');
    if(data.value=='') throw new Error('veuillez remplir tous les champs');

    let re = /^[a-zà-ÿ]+('?|-?)[a-zà-ÿ]+(?:\s[a-zà-ÿ]+('?|-?)[a-zà-ÿ]+)*$/;
    if(!re.test(data.value)) throw new Error ('veuillez respecter la syntaxe');

    return data.value;
}

function getMail(){
    let data = document.getElementById('email');
    if(!data) throw new Error('inexistant');
    if(data.value=='') throw new Error('veuillez remplir tous les champs');

    let re = /^[^\.\s@][^\s@]+@[a-z0-9\-_]+\.[a-z]{2,3}$/i;
    if(!re.test(data.value)) throw new Error('veuillez respecter la syntaxe');

    return data.value;
}

function getTelephone(){
    let data = document.getElementById('telephone');
    if(!data) throw new Error('inexistant');
    if(data.value=='') throw new Error('veuillez remplir tous les champs');

    let re = /^(05|06|07)[0-9]{8}$/;
    if(!re.test(data.value)) throw new Error ('veuillez respecter la syntaxe');

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
    if(data.value=='') throw new Error('veuillez remplir tous les champs');

    // let re = /^(\d+)\srue\s([\w\s]+?)\squartier\s([\w\s]+?)\s([\w\s]+)$/i;
    // if(!re.test(data.value)) throw new Error('veuillez respecter la syntaxe');

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
        sessionStorage.setItem('inscriptionData', JSON.stringify(getForm()));
        let a = document.createElement('a');
        a.href = '../html/confirmation.html';
        a.click();
    }catch(erreur){
        if(erreur.message == 'veuillez remplir tous les champs' || erreur.message == 'veuillez respecter la syntaxe'){
            alertBox.innerText = erreur.message;
            alertBox.classList.remove('hidden');

            setTimeout(()=>{
                alertBox.classList.add('hidden');
            }, 1500);
        }
        else{
            console.log(erreur.message);
        }
    }
});