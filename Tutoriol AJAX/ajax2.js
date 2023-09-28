// ! Button1 : GET User
document.getElementById("button1").addEventListener("click", loadUser);
function loadUser() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./user.json", true);
    xhr.onload = function () {
        if (this.status == 200) {
            let user = JSON.parse(this.responseText);
            let output = ``;
            output = `
            <ul>
                <li>ID : ${user.id}</li>
                <li>Name : ${user.name}</li>
                <li>UserName = ${user.username}</li>
                <li>Email : ${user.email}</li>
            </ul>
           
           `;
            document.querySelector(".content").innerHTML = output;
        }
    };
    xhr.send();
}

// ! Button2 : GET Users
document.getElementById("button2").addEventListener("click", loadUsers);
function loadUsers() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./users.json", true);
    xhr.onload = function () {
        if (this.status == 200) {
            let users = JSON.parse(this.responseText);
            let output = ``;

            for (let i in users) {
                output += `
                <ul>
                    <li>ID : ${users[i].id}</li>
                    <li>Name : ${users[i].name}</li>
                    <li>UserName = ${users[i].username}</li>
                    <li>Email : ${users[i].email}</li>
                </ul>

                <br />  
               `;
            }

            document.querySelector(".contents").innerHTML = output;
        }
    };
    xhr.send();
}
