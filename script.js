const timerElement = document.getElementById("timer");
const addMinuteButton = document.getElementById("addMinute");
const subtractMinuteButton = document.getElementById("subtractMinute");
const addSecondButton = document.getElementById("addSecond");
const subtractSecondButton = document.getElementById("subtractSecond");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const addGoalButtonA = document.getElementById("addGoalA");
const subtractGoalButtonA = document.getElementById("subtractGoalA");
const addGoalButtonB = document.getElementById("addGoalB");
const subtractGoalButtonB = document.getElementById("subtractGoalB");
const goalCountElementA = document.getElementById("goalCountA");
const goalCountElementB = document.getElementById("goalCountB");

let timer;
let time = 0;
let goalCountA = 0;
let goalCountB = 0;

function startTimer() {
  timer = setInterval(updateTimer, 1000);
  startButton.disabled = true;
  pauseButton.disabled = false;
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
  startButton.disabled = false;
  pauseButton.textContent = "Продолжить";
}

function updateTimer() {
  time++;
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedTime =
    ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
  timerElement.textContent = formattedTime;

  if (time >= 7200) {
    pauseTimer();
  }
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  time = 0;
  timerElement.textContent = "00:00";
  startButton.disabled = false;
  pauseButton.disabled = true;
}

function addMinute() {
  time += 60;
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedTime =
    ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
  timerElement.textContent = formattedTime;
}

function subtractMinute() {
  if (time >= 60) {
    time -= 60;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formattedTime =
      ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
    timerElement.textContent = formattedTime;
  }
}

function addSecond() {
  time += 1;
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedTime =
    ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
  timerElement.textContent = formattedTime;
}

function subtractSecond() {
  if (time > 0) {
    time -= 1;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formattedTime =
      ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
    timerElement.textContent = formattedTime;
  }
}

function addGoalA() {
  goalCountA++;
  goalCountElementA.textContent = goalCountA;
}

function subtractGoalA() {
  if (goalCountA > 0) {
    goalCountA--;
    goalCountElementA.textContent = goalCountA;
  }
}

function addGoalB() {
  goalCountB++;
  goalCountElementB.textContent = goalCountB;
}

function subtractGoalB() {
  if (goalCountB > 0) {
    goalCountB--;
    goalCountElementB.textContent = goalCountB;
  }
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", function () {
  if (timer) {
    pauseTimer();
  } else {
    startTimer();
  }
});
resetButton.addEventListener("click", resetTimer);
addMinuteButton.addEventListener("click", addMinute);
subtractMinuteButton.addEventListener("click", subtractMinute);
addSecondButton.addEventListener("click", addSecond);
subtractSecondButton.addEventListener("click", subtractSecond);
addGoalButtonA.addEventListener("click", addGoalA);
subtractGoalButtonA.addEventListener("click", subtractGoalA);
addGoalButtonB.addEventListener("click", addGoalB);
subtractGoalButtonB.addEventListener("click", subtractGoalB);
