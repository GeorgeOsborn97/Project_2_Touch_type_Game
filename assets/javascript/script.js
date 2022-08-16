// Define the arrays that will be required
let keyArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let userArray= ['Mark', 'George', 'Ben', 'Chris']
//First function that executes when a username is submitted. It's Purpose is to Remove the Form element, add an <li> element with the inputted name.
//And create an instructions page witha play button that will begin the game.
function usernameEntry(event) {
    event.preventDefault();
    let username = document.getElementById("username");
    let user = username.value;
    userArray.push(user)
    form.remove();
    let title = document.createElement("h1");
    title.setAttribute('id', 'title');
    title.style.color = "red"
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
    function newKey() {
        timesRun += 1
        console.log(timesRun)
        if (timesRun === 40){
            clearInterval(interval);  
            body.removeEventListener('keydown', keyPress); 
            endGame();     
        }
        //this is not functioning at the moment, look in the future at increasing speed every 10 rounds
        roundCount += 1
        if (roundCount === 10){
            sec = sec * 0.9
            roundCount = 0
        }
       
        let i = Math.floor(Math.random() * (33-0+1));
        console.log(i);
        title.innerHTML = keyArray[i];
        if(title.style.color == "red"){
            title.style.color = "blue"
        } else {
            title.style.color = "red"
        }
    }
    var timesRun = 0
    var roundCount = 0
    var sec = 1000
    var failCount = 0
    failArray = []
    var interval = setInterval(newKey, sec); 
    instructions.remove();
    playButton.remove();

    function keyPress(event) {
        if (event.key == title.innerHTML) {
            console.log(event.key);
            let score = document.getElementById("counter");
            score.innerHTML++
        } else {
            failCount += 1
            let failSigns = document.getElementById(failCount)
            failSigns.style.color = "red"
            failArray.push(failCount)
            if(failArray.push() == 5){
                clearInterval(interval);  
            body.removeEventListener('keydown', keyPress); 
            endGame();     
            }

        }
    }
    let body = document.getElementById('home-page');
body.addEventListener('keydown', keyPress);
}
// end game function is called when the count = 40, logs the users name and score. needs a sort function  
function endGame() {
    console.log("end reached");
    let score = document.getElementById("counter");
    var finalScore = score.innerHTML
    console.log(userArray)
    let x = userArray.push() - 1
    console.log(userArray[x] + ': ' + finalScore)
    let leaderboard = document.getElementById("leaderboard");
    let newName = document.createElement("li");
    newName.innerHTML = userArray[x] + ': ' + finalScore;
    newName.setAttribute('id', 'name1');
    leaderboard.appendChild(newName);
}