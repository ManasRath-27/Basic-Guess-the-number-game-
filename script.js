// generate a number between 1 to 100
const min = 1;
const max = 100;
const randomNum = Math.floor(Math.random() * (max - min) + min);
//console.log(randomNum);

let userAnswer;

// function for game logic
function gameLogic(answer, number) {
  if (answer === number) {
    alert("Yeah! You guessed the correct number. 🎉");
  } else if (answer < number) {
    alert("Sorry! Your guessed number is lower.😒");
  } else if (answer > number) {
    alert("Sorry! Your guessed number is higher.😱");
  }
}

while (userAnswer !== randomNum) {
  userAnswer = Number(prompt("Guess a number between 1 t0 100."));
  gameLogic(userAnswer, randomNum);
}
