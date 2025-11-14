let menuIcon = document.getElementById("menu-icon");
let navbar = document.getElementById("menu");
let btnDeconnecter = document.getElementById("deconnecter");

btnDeconnecter.addEventListener('click', ()=>{if(confirm("Voulez-vous vraiment vous déconnecter?")){
    let a = document.createElement('a');
    a.href = 'connexion.html';
    a.click();
    localStorage.removeItem('currentUser');
}});
menuIcon.addEventListener('click', ()=>{navbar.classList.toggle('hidden')});
