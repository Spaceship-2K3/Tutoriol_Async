const getPost = (resource, callback) => {
    const request = new XMLHttpRequest();
    request.open("GET", `${resource}`, true);
    request.send();
    request.addEventListener("readystatechange", function () {
        if (this.status == 200 && this.readyState == 4) {
            callback(undefined, JSON.parse(this.responseText));
        } else if (request.readyState == 4) {
            callback("could not fetch data", undefined);
        }
    });
};

// todo 1:
getPost("./todo1.json", (err, data) => {
    console.log(data);
    // todo 2:
    getPost("./todo2.json", (err, data) => {
        console.log(data);
        // todo3:
        getPost("./todo3.json", (err, data) => {
            console.log(data);
        });
    });
});
