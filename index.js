let clock = document.querySelector(".clock_container");
let value = clock.querySelector(".clock_value");
let endTime = document.querySelector(".clock_end-time");
let buttons = document.querySelectorAll(`[data-time]`);

let countDown;
const timer = (seconds) => {
  //clear any existing timers
  clearInterval(countDown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayEndTime(then);
  displayTimeLeft(seconds);

  countDown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    // check value and stop it
    if (secondsLeft < 0) {
      alert("END TIME!!!");
      clearInterval(countDown);
      return;
    }

    //   display it on UI
    displayTimeLeft(secondsLeft);
  }, 1000);
};

const displayTimeLeft = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const remainderHour = Math.floor(seconds % 3600);
  const minutes = Math.floor(remainderHour / 60);
  const remainderSeconds = seconds % 60;
  const display = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
  document.title = display;
  value.textContent = display;
};

const displayEndTime = (timestamp) => {
  let end = new Date(timestamp);
  const hours = end.getHours();
  const minutes = end.getMinutes();
  const seconds = end.getSeconds();
  endTime.textContent = `End at: ${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
};

const startTimer = (e) => {
  const time = parseInt(e.target.dataset.time);
  timer(time);
};

buttons.forEach((button) => button.addEventListener("click", startTimer));

document.timeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let mins = e.target.minutes.value * 60;
  timer(mins);
  e.target.minutes.value = "";
});
