var win = 0;
var loss = 0;
var totalrolls = 0; // rolls before money ran out
var totalmoney = 0;
var maxmoney = 0; // max money user held
var startingbet;
var rollcountatmaxmoney = 0; // roll count when user held the max money
var gameover = false;

function playGame() {
    startingbet = document.getElementById('startingbet').value;
    if (startingbet > 0) {
        totalmoney = startingbet;
        while (!gameover) {
            if (totalmoney > 0) {
                play();
            }
            else {
                gameover = true;
            }
        }
        document.getElementById('results').style.display = 'block'; // this will show the results div as it was hidden earlier
        document.getElementById('starting-bet').innerText = '$' + startingbet;
        document.getElementById('totalrolls').innerText = totalrolls;
        document.getElementById('maxmoney').innerText = '$' + maxmoney;
        document.getElementById('rollcountatmaxmoney').innerText = rollcountatmaxmoney;
    }
    else {
        alert('Please enter starting bet greater than 0')
    }
}

function playAgain() {
    win = 0;
    loss = 0;
    totalrolls = 0;
    totalmoney = 0;
    maxmoney = 0;
    startingbet;
    rollcountatmaxmoney = 0;
    gameover = false;
    document.getElementById('results').style.display = 'none';
}

function play() {
    totalrolls = totalrolls + 1;
    var dice1 = rollDice(); // 1-6  example: 3
    var dice2 = rollDice(); // 1-6 example: 4
    var diceTotal = dice1 + dice2; // example 7
    if (diceTotal === 7) {
        totalmoney = totalmoney + 4;
        //total money = 11
    }
    else {
        totalmoney = totalmoney - 1; // result: 7
    }
    if (totalmoney > maxmoney) { // here we are checking if totalmoney is greater than maxmoney
        maxmoney = totalmoney;
        rollcountatmaxmoney = totalrolls;
    }
    console.log(diceTotal, totalmoney, 'diceTotal')
}

function rollDice() {
    return Math.floor(Math.random() * 6);
}
