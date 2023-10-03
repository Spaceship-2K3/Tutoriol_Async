const btn_search = document.querySelector("#btn-search");
const input_search = document.querySelector("#input-search");
const content = document.querySelector("#content");

btn_search.addEventListener("click", function (e) {
    let country_name = input_search.value.toLowerCase();
    let final_URL = `https://restcountries.com/v3.1/name/${country_name}?fullText=true`;
    fetch(final_URL)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const info_country = data;

            content.innerHTML = `

            <div class="flag-wrap">
                <img src="${
                    info_country[0].flags.png
                }" alt="" class="flag-img" />
                <h1 class="name-country">${country_name}</h1>
            </div>
            <ul class="list-info">
                <li class="item-info"><i>Capital : </i>${
                    info_country[0].capital
                }</li>
                <li class="item-info"><i>Continent : </i>${
                    info_country[0].continents
                }</li>

                <li class="item-info"><i>Currency : </i>
                    ${Object.keys(data[0].currencies)} - 
                    ${Object.keys(data[0].currencies)[0][2]}
                </li>
                <li class="item-info"><i>Population : </i>${
                    info_country[0].population
                }</li>
             
                <li class="item-info"><i>Common Languages : </i>${Object.values(
                    info_country[0].languages
                )
                    .toString()
                    .split(",")
                    .join(",")}</li>
            </ul>


            `;

            /**
               <li class="item-info"><i>Currency : </i>
                    ${Object.keys(data[0].currencies} - 
                    ${info_country[0].currencies.symbol}
                </li>
            
            */
            console.log(data);
            console.log(Object.keys(data[0].currencies)[0]);
        })
        .catch(() => {
            if (country_name.length == 0) {
                content.innerHTML = "";
                content.innerHTML = `<h3>The input field cannot be empty</h3>`;
            } else {
                content.innerHTML = `<h3>Please enter a valid country name</h3>`;
            }
        });
});
