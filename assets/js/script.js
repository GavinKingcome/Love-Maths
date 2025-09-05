// console.log("Connected!")  // Your current test

// function checkAnswer() {
//     console.log("User clicked answer button")  // Debug new features
//     let correctAnswer = 42;  // Define the variable with a test value
//     console.log("Correct answer is:", correctAnswer)
// }
// checkAnswer();

// Game functions

// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("data-type") === "submit") {
        alert("You clicked Submit!");
        console.log("Submit button clicked");
      } else {
        let gameType = this.getAttribute("data-type");
        alert(`You clicked ${gameType}`);
        console.log(`${gameType} button clicked`);
      }
    });
  }
});

/**
 * The main game loop, called when the script is first loaded
 * and after user's response has been processed
 */
function runGame() {
  // Creates random numbers between 1 and 25
  let num1=Math.floor(Math.random()*25)+1;
  let num2=Math.floor(Math.random()*25)+1;
}

function checkAnswer() {}

function calculateCorrectAnswer() {}

function incrementScore() {}

function incrementWrongAnswer() {}

function displayAdditionQuestion() {}

function displaySubtractQuestion() {}

function displayMultiplyQuestion() {}

function displayDivisionQuestion() {}
