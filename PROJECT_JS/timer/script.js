const countDown = document.getElementById("countdown");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const inputHours = document.getElementById("inputHours");
const inputMinutes = document.getElementById("inputMinutes");
const inputSeconds = document.getElementById("inputSeconds");
const startButton = document.getElementById("startButton");

let countdownInterval;

function startTimer() {
  let hours = parseInt(inputHours.value) || 0;
  let minutes = parseInt(inputMinutes.value) || 0;
  let seconds = parseInt(inputSeconds.value) || 0;

  let totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;

  if (totalTimeInSeconds <= 0) {
    alert("Angka anda tidak valid!");
    return;
  }

  inputHours.value = "";
  inputMinutes.value = "";
  inputSeconds.value = "";

  countdownInterval = setInterval(() => {
    const days = Math.floor(totalTimeInSeconds / 86400);
    const hours = Math.floor((totalTimeInSeconds % 86400) / 3600);
    const minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
    const seconds = Math.floor(totalTimeInSeconds % 60);

    daysElement.innerHTML = days.toString().padStart(2, "0");
    hoursElement.innerHTML = hours.toString().padStart(2, "0");
    minutesElement.innerHTML = minutes.toString().padStart(2, "0");
    secondsElement.innerHTML = seconds.toString().padStart(2, "0");

    totalTimeInSeconds = totalTimeInSeconds - 1;
    // CLEAR INPUT PADA SAAT DISTART

    if (totalTimeInSeconds < 0) {
      clearInterval(countdownInterval);
      alert("time is up");
    }
  }, 1000);
}
startButton.addEventListener("click", () => {
  clearInterval(countdownInterval);
  startTimer();
});
