let suivantButton = document.querySelector('button');
let data = JSON.parse(sessionStorage.getItem('inscriptionData'));

function getPassword(){
    let password = document.getElementById('password');
    if(!password) throw new Error('inexistant');
    if(password.value=='') throw new Error('vide');
    if(password.value.length<4 || password.value.length>16) throw new Error('invalid');
    return password.value;
}

function setPassword(){
    let password = document.getElementById('password');
    password.value = '';
}

function getConfirmation(){
    let password = document.getElementById('password_confirmation');
    if(!password) throw new Error('inexistant');
    if(password.value=='') throw new Error('vide');
    if(password.value.length<4 || password.value.length>16) throw new Error('invalid');
    return password.value;
}

function setConfirmation(){
    let password = document.getElementById('password_confirmation');
    password.value = '';
}

function getForm(){
    let password = getPassword();
    let confirmation = getConfirmation();
    if(password != confirmation) throw new Error('confirmation non identique');

    return password;
}

function generateCode(){
    let chiffre1 = Math.floor(Math.random() * 10);
    let chiffre2 = Math.floor(Math.random() * 10);
    let chiffre3 = Math.floor(Math.random() * 10);
    let chiffre4 = Math.floor(Math.random() * 10);
    let chiffre5 = Math.floor(Math.random() * 10);
    console.log(''+chiffre1+chiffre2+chiffre3+chiffre4+chiffre5);

    return ''+chiffre1+chiffre2+chiffre3+chiffre4+chiffre5;
}

suivantButton.addEventListener("click", ()=>{
    try{
        data.password = getForm();
        sessionStorage.setItem('inscriptionData', JSON.stringify(data));
        const email = {
            to: 'kuroihime095@gmail.com',
            subject: 'Création nouveau compte chez YCD Bank',
            text: `${generateCode()} est votre code pour achever l'ouvriture de votre compte.`
        }
        let a = document.createElement('a');
        a.href = 'verification.html';
        // a.href = `mailto:${email.to}?subject=${email.subject}&body=${email.text}`;
        a.click();

    }catch(erreur){
        // console.log(erreur.message);
        alert(`Mot de passe: ${erreur.message}`);
        setPassword();
        setConfirmation();
    }
});