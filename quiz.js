const correctAnswer = "8";

function checkAnswer(selectedAnswer) {
  const resultDiv = document.getElementById("result");

  if (selectedAnswer === correctAnswer) {
    resultDiv.textContent = "Correct!";
    resultDiv.style.color = "green";
  } else {
    resultDiv.textContent = "Wrong. Try again!";
    resultDiv.style.color = "red";
  }
}
