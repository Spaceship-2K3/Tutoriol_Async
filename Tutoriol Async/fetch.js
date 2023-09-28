fetch("./todo1.json")
    // .then((response) => {
    //     console.log("resolved", response);
    //     return response.json();
    // })
    // .then((data) => {
    //     console.log(data);
    // })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => {
        console.log(error);
    });
