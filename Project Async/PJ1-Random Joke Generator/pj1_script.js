const jokeContainer = document.querySelector("#joke");
const btn = document.querySelector("#btn");
// ! https://v2.jokeapi.dev/
const url =
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
        .then((data) => {
            return data.json();
        })
        .then((item) => {
            jokeContainer.innerHTML = `${item.joke}`;
            jokeContainer.classList.add("fade");
            console.log(item.joke);
        });
};

btn.addEventListener("click", getJoke);
getJoke();
