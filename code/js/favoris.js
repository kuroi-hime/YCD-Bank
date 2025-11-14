let btnShow = document.getElementById('show');
let btnAnnuler = document.getElementById('annuler');
let btnAjouter = document.getElementById('ajouter');
let popover = document.getElementById('my-popover');
let container = document.getElementById('container');
let favoris = [];
let bankData = JSON.parse(localStorage.getItem('YCD_Bank'));
let currentUser = JSON.parse(localStorage.getItem('currentUser'));

btnShow.addEventListener('click', ()=>{popover.classList.remove('hidden')});
btnAnnuler.addEventListener('click', ()=>{popover.classList.add('hidden')});

function favorisTemplate(f){
    return `
        <div class="w-full flex items-center justify-between px-[4%] bg-[#CCC9DC] rounded-3xl">
            <p class="h-fit font-medium text-[20px]">${f.status==''?(f.type=='recharge'?f.numero:f.ref):f.libelle}</p>
            <div class="flex items-center gap-[10%] w-fit">
                <svg onclick="editer(${f.id}, ${f.type})" class="h-[50px]" fill="#000000" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path class="st0" d="M12 25l3 3 15-15-3-3-15 15zM11 26l3 3-4 1z"></path></g></svg>
                <svg onclick="supprimer(${f.id}, ${f.type})"class="h-[40px]" fill="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z"></path></g></svg>
            </div>
        </div>
    `;
}

bankData[currentUser.index].factures.forEach(facture => {
    facture.type = 'facture';
    favoris.push(facture);
});

bankData[currentUser.index].recharges.forEach(recharge => {
    recharge.type = 'recharge';
    favoris.push(recharge);
});

function renderFavoris(list){
    if(list){
        container.innerHTML = list.map(favorisTemplate).join("");
    }
    else{
        container.innerHTML = `
                <svg width="64px" height="64px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" id="_x3C_Layer_x3E_" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="page_x2C__document_x2C__emoji_x2C__No_results_x2C__empty_page"> <g id="XMLID_1521_"> <path d="M21.5,14.75c0.41,0,0.75,0.34,0.75,0.75s-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75 S21.09,14.75,21.5,14.75z" fill="#263238" id="XMLID_1887_"></path> <path d="M10.5,14.75c0.41,0,0.75,0.34,0.75,0.75s-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75 S10.09,14.75,10.5,14.75z" fill="#263238" id="XMLID_1885_"></path> </g> <g id="XMLID_1337_"> <g id="XMLID_4010_"> <polyline fill="none" id="XMLID_4073_" points=" 21.5,1.5 4.5,1.5 4.5,30.5 27.5,30.5 27.5,7.5 " stroke="#455A64" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polyline> <polyline fill="none" id="XMLID_4072_" points=" 21.5,1.5 27.479,7.5 21.5,7.5 21.5,4 " stroke="#455A64" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polyline> <path d=" M14.5,18.5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5" fill="none" id="XMLID_4071_" stroke="#455A64" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path> <g id="XMLID_4068_"> <path d=" M20.75,15.5c0,0.41,0.34,0.75,0.75,0.75s0.75-0.34,0.75-0.75s-0.34-0.75-0.75-0.75S20.75,15.09,20.75,15.5z" fill="none" id="XMLID_4070_" stroke="#455A64" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path> <path d=" M11.25,15.5c0,0.41-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75s0.34-0.75,0.75-0.75S11.25,15.09,11.25,15.5z" fill="none" id="XMLID_4069_" stroke="#455A64" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path> </g> </g> <g id="XMLID_2974_"> <polyline fill="none" id="XMLID_4009_" points=" 21.5,1.5 4.5,1.5 4.5,30.5 27.5,30.5 27.5,7.5 " stroke="#263238" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polyline> <polyline fill="none" id="XMLID_4008_" points=" 21.5,1.5 27.479,7.5 21.5,7.5 21.5,4 " stroke="#263238" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polyline> <path d=" M14.5,18.5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5" fill="none" id="XMLID_4007_" stroke="#263238" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path> <g id="XMLID_4004_"> <path d=" M20.75,15.5c0,0.41,0.34,0.75,0.75,0.75s0.75-0.34,0.75-0.75s-0.34-0.75-0.75-0.75S20.75,15.09,20.75,15.5z" fill="none" id="XMLID_4006_" stroke="#263238" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path> <path d=" M11.25,15.5c0,0.41-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75s0.34-0.75,0.75-0.75S11.25,15.09,11.25,15.5z" fill="none" id="XMLID_4005_" stroke="#263238" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path> </g> </g> </g> </g> </g></svg>
                <p>Aucun favoris</p>
        `;
    }
}

renderFavoris(favoris);