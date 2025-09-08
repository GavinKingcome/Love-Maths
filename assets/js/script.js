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
        runGame(gameType);
      }
    });
  }
  runGame("addition");
});

/**
 * The main game loop, called when the script is first loaded
 * and after user's response has been processed
 */
function runGame(gameType) {
  // Creates random numbers between 1 and 25
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;

  if (gameType === "addition") {
    displayAdditionQuestion(num1, num2);
  } else {
    alert(`unknown game type: ${gameType}`);
    throw `unknown gameType: ${gameType}.Aborting!`;
  }
}

function checkAnswer() {}

function calculateCorrectAnswer() {}

function incrementScore() {}

function incrementWrongAnswer() {}

function displayAdditionQuestion(operand1, operand2) {
  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion() {}

function displayMultiplyQuestion() {}

function displayDivisionQuestion() {}
