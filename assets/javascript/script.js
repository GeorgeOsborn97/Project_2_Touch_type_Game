// Define the arrays that will be required
let keyArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let keyArrayHard = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9','!','"','£','$','^','*','(',')',',','.','/','?',';',':','[',']','#'];
let userArray= ['Mark', 'George', 'Ben', 'Chris'];
let dificultyArray = ['easy'];

// this allows the difficulty to be selected whist changing the ufo description
function dificultySelect(event){
    let dificultyEasy = document.getElementById("easy");
    let dificultyHard = document.getElementById("hard");
    if (dificultyEasy.checked){
        dificultyArray.push('easy');
        let portal = document.getElementById('animation');
            portal.innerHTML = `<img alt='ufo' src='assets/images/ufo-easy.png'>`
    }
    if (dificultyHard.checked){
        dificultyArray.push('hard');
        let portal = document.getElementById('animation');
            portal.innerHTML = `<img alt='ufo' src='assets/images/ufo-hard.png'>`  
    }
    console.log(dificultyArray);
}
let radioSelect = document.getElementById("dificulty");
    radioSelect.addEventListener('click', dificultySelect);

//this function that runs on the laoding of the page governs the fading in and out of the 'portal and 'ufo'
function ufoEnter(event){
    document.getElementById('hard').disabled = true;
    document.getElementById('easy').disabled = true;
    let i = 1;
   let fade = setInterval(function () {
    i++;
    console.log(i);
        let portal = document.getElementById('animation');
        let portalDelete = document.getElementById('portal');
        portalDelete.style.opacity = '0';
        portalDelete.style.transition = '5s';
        if (i == 5){
        portal.innerHTML = `<img alt='ufo' src='assets/images/ufo-easy.png'>`;
        portal.className = 'fadeIn'
        portal.style.opacity = '1'
        portal.style.transition = '5s'
        portal.style.scale = '2'
        clearInterval(fade);
        moveUp();
        } 
    }, 1000);

}    
document.addEventListener('DOMContentLoaded', ufoEnter)

// this function governs the movement of the 'ufo' when it entyers the page. this is a modified version of w3schools function.
// the original cvan be foud here: https://www.w3schools.com/js/js_htmldom_animate.asp
function moveUp() {
    let y = document.getElementById("box")
    console.log(y.clientHeight)
        let id = null;
        const elem = document.getElementById("animation");  
        let pos = 0;
        clearInterval(id);
        id = setInterval(frame, 5);
        function frame() {
          if (pos == 120) {
            clearInterval(id);
          } else {
            pos++;  
            elem.style.bottom = pos + "px"; 
            var mq = window.matchMedia( "(max-width: 800px)" );
            document.getElementById('hard').disabled = false;
            document.getElementById('easy').disabled = false;
            if(mq.matches) {
                document.getElementById('hard').disabled = true;
                elem.style.zIndex = '1';
            }
          }
        }
    }        

// styling for the first fail blocks as css can not to target id if its numerical
let fifthFail = document.getElementById('5');
    fifthFail.style.marginRight = "0px";

// responsive styling for different screen sizes
var mq = window.matchMedia( "(max-width: 800px)" );
// alert message on mobile to play the game portrait as in landscape the keyboard will obscure the game screen.
// also this disbales hard mode on mobile as it is not feesable to play with special characters on a mobile device
if(mq.matches) {
    function mobileLoad(event){
        alert('Turn Device Portrait. Hard mode is disbaled on mobile devices');
        document.getElementById('hard').disabled = true;
    }
    document.addEventListener('DOMContentLoaded', mobileLoad);

//Remakes the scoreboards as a new div so that it appears under the game screen instead of to the left of it.    
    let mainCounter = document.getElementById('counter');
        mainCounter.style.marginTop = '30px';
    let scoreboard = document.getElementById('scoreboard');
        scoreboard.remove();
    let scoreboardHard = document.getElementById('scoreboard-hard');
        scoreboardHard.remove();
    //table 1
    let newScoreboard = document.createElement('span');
        newScoreboard.innerHTML = 
            `<table id="leaderboard">
                <tr>
                    <th id="leaderboard-heading">Leaderboard (e)</th>
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
            </table>`;
//table2
    let newScoreboardHard = document.createElement('span');
        newScoreboardHard.innerHTML = 
            `<table id="leaderboard-hard">
                <tr>
                    <th id="leaderboard-heading-hard">Leaderboard (H)</th>
                </tr>
                <tr>
                    <td class="table-data">Mrk:</td>
                    <td class="table-data">18</td>
                </tr>
                <tr>
                    <td class="table-data">Geo:</td>
                    <td class="table-data">15</td>
                </tr>
                <tr>
                    <td class="table-data">Ben:</td>
                    <td class="table-data">12</td>
                </tr>
                <tr>
                    <td class="table-data">Crs:</td>
                    <td class="table-data">8</td>
                </tr> 
            </table>`;
    let body = document.getElementById('home-page');
        body.appendChild(newScoreboard);
        body.appendChild(newScoreboardHard);
        body.style.width = "100vw";
    let newLeaderboard = document.getElementById('leaderboard');
        newLeaderboard.style.width = '40%';
        newLeaderboard.style.position = 'relative';
        newLeaderboard.style.float = 'left';
    let newLeaderboardHard = document.getElementById('leaderboard-hard');
        newLeaderboardHard.style.width = '40%';
        newLeaderboardHard.style.position = 'relative';
        newLeaderboardHard.style.float = 'right';
}

//First function that executes when a username is submitted. It's Purpose is to Remove the Form element, push the inputted name to the array.
//And create an instructions page with a play button that will begin the game.
function usernameEntry(event) {
    let portal = document.getElementById('animation');
    portal.className = 'fadeOut'
    portal.style.opacity = '0'
    portal.style.transition = '5s'
    let form = document.getElementById("name-select");
//This pushes the counter down so that it is not in contanct with the instructions on mobile devices    
    var mw = window.matchMedia( "(max-width: 360px)" );
    if(mw.matches){
        let counter = document.getElementById('counter');
        counter.style.marginTop = "120px";
    }

    event.preventDefault();
// push the inputted name, remove the form.    
    let username = document.getElementById("username");
    let user = username.value;
        userArray.push(user);
        form.remove();
// create new h1, p and img elements. the img acts as a button that moves the player on to the game.    
// this also begins the background music.    
    let title = document.createElement("h1");
        title.setAttribute('id', 'title');
        title.style.color = "red";

    let instructions = document.createElement("p");
        instructions.setAttribute('id', 'instructions');

    let play = document.createElement("img");
        play.style.height = '100px';
        play.style.width = '150px';
        play.setAttribute('src','assets/images/pixilart-drawing-(play).png');
        play.setAttribute('type', 'image');
        play.setAttribute('onclick', 'startTimer();');
        play.setAttribute('id', 'playButton');
        title.innerHTML = "How to play";
        title.style.color = "white";
        instructions.innerHTML = "After the countdown a random key will be displayed in the circle, you will have 1 second to hit the same key before it changes. A correct click = 1 point, 5 mis-clicks and the game ends. there is a max score of 40 if you make it to the end. Click the Game over screen at the end to play again. Good Luck!";
        instructions.style.color = "white";
    
    let screen = document.getElementById("menu-game-screen");
        screen.appendChild(title);
        screen.appendChild(instructions);
        screen.appendChild(play);
        var audio = new Audio("assets/audio/background.mp3");
    audio.loop = true;
    audio.play();
}

// a function that is called when the player starts the game.
// it simply turns the title within the gamescreen into a 5 second countdown. at 0 the game function is called.
function startTimer(event){
    let title = document.getElementById('title');
    title.innerHTML = 5;
    var countDown = setInterval(downTimer, 1500);
    function downTimer(){
        title.innerHTML -= 1;
        var audio = new Audio("assets/audio/countDown.mp3");
            audio.play();
        if(title.innerHTML == 0){
            console.log('game starts');
            clearInterval(countDown);
            var audio = new Audio("assets/audio/start.mp3");
            audio.play();
            startTheGame();
        }
    }
}
let form = document.getElementById("name-select");
    form.addEventListener('submit', usernameEntry);

// the game runnning function that generates a random key, tracks the key pressed and provides on out come eitherway. when 5 mis clicks are counted the game ends, or if the game runs 40 cycles through
function startTheGame(event) {
// if the game is played on mobile the title is removed so that tyhe game screen can be clearly seen when a mobile keyboard is displayed.    
    if(mq.matches){
        let header = document.getElementById('logo');
        header.remove();
        let failDiv = document.getElementById('fail-div');
        failDiv.style.paddingTop = '25px';
    }
    var mw = window.matchMedia( "(max-width: 360px)" );
// this moves the counter back up after it was moved down in order to not obscure the intructions.    
    if(mw.matches){
        let counter = document.getElementById('counter');
        counter.style.marginTop = "10px";
    }
// re size and move the title as this now shows the randomly generated key.    
    title.style.padding = "80px, 80px, 80px, 80px";
    title.style.fontSize = "120px";
    title.innerHTML = "GO!";
    let x = dificultyArray.push() - 1;
        console.log(dificultyArray[x]);
//This function produces the random key and chnages the color every new key in order to keep a change if the random key is the same as the last
// it also keeps a track of the amount of keys shown when the count hits 40 the game ends.
    function newKey() {
        timesRun += 1;
        console.log(timesRun);
        if (timesRun === 41){
            clearInterval(interval);  
            body.removeEventListener('keydown', keyPress); 
            endGame();     
        }
       //This condition produces the random key and chnages the color every new key in order to keep a change if the random key is the same as the last
       if (timesRun != 41){
            console.log("first if works");
            if(dificultyArray[x] == 'easy'){
                let i = Math.floor(Math.random() * (33-0+1));
                    console.log(i);
                    title.innerHTML = keyArray[i];
                if(title.style.color == "red"){
                    title.style.color = "blue";
                } else {
                    title.style.color = "red";
                }
            }
        }
        if(dificultyArray[x] == 'hard'){
            let i = Math.floor(Math.random() * (50-0+1));
                console.log(i);
                title.innerHTML = keyArrayHard[i];
            if(title.style.color == "red"){
                title.style.color = "blue";
            } else {
                title.style.color = "red";
            }
        }
    }
// these are the variables that are created to keep the game running, including tyhe run count, interval time and fail count    
    var timesRun = 0;
    var sec = 1000;
    var failCount = 0;
        failArray = [];
    var interval = setInterval(newKey, sec); 
        instructions.remove();
        playButton.remove();
//the function that tracks and generates keys, also tracking and counting fails
    function keyPress(event) {
        if (event.key == title.innerHTML) {
            var audio = new Audio("assets/audio/correct.mp3");
                audio.play();
                console.log(event.key);
            let score = document.getElementById("counter");
                score.innerHTML++;
        } else { if(event.shiftKey){return false}
            var audio = new Audio("assets/audio/fail.mp3");
                audio.play();
                failCount += 1;
            let failSigns = document.getElementById(failCount);
                failSigns.style.color = "red";
                failSigns.style.borderColor = "black";
                failSigns.innerHTML = `<i class="fa-solid fa-burst"></i>`;
                failArray.push(failCount);
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
// first the game over screen is shown
    let score = document.getElementById("counter");
    var finalScore = score.innerHTML;   
    let newScreen = document.getElementById('menu-game-screen');
    if(score.innerHTML == 40){
        newScreen.style.backgroundImage = "url('assets/images/winner.png')";
        var audio = new Audio("assets/audio/victory.mp3");
                audio.play();
    } else{
        newScreen.style.backgroundImage = "url('assets/images/gameOver.jpg')";
        var audio = new Audio("assets/audio/game-over.mp3");
                audio.play();
    }    
        title.remove();
        console.log("end reached");
    let dArray = dificultyArray.push() - 1;
// the users name is then pulled from the array, the score is added and then put to the relevent table.
        console.log(userArray);
    let x = userArray.push() - 1;
        console.log(userArray[x] + ': ' + finalScore);
    let leaderboard = document.getElementById("leaderboard");
    let leaderboardHard = document.getElementById("leaderboard-hard");
    let newRow = document.createElement("tr");
    if (dificultyArray[dArray] == 'easy'){
        leaderboard.appendChild(newRow);
        newRow.setAttribute('id', 'userInput' + x);
    }
    if (dificultyArray[dArray] == 'hard'){
        leaderboardHard.appendChild(newRow);
        newRow.setAttribute('id', 'userInput' + x);
    }
    const gameData = document.querySelector('#userInput' + x);
    let newName = document.createElement("td");
        newName.innerHTML = userArray[x] + ':';
        gameData.appendChild(newName);
    let newScore = document.createElement("td");
        newScore.innerHTML = finalScore;
        console.log(newScore);
        gameData.appendChild(newScore);
    //create a button that returns back to the original user input for replayability
    let returnToMenuDiv = document.getElementById("menu-game-screen");
        returnToMenuDiv.setAttribute('onclick', 'resetMenu();');
        returnToMenuDiv.setAttribute('onmouseenter', 'hover();');
        returnToMenuDiv.setAttribute('onmouseleave', 'hoverDown();');
    let returnToMenu = document.getElementById("menu-game-screen");
        returnToMenu.addEventListener('onclick', resetMenu);
}

// simple hover effects made to give clear indication of user interactivity
function hover(event) {
    if(returnToMenu.style.backgroundImage != null){
        let returnToMenuDiv = document.getElementById("menu-game-screen");
            returnToMenuDiv.style.scale = '1.05';
    }
}

function hoverDown(event) {
    if (returnToMenu.style.backgroundImage != null){
        let returnToMenuDiv = document.getElementById("menu-game-screen");
            returnToMenuDiv.style.scale = '1';
    }
}

let returnToMenu = document.getElementById("menu-game-screen");
    returnToMenu.addEventListener('onmouseenter', hover);
    returnToMenu.addEventListener('onmouseleave', hoverDown);

// the reset menu recreates the initial conditions of the site, so that a new name can be inputted and the game can be replayed.
function resetMenu(event) {
    let returnToMenu = document.getElementById("menu-game-screen");
        returnToMenu.removeAttribute('onclick', 'resetMenu();');
        returnToMenu.removeAttribute('onmouseenter', 'hover();');
        returnToMenu.removeAttribute('onmouseleave', 'hoverDown();');
        returnToMenu.style.scale = '1'
    let newMenu = document.createElement('form');
        newMenu.setAttribute('id', 'name-select');
        newMenu.setAttribute('action', 'https://formdump.codeinstitute.net/');
        newMenu.setAttribute('method', 'post'); 
        newMenu.innerHTML = 
            `<div id="dificulty">
                <label for="easy">Easy:</label>
                <input name="dificulty" id="easy" type="radio" value="easy" checked>
                <label for="hard">Hard:</label>
                <input name="dificulty" id="hard" type="radio" value="hard">
            </div>
            <div id="input">
                <label id="user-label" for="username">Username:</label>
                <input id="username" name="username" type="text" maxlength="3" required>
            </div>
            <input  id="submit" type="image" name="submit" alt="submit" aria-label="submit" src="assets/images/pixilart-drawing-(start).png">`;
// if on mobile it is here where the title/logo is recreated.    
    if(mq.matches){
        let newLogo = document.createElement('header');
            newLogo.innerHTML = `<h1>the touch type game</h1>`;
            newLogo.setAttribute('id', 'logo');
        let firstDiv = document.getElementById('fail-div');
        let body = document.getElementById('home-page');
            body.insertBefore(newLogo, firstDiv);
    }
    let screen = document.getElementById("menu-game-screen");
        screen.style.backgroundImage = null;
        screen.appendChild(newMenu);
// the fail icons are reset to green.   
    for (let i = 1; i < 6; i++){
        console.log(i);
        let failReset = document.getElementsByClassName('fail');
            failReset.namedItem(i).style.color = "greenyellow";
            failReset.namedItem(i).style.borderColor = "white";
            failReset.namedItem(i).innerHTML = `<i class="fa-brands fa-space-awesome">`;
        sortTable();
    }
    let newCounter = document.getElementById('counter');
        newCounter.innerHTML = 0;
    //Sort table function tken from w3schools credit to https://www.w3schools.com/howto/howto_js_sort_table.asp
    function sortTable() {
        var table, rows, switching, z, x, y, shouldSwitch;
        let dArray = dificultyArray.push() - 1;
        if (dificultyArray[dArray] == 'easy'){
            table = document.getElementById("leaderboard");
        }
        else {
            table = document.getElementById("leaderboard-hard");
        }
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
      dificultyArray=['easy']
      let form = document.getElementById("name-select");
          form.addEventListener('submit', usernameEntry);
      let radioSelect = document.getElementById("dificulty");
          radioSelect.addEventListener('click', dificultySelect);
          let portal = document.getElementById('portal');
          portal.style.opacity = '1'
          portal.style.transition = '5s'
          ufoEnter();
}