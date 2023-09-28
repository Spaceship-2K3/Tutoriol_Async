document.querySelector("#button").addEventListener("click", getName);
document.querySelector("#getForm").addEventListener("submit", getName);
function getName(e) {
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    let name = document.getElementById("name1").value;
    xhr.open("GET", `process.php?name=${name}`, true);
    xhr.onload = function () {
        console.log(this.responseText);
    };

    xhr.send();
}
