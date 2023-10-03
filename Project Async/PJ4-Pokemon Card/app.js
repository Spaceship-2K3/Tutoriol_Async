const url = " https://pokeapi.co/api/v2/pokemon/";
const card = document.querySelector("#card");
const btn = document.querySelector("#btn");
btn.addEventListener("click", getPokeData);
window.addEventListener("load", getPokeData);
function getPokeData() {
    // todo : Generate a random number between 1 and 150
    let id = Math.floor(Math.random() * 150) + 1;

    // todo : combine the pokeapi url with pokemon id
    const finalUrl = url + id;
    fetch(finalUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            generateCard(data);
        })
        .catch(() => {
            console.log("404 not found");
        });
}

// ! generateCard
function generateCard(data) {
    // todo get necessary data and assign it to variables
    const hp = data.stats[0].base_stat;
    const imgSrc = data.sprites.other.dream_world.front_default;
    const pokeName = data.name;
    const statAttack = data.stats[1].base_stat;
    const statDefense = data.stats[2].base_stat;
    const statSpeed = data.stats[5].base_stat;
    console.log(data);
    card.innerHTML = `
    <p class="hp">
        <span>HP</span>
       ${hp}
    </p>
    <img src="${imgSrc}" alt="" class="card-img" />
    <h2 class="poke-name">${pokeName}</h2>
    <div class="types">
        
    </div>
    <div class="stats">
        <div>
            <h3>${statAttack}</h3>
            <p>Attack</p>
        </div>
        <div>
            <h3>${statDefense}</h3>
            <p>Defense</p>
        </div>
        <div>
            <h3>${statSpeed}</h3>
            <p>Speed</p>
        </div>
    </div>
    `;
    appendTypes(data.types);
}

function appendTypes(types) {
    types.forEach((item) => {
        let span = document.createElement("span");
        span.innerHTML = item.type.name;
        document.querySelector(".types").appendChild(span);
    });
}
