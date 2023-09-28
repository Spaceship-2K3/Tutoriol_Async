// ! https://dictionaryapi.dev/
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.querySelector("#result");
const sound = document.querySelector("#sound");
const btn = document.querySelector("#search-btn");

btn.addEventListener("click", function () {
    let inpWord = document.querySelector("#input-word").value;
    console.log(inpWord);
    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
            
            <div class="word">
            <h3>${inpWord}</h3>
            <button onclick="playSound()" type="button">
                <i class="fa-solid fa-volume-high"></i>
            </button>
        </div>
        <div class="details">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>${data[0].phonetic || data[1].phonetic}</p>
        </div>
        <div class="word-meaning">
            ${data[0].meanings[0].definitions[0].definition}. 
            ${data[0].meanings[0].definitions[1].definition || ""}.
            ${data[0].meanings[0].definitions[2].definition || ""}
        </div>
        <p class="word-example">
            ${data[0].meanings[0].definitions[0].example || ""}
        </p>

            `;

            sound.setAttribute(
                "src",
                `${
                    data[0].phonetics[0].audio ||
                    data[0].phonetics[1].audio ||
                    ""
                } `
            );
            console.log(sound);
        })
        .catch(() => {
            result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
        });
});

function playSound() {
    sound.play();
}
