// Define the arrays that will be required
let keyArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let userArray= ['Mark', 'George', 'Ben', 'Chris']
// styling for the first and last fail blocks as css struggles to target id if its numerical
let firstFail = document.getElementById('1')
let fifthFail = document.getElementById('5')
fifthFail.style.marginRight = "0px"
// responsive styling for different screen sizes
var mq = window.matchMedia( "(max-width: 450px)" );
if(mq.matches) {
    let scoreboard = document.getElementById('scoreboard');
    scoreboard.remove();
    newScoreboard = document.createElement('div');
    newScoreboard.innerHTML = 
    `<table id="leaderboard">
    <tr>
        <th id="leaderboard-heading">Leaderboard</th>
    </tr>
    <tr>
        <td class="table-data">Mrk:</td>
        <td class="table-data">32</td>
    </tr>
    <tr>
        <td class="table-data">Geo:</td>
        <td class="table-data">28</td>
    </tr>
    <tr>
        <td class="table-data">Ben:</td>
        <td class="table-data">27</td>
    </tr>
    <tr>
        <td class="table-data">Crs:</td>
        <td class="table-data">24</td>
    </tr>
</table>`
    let body = document.getElementById('home-page');
    body.appendChild(newScoreboard);
    body.style.width = "95vw"
}


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
//the game runnning function that generates a random key, tracks the key pressed and provides on out come eitherway. when 5 mis clicks are counted the game ends, or if the game runs 40 cycles through
function startTheGame(event) {
    title.style.padding = "80px, 80px, 80px, 80px"
    title.style.fontSize = "120px" 
    title.innerHTML = "GO!"
    //This function produces the random key and chnages the color every new key in order to keep a change if the random key is the same as the last
    // it also keeps a track of the amount of keys shown when the count hits 40 the game ends.
    function newKey() {
        timesRun += 1
        console.log(timesRun)
        if (timesRun === 41){
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
       //This condition produces the random key and chnages the color every new key in order to keep a change if the random key is the same as the last
       if (timesRun != 40){
            let i = Math.floor(Math.random() * (33-0+1));
            console.log(i);
            title.innerHTML = keyArray[i];
            if(title.style.color == "red"){
                title.style.color = "blue"
            } else {
                title.style.color = "red"
            }
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
//the function that tracks and generates keys, also tracking and counting fails
    function keyPress(event) {
        if (event.key == title.innerHTML) {
            console.log(event.key);
            let score = document.getElementById("counter");
            score.innerHTML++
        } else {
            failCount += 1
            let failSigns = document.getElementById(failCount)
            failSigns.style.color = "red"
            failSigns.style.borderColor = "black"
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
   
    let newScreen = document.getElementById('menu-game-screen');
    newScreen.style.backgroundImage = "url('assets/images/gameOver.jpg')";
    title.remove();
    console.log("end reached");
    let score = document.getElementById("counter");
    var finalScore = score.innerHTML
        console.log(userArray)
    let x = userArray.push() - 1
        console.log(userArray[x] + ': ' + finalScore)
    let leaderboard = document.getElementById("leaderboard");
    let newRow = document.createElement("tr")
        leaderboard.appendChild(newRow)
        newRow.setAttribute('id', 'userInput')
    const gameData = document.querySelector('#userInput')
        let newName = document.createElement("td");
        newName.innerHTML = userArray[x] + ':';
        gameData.appendChild(newName)
        let newScore = document.createElement("td");
        newScore.innerHTML = finalScore
        console.log(newScore)
        gameData.appendChild(newScore);

    //create a button that returns back to the original user inout for replayability
    let returnToMenuDiv = document.getElementById("menu-game-screen");
        returnToMenuDiv.setAttribute('onclick', 'resetMenu();');
        returnToMenuDiv.setAttribute('onmouseenter', 'hover();')
        returnToMenuDiv.setAttribute('onmouseleave', 'hoverDown();')
    let returnToMenu = document.getElementById("menu-game-screen");
    returnToMenu.addEventListener('onclick', resetMenu)
}

function hover(event) {
    if(returnToMenu.style.backgroundImage != null){
        let returnToMenuDiv = document.getElementById("menu-game-screen");
        returnToMenuDiv.style.scale = '1.05'
    }
}
function hoverDown(event) {
    if (returnToMenu.style.backgroundImage != null){
        let returnToMenuDiv = document.getElementById("menu-game-screen");
        returnToMenuDiv.style.scale = '1'
    }
}
let returnToMenu = document.getElementById("menu-game-screen");
    returnToMenu.addEventListener('onmouseenter', hover)
    returnToMenu.addEventListener('onmouseleave', hoverDown)

function resetMenu(event) {
    let returnToMenu = document.getElementById("menu-game-screen");
    returnToMenu.removeAttribute('onclick', 'resetMenu();')
    returnToMenu.removeAttribute('onmouseenter', 'hover();');
    returnToMenu.removeAttribute('onmouseleave', 'hoverDown();');
    returnToMenu.style.scale = '1'
    let newMenu = document.createElement('form');
        newMenu.setAttribute('id', 'name-select');
        newMenu.setAttribute('action', 'https://formdump.codeinstitute.net/');
        newMenu.setAttribute('method', 'post'); 
        newMenu.innerHTML = 
    `<div id="input">
        <label for="username">Username:</label>
        <input id="username" name="username" type="text" required>
    </div>
    <input type="submit" aria-label="submit">`
    let screen = document.getElementById("menu-game-screen");
        screen.style.backgroundImage = null
        screen.appendChild(newMenu);
    for (let i = 1; i < 6; i++){
        console.log(i)
    let failReset = document.getElementsByClassName('fail');
    failReset.namedItem(i).style.color = "greenyellow"
    failReset.namedItem(i).style.borderColor = "white"
    sortTable();
    }
    //Sort table function tken from w3schools credit to https://www.w3schools.com/howto/howto_js_sort_table.asp
    function sortTable() {
        var table, rows, switching, z, x, y, shouldSwitch;
        table = document.getElementById("leaderboard");
        switching = true;
        /*Make a loop that will continue until
        no switching has been done:*/
        while (switching) {
          //start by saying: no switching is done:
          switching = false;
          rows = table.rows;
          /*Loop through all table rows (except the
          first, which contains table headers):*/
          for (z = 1; z < (rows.length - 1); z++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[z].getElementsByTagName("td")[1];
            y = rows[z + 1].getElementsByTagName("td")[1];
            //check if the two rows should switch place:
            if (Number(x.innerHTML) < Number(y.innerHTML)) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
              break;
            }
          }
          if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[z].parentNode.insertBefore(rows[z + 1], rows[z]);
            switching = true;
          }
        }
      }
}