const popup = document.getElementById("add-popup");
    const addBtn = document.getElementById("add-benef-btn");
    const cancelBtn = document.getElementById("cancel-btn");
    const saveBtn = document.getElementById("save-benef-btn");
    const list = document.getElementById("benef-list");

    addBtn.onclick = () => popup.classList.remove("hidden");
    cancelBtn.onclick = () => popup.classList.add("hidden");

    saveBtn.onclick = () => {
        const name = document.getElementById("benef-name").value;
        const rib = document.getElementById("benef-rib").value;
        const type = document.getElementById("benef-type").value;

        if (!name || !rib) return;

        const card = document.createElement("div");
        card.className =
            "border rounded-3xl p-4 shadow-sm bg-gray-50";

        card.innerHTML = `
            <div class="flex justify-between">
                <div class="flex flex-col gap-1">
                    <p class="font-semibold">${name}</p>
                    <p class="text-sm">RIB: ${rib}</p>
                    <p class="text-sm text-green-600 font-semibold">${type}</p>
                </div>
            </div>
        `;

        list.appendChild(card);
        popup.classList.add("hidden");
    };