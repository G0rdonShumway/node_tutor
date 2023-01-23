var timer = document.getElementById("timer");
var timerContainer = document.getElementById("timer-container");
var timeRemaining = document.getElementById("time-remaining");
var elapsedTime = 0
var timeLeft

// Update the timer every 10 milliseconds
const startTimer = (timeGiven) => {

  var initialTime = timeGiven;
  let startTime = new Date();

  // const timerInterval = setInterval(() => {
  setInterval(() => {
    // Calculate the elapsed time
    elapsedTime = new Date() - startTime;
    // timePassed += 10
    timeLeft = initialTime - elapsedTime;

    if (timeLeft <= 0) {
      timeRemaining.innerHTML = "Time's up!";
      // clearInterval(timerInterval)
      onTimeUp()
      return;
    }

    // Update the width of the timer based on the remaining time
    timer.style.width = (timeLeft / 60000) * 100 + "%";

    // Update the color of the timer based on the remaining time
    if (timeLeft < initialTime * 0.65) {
      timer.style.backgroundColor = "#f5b64d";
    }
    if (timeLeft < initialTime * 0.35) {
      timer.style.backgroundColor = "#f26156";
    }
    // Update the time remaining display
    timeRemaining.innerHTML = formatTime(timeLeft);

    console.log(formatTime(timeLeft), formatTime(elapsedTime));
  }, 10);
};

const formatTime = (time) => {
  var minutes = Math.floor(time / 60000).toString().padStart(2, "0");
  var seconds = Math.floor((time % 60000) / 1000).toString().padStart(2, "0");
  var milliseconds = ((time % 1000) / 10).toString().padStart(2, "0").slice(0, 2);

  return `${minutes}:${seconds}.${milliseconds}`
}

const onTimeUp = () => {
  timeRemaining.classList.add('timeup-splash')
  // window.location.href = '/'
}