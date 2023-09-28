const getPost = (callback) => {
    const request = new XMLHttpRequest();
    request.open("GET", "./posts.json", true);
    request.send();
    request.addEventListener("readystatechange", function () {
        if (this.status == 200 && this.readyState == 4) {
            callback(undefined, JSON.parse(this.responseText));
        } else if (request.readyState == 4) {
            callback("could not fetch data", undefined);
        }
    });
};

console.log(1);
console.log(2);
getPost((err, data) => {
    console.log("Callback fired json");
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log(3);
console.log(4);
