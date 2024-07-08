const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let startTime = 0;
let elapsedTime = 0;
let intervalId;

startBtn.addEventListener('click', startStopwatch);
stopBtn.addEventListener('click', pauseStopwatch);
resetBtn.addEventListener('click', resetStopwatch);

function startStopwatch() {
  startTime = Date.now() - elapsedTime;
  intervalId = setInterval(updateTime, 10);
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;
}

function pauseStopwatch() {
  elapsedTime = Date.now() - startTime;
  clearInterval(intervalId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function resetStopwatch() {
  startTime = 0;
  elapsedTime = 0;
  clearInterval(intervalId);
  display.textContent = '00:00:00.000';
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;
}

function updateTime() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let ms = elapsedTime % 1000;
  ms = ms.toString().padStart(3, '0');
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  seconds = seconds.toString().padStart(2, '0');
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  minutes = minutes.toString().padStart(2, '0');
  let hours = Math.floor((elapsedTime / (1000 * 60 * 60)));

  display.textContent = `${hours}:${minutes}:${seconds}.${ms}`;
}