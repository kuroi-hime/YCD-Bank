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
    
    let bankData = JSON.parse(localStorage.getItem('YCD_Bank'))||[];
    data.comptes = [{rib: genererRIB(), type: "Principal", credit: 10000}, {rib: genererRIB(), type: "Epargne", credit: 0}];
    data.factures = [];

    bankData.push(data);
    localStorage.setItem('YCD_Bank', JSON.stringify(bankData));
    sessionStorage.clear();
    let a = document.createElement('a');
    a.href = "../html/connexion.html";
    a.click();
});