let tableBody = document.getElementById("tableBody");

fetch("../data/country.json")
    .then((response) => response.json())
    .then((data) => {
        data.map((country, index) => {
            let row = document.createElement("tr");
            row.className = "border-b border-gray-200 hover:bg-gray-200";

            row.innerHTML = `
            <td>${index + 1}</td>
            <td>
                            <div class="flex items-center gap-3">
                                <div class="avatar">
                                    <div class="rounded h-12 w-16 border">
                                        <img
                                            
                                            src="https://flagcdn.com/w80/${country.alpha2.toLowerCase()}.png"
                                            alt="Avatar Tailwind CSS Component"
                                        />
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td class="text-xl font-bold">
                            ${country.name} <br>
                            <span class="text-sm text-success">${
                                country.capital
                            }</span>
                        </td>
                        <td class="font-semibold">${country.region}</td>
                        <td class="font-semibold">${country.alpha2}</td>
                        <td class="font-semibold">${country.alpha3}</td>
                        <td class="font-semibold">+${country.dialCode}</td>
                        <td class="font-semibold">${country.timezones[0]}</td>
                        `;
            tableBody.appendChild(row);
        });
    });
