// https://api.github.com/users
document.getElementById("button").addEventListener("click", loadUsers);

// ! LoadUsers
function loadUsers() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users", true);

    xhr.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            let users = JSON.parse(this.responseText);

            let output = ``;
            for (let i in users) {
                output += `
                    <div class="user">
                        <img src="${users[i].avatar_url}" width ="70"  alt="" />
                        <ul>
                            <li>ID : ${users[i].id}</li>
                            <li>Login : ${users[i].login}</li>
                            
                        </ul>
                    </div>           
                `;
            }

            document.querySelector("#users").innerHTML = output;
        }
    };
    xhr.send();
}
