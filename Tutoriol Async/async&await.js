/**
    *async se tra va 1 promise bat ke ben trong ham co chua gi 

*/

const getTodos = async () => {
    //todo : do this fetch and this return a promise and this await keyword stores JS
    //todo : and until the promise has resolved once the complete
    console.log("task 1");
    const response = await fetch("./todo1.json"); //  <=>  fetch("./todo1.json").then(() => {});
    // ! Throwing Errors
    if (response.status !== 200) {
        throw new Error("Cannot fetch");
    }

    const data = response.json(); // ! *

    console.log("task 2");
    console.log("task 3");

    return data;
    // ! the rest of code down here could carry on
    // console.log(response);
    /**
        => {}Response {type: 'basic', url: 'http://127.0.0.1:5500/Basic%20Asyn/todo1.json', redirected: false, status: 200, ok: true, …}
body
: 
(…)
bodyUsed
: 
false
headers
: 
Headers {}
ok
: 
true
redirected
: 
false
status
: 
200
statusText
: 
"OK"
type
: 
"basic"
url
: 
"http://127.0.0.1:5500/Basic%20Asyn/todo1.json"
[[Prototype]]
: 
Response
    */
};

console.log(1);
console.log(2);
console.log(3);
getTodos()
    .then((data) => {
        console.log(4);
        console.log("resolved : ", data);
    })
    .catch((error) => {
        console.log("rejected : ", error.message);
    });
console.log(5);
console.log(6);
console.log(7);
// const test = getTodos();
// console.log(test); // Promise {<fulfilled>: undefined}
// ! *
// fetch("./todo1.json")
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((error) => {
//         console.log(error);
//     });
