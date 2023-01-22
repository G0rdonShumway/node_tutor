var timer = document.getElementById("timer");
var timeRemaining = document.getElementById("time-remaining");

// Set the starting time (in milliseconds)
// var time = 60000;
// var initialTime = 60000;

// Update the timer every 10 milliseconds
const startTimer = (time) => {

  var initialTime = time;

  setInterval(() => {
    if (time <= 0) {
      // clearInterval(intervalId);
      timeRemaining.innerHTML = "Time's up!";
      return;
    }
    time -= 10;
    // Update the width of the timer based on the remaining time
    timer.style.width = (time / 60000) * 100 + "%";

    // Update the color of the timer based on the remaining time
    if (time < initialTime * 0.65) {
      timer.style.backgroundColor = "#f5b64d";
    }
    if (time < initialTime * 0.35) {
      timer.style.backgroundColor = "#f26156";
    }
    // Update the time remaining display
    var minutes = Math.floor(time / 60000)
      .toString()
      .padStart(2, "0");
    var seconds = Math.floor((time % 60000) / 1000)
      .toString()
      .padStart(2, "0");
    var milliseconds = ((time % 1000) / 10).toString().padStart(2, "0");
    timeRemaining.innerHTML = `${minutes}:${seconds}.${milliseconds}`;
  }, 10);
};
