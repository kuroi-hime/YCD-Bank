let code = JSON.parse(localStorage.getItem('code'));
let input1 = document.getElementById('chiffre1');
let input2 = document.getElementById('chiffre2');
let input3 = document.getElementById('chiffre3');
let input4 = document.getElementById('chiffre4');
let input5 = document.getElementById('chiffre5');
let alertFaild = document.getElementById('alertFaild');

function generateCode(){
    let chiffre1 = Math.floor(Math.random() * 10);
    let chiffre2 = Math.floor(Math.random() * 10);
    let chiffre3 = Math.floor(Math.random() * 10);
    let chiffre4 = Math.floor(Math.random() * 10);
    let chiffre5 = Math.floor(Math.random() * 10);

    return ''+chiffre1+chiffre2+chiffre3+chiffre4+chiffre5;
}


const email = {
            to: 'kuroihime095@gmail.com',
            subject: 'Création nouveau compte chez YCD Bank',
            text: `${generateCode()} est votre code pour achever l'ouvriture de votre compte.`
        }

function genererRIB(){
    let prefixe = 123456;
    let suffixe = 78;
    let corps = () => {
    let result = '';
    for (let i = 0; i < 16; i++) {
      result += Math.floor(Math.random() * 10);
    }
    return result;
  };

  const rib = prefixe.toString() + corps() + suffixe.toString();
  return rib;
}

document.querySelector('button').addEventListener('click',()=>{
    let data = JSON.parse(sessionStorage.getItem('inscriptionData'));
    let codeEntre = input1.value+input2.value+input3.value+input4.value+input5.value;
    if(code == codeEntre){
      let bankData = JSON.parse(localStorage.getItem('YCD_Bank'))||[];
      data.comptes = [{rib: genererRIB(), type: "Principal", credit: 10000}, {rib: genererRIB(), type: "Epargne", credit: 0}];
      data.factures = [];
      data.recharges = [];
      data.virements = [];

      bankData.push(data);
      localStorage.setItem('YCD_Bank', JSON.stringify(bankData));
      sessionStorage.clear();
      let a = document.createElement('a');
      a.href = "../html/connexion.html";
      a.click();
    }
    else{
      alertFaild.innerText = 'Le code que vous avez entre ne correspend pas au celui envoye.';
      alertFaild.classList.remove('hidden');
      setTimeout();
    }
    
});