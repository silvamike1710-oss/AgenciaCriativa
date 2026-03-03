

//generates random number and stores it
const secretNumber = Math.floor(Math.random() * 100) + 1;

//attempts
let attempts = 10;

//will check the attempt
function checkGuess() {

    if (attempts <= 0) return;

    const userGuess = Number(document.getElementById("guess").value)
    const result = document.getElementById("result");
    const counter = document.getElementById("counter");

    attempts--;


    if (userGuess === secretNumber) {
        result.textContent = ("correct")
    } 
    else if (userGuess < secretNumber) {
        result.textContent = ("too low")
    } 
    else {
        result.textContent = ("too high")
    }
    
    counter.textContent = "attempts: " + attempts;

    if (attempts === 0 && userGuess !== secretNumber) {
        result.textContent = "game over! the number was " + secretNumber;
    }

}