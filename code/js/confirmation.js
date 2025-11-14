let suivantButton = document.querySelector('button');
let data = JSON.parse(sessionStorage.getItem('inscriptionData'));
let alertSuccess = document.getElementById('alertSuccess');
let alertFaild = document.getElementById('alertFaild');

function getPassword(){
    let password = document.getElementById('password');
    if(!password) throw new Error('Champ password inexistant');
    if(password.value=='') throw new Error('Champ password est vide');
    if(password.value.length<4 || password.value.length>16) throw new Error('Champ password est invalid');
    return password.value;
}

function setPassword(){
    let password = document.getElementById('password');
    password.value = '';
}

function getConfirmation(){
    let password = document.getElementById('password_confirmation');
    if(!password) throw new Error('Champ confirmation password inexistant');
    if(password.value=='') throw new Error('Champ confirmation password est vide');
    if(password.value.length<4 || password.value.length>16) throw new Error('Champ confirmation password est invalid');
    return password.value;
}

function setConfirmation(){
    let password = document.getElementById('password_confirmation');
    password.value = '';
}

function getForm(){
    let password = getPassword();
    let confirmation = getConfirmation();
    if(password != confirmation) throw new Error('confirmation non identique au mot de passe');

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

        //generation fichier contenant le code:
        localStorage.setItem('code', JSON.stringify(generateCode()));
        const blob = new Blob([`Votre code de confirmation est le suivant: ${JSON.parse(localStorage.getItem('code'))}`], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = "code de confirmation.txt"; 
        a.click();
        URL.revokeObjectURL(url);

        const b = document.createElement('a');
        b.href = 'verification.html';
        b.click();

    }catch(erreur){
        if(erreur.message.includes('vide') || erreur.message.includes('invalid') || erreur.message.includes('identique')){
            alertFaild.innerText = erreur.message;
            alertFaild.classList.remove('hidden');
            setTimeout(()=>{
                alertFaild.classList.add('hidden');
            }, 1500);

            if(erreur.message == 'confirmation non identique au mot de passe')
                setConfirmation();
            else{
                setPassword();
                setConfirmation();
            }
        }else{
            console.log(erreur.message);
        }
    }
});