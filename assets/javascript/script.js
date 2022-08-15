function usernameEntry(event) {
    event.preventDefault();
    let username = document.getElementById("username");
    let user = username.value;
    let leaderboard = document.getElementById("leaderboard")
    let newName = document.createElement("li")
    newName.innerHTML = user
    leaderboard.appendChild(newName)
}
let form = document.getElementById("name-select");
form.addEventListener('submit', usernameEntry);