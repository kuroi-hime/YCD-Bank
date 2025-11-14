let historiques = [];

function historiqueTemplate(h){
    return `
    <div class="flex flex-col gap-[8px] w-full bg-[#324A5F] rounded-3xl pb-[8px]">
        <div class="flex justify-between px-[16px] rounded-3xl bg-[#CCC9DC] font-medium text-[20px]">
            <h4>${h.num}</h4>
            <p>${h.date}</p>
        </div>
        <p class="font-normal text-[18px] text-white px-[16px]">${h.beneficiaire}</p>
        <div class="flex justify-between font-normal text-[18px] text-white px-[16px]">
            <p>${h.montant}</p>
            <p>${h.devise}</p>
        </div>
    </div>
    `;
}