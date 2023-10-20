// Iteration 2: Generate 2 random number and display it on the screen

const num1 = Math.floor(Math.random() * 100) + 1;
const num2 = Math.floor(Math.random() * 100) + 1;

const button1 = document.getElementById('number1');
const button2 = document.getElementById('number2');

button1.innerText = num1;
button2.innerText = num2;

var score = parseInt(sessionStorage.getItem("score")) || 0

// Iteration 3: Make the options button functional
const button = document.getElementById("buttons");

button.addEventListener('click', function (event) {
    if (num1 > num2 && event.target.id == 'greater-than') {
        console.log('Won');
        score += 5;
        window.location.reload()
        sessionStorage.setItem("score",score);

  


    } else if (num2 == num1 && event.target.id == 'equal-to') {
        console.log('Won');
        score += 5;
        window.location.reload()
        sessionStorage.setItem("score",score);


    } else if (num2 > num1 && event.target.id == 'lesser-than') {
        console.log("Won");
        score += 5;
        window.location.reload()
        sessionStorage.setItem("score",score);


    } else {
        window.location.href = "gameover.html";
    }
})
console.log(score);

// Iteration 4: Build a timer for the game

const timer = document.getElementById('timer');
let countDown = 5;

timer.textContent = `${countDown}`;
const timeInterval = setInterval(()=> {
    countDown--;
    timer.innerText=`${countDown}`;

    if(countDown==0) {
        clearInterval(timeInterval);
        window.location.href = "gameover.html";

    }
},1000);

// var score = 5;
// localStorage.setItem("score", score);
// console.log(localStorage);
