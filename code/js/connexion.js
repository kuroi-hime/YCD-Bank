document.querySelector('button').addEventListener('click', ()=>{
    let identifiant = document.getElementById('identifiant');
    let password = document.getElementById('password');
    let bankData = JSON.parse(localStorage.getItem('YCD_Bank'));

    let currentUser = bankData.find(user => user.comptes.find(compte => compte.type == 'Principal' && compte.rib.includes(identifiant.value)));
    let a = document.createElement('a');
    if(currentUser){
        if(currentUser.password == password.value){
            // let xhr = new XMLHttpRequest();
            // xhr.open('POST', 'http://localhost:5500/code/compte.html', true);
            // xhr.setRequestHeader("Content-Type", "application/json");
            // xhr.send(JSON.stringify(currentUser));
            // xhr.onload = 
            localStorage.setItem('currentUser', JSON.stringify({index: bankData.indexOf(currentUser)}))
            console.log(localStorage.getItem(currentUser));
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