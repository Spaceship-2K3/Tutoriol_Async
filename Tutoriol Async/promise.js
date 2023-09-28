// // ! EX 1 :
// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         // todo : fetch someThing
//         todo: resolve("some data");
//         // todo : reject('some error')
//     });
// };

// getSomething()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("done");
//     });

// ! EX 2 :
const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open("GET", `${resource}`, true);
        request.send();
        request.addEventListener("readystatechange", function () {
            if (this.readyState == 4 && this.status == 200) {
                const data = JSON.parse(this.responseText);
                resolve(data);
            } else if (this.readyState == 4) {
                reject("error getting resource");
            }
        });
    });
};

getTodos("./todo1.json")
    .then((data) => {
        console.log("promise resolved todo 1  : ", data);
        return getTodos("./todo2.json");
    })
    .then((data) => {
        console.log("promise resolved todo 2  : ", data);
        return getTodos("./todo3.json");
    })
    .then((data) => {
        console.log("promise resolved todo 3  : ", data);
    })
    .catch((error) => {
        console.log("promise rejected : ", error);
    })
    .finally(() => {
        console.log("Done");
    });
