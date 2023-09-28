function loadText() {
    // todo : Create XHR Object
    var xhr = new XMLHttpRequest();

    // todo : OPEN - type , url/ file, async
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    // xhr.onload = function () {
    //     if (this.status == 200) {
    //         console.log(this.responseText);
    //     }
    // };
    console.log("READY STATE : ", xhr.readyState);

    // todo : OPTIONAL - used for loaders
    xhr.onprogress = function () {
        console.log("READY STATE : ", xhr.readyState);
    };

    // todo handler Error
    xhr.onerror = function () {
        console.log("Request Error...");
    };

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector("#content").innerHTML = this.responseText;
            console.log("READY STATE : ", xhr.readyState);
        } else if (this.status == 404) {
            document.querySelector("#content").innerHTML = "Not Found !";
        } else if (this.status == 403) {
            document.querySelector("#content").innerHTML = "Forbidden !";
        }
    };

    // todo : sends request
    xhr.send();
}
