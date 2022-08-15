let keyArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function usernameEntry(event) {
    event.preventDefault();
    let username = document.getElementById("username");
    let user = username.value;
    let leaderboard = document.getElementById("leaderboard");
    let newName = document.createElement("li");
    newName.innerHTML = user
    leaderboard.appendChild(newName);
    form.remove();
    let title = document.createElement("h1");
    title.setAttribute('id', 'title');
    let instructions = document.createElement("p");
    instructions.setAttribute('id', 'instructions')
    let play = document.createElement("button");
    play.style.height = '50px';
    play.style.width = '100px';
    play.innerHTML = "PLAY";
    play.setAttribute('onclick', 'startTheGame();')
    play.setAttribute('id', 'playButton');
    title.innerHTML = "Title"
    instructions.innerHTML = "instructions to be added"
    let screen = document.getElementById("menu-game-screen");
    screen.appendChild(title);
    screen.appendChild(instructions);
    screen.appendChild(play);

}
let form = document.getElementById("name-select");
form.addEventListener('submit', usernameEntry);

function startTheGame(event) {
    title.innerHTML = Math.random() * 1000;
    instructions.remove();
    playButton.remove();

}
function randomKey(){
   let i = Math.random() * 100
   keyArray[i]
}

