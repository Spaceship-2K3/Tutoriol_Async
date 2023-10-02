const jokeContainer = document.querySelector("#joke");
const btn = document.querySelector("#btn");
// ! https://v2.jokeapi.dev/
// ! get quotes  : https://api.quotable.io/random

const url =
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = async () => {
    jokeContainer.classList.remove("fade");
    // ! Way 1 :
    // fetch(url)
    //     .then((data) => {
    //         return data.json();
    //     })
    //     .then((item) => {
    //         jokeContainer.innerHTML = `${item.joke}`;
    //         jokeContainer.classList.add("fade");
    //         console.log(item.joke);
    //     });
    // ! Way 2 :
    /**
     *1.  Khi bạn sử dụng data.json(), bạn cần sử dụng await để chờ đợi cho
        đến khi promise hoàn thành và trả về dữ liệu JSON. Nó sẽ trả về một
        promise nên bạn cần await nó.

      2. Để thêm hiệu ứng "fade" cho jokeContainer, bạn cần sử dụng 
      setTimeout để chờ một chút thời gian sau khi nhận được dữ liệu 
      trước khi thêm lớp "fade" trở lại. 
      Bạn cũng cần sử dụng classList.add để thêm lớp "fade".
     */
    const response = await fetch(url);
    const data = await response.json();
    jokeContainer.innerHTML = `${data.joke}`;
    jokeContainer.classList.add("fade");
};
/**
Chú ý rằng tôi đã sử dụng data.joke để lấy nội dung của câu chuyện cười từ JSON trả về và đặt nó vào jokeContainer. Sau đó, tôi thêm và xóa lớp "fade" 
để tạo hiệu ứng fade in và fade out sau khi nhận được dữ liệu.
*/
btn.addEventListener("click", getJoke);
getJoke();
