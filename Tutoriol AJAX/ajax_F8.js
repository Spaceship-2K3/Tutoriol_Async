var http = new XMLHttpRequest();
http.open("GET", "https://jsonplaceholder.typicode.com/posts");
http.send();
http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        render(JSON.parse(this.responseText));
    }
};

function render(lessons) {
    for (var lesson of lessons) {
        // document.querySelector("#content").innerHTML += lesson;
        console.log(lesson);
    }
}
