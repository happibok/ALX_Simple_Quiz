function checkAnswer() {
    let correctAnswer = "4";

    let selectedOption = document.querySelector('input[name="quiz"]:checked');

    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer!";
        document.getElementById("feedback").style.color = "red";
        return;
    }

    let userAnswer = selectedOption.value;

    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
        document.getElementById("feedback").style.color = "green";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        document.getElementById("feedback").style.color = "red";
    }
}
document.getElementById("submit-answer").addEventListener("click", checkAnswer);