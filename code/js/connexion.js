const nameRegex = /^[a-zA-Z\s-']{2,50}$/;
const cinRegex = /^[A-Z]{1,2}\d{6,8}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
const phoneRegex = /^(05|06|07)\d{8}$/;
const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{5,}$/;

document.querySelector('button').addEventListener('click', ()=>{
    let identifiant = document.getElementById('identifiant');
    let password = document.getElementById('password');
    let bankData = JSON.parse(localStorage.getItem('YCD_Bank'));

    let currentUser = bankData.find(user => user.comptes.find(compte => compte.type == 'Principale' && compte.rib.includes(identifiant.value)));
    let a = document.createElement('a');
    if(currentUser){
        if(currentUser.password == password.value){
            // let xhr = new XMLHttpRequest();
            // xhr.open('POST', 'http://localhost:5500/code/compte.html', true);
            // xhr.setRequestHeader("Content-Type", "application/json");
            // xhr.send(JSON.stringify(currentUser));
            // xhr.onload = 
            localStorage.setItem('currentUser', JSON.stringify({index: bankData.indexOf(currentUser)}))
            // a changer
            a.href = '../compte.html'
            a.click();
        }
        else{
            alert("Mot de passe erronne");
            password.value = '';
        }
    }else{
        if(confirm("Vous devez creer un compte dabord")){
            a.href = '../html/inscription.html'
            a.click();
        }else{
            identifiant.value = '';
            password.value = '';
        }
    }
});