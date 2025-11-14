let alertFaild = document.getElementById('alertFaild');

document.querySelector('button').addEventListener('click', ()=>{
    let identifiant = document.getElementById('identifiant');
    let password = document.getElementById('password');
    let bankData = JSON.parse(localStorage.getItem('YCD_Bank'));

    let currentUser = bankData.find(user => user.comptes.find(compte => compte.type == 'Principal' && compte.rib.substring(6, 22) == identifiant.value));
    let a = document.createElement('a');
    if(currentUser){
        if(currentUser.password == password.value){
            localStorage.setItem('currentUser', JSON.stringify({index: bankData.indexOf(currentUser)}));
        
            a.href = 'compte.html';
            a.click();
        }
        else{
            alertFaild.innerText = "Mot de passe érronné";
            alertFaild.classList.remove('hidden');
            setTimeout(()=>{
                alertFaild.classList.add('hidden');
            }, 1500);
            password.value = '';
        }
    }else{
        if(confirm("Voullez-vous créer un nouveau compte")){
            a.href = '../html/inscription.html'
            a.click();
        }else{
            identifiant.value = '';
            password.value = '';
        }
    }
});