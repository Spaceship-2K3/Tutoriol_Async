const http = new XMLHttpRequest();
http.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
http.send();
http.addEventListener("readystatechange", function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
    }
});
