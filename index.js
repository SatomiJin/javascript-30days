const timeNodes = Array.from(document.querySelectorAll(`[data-time]`));
const seconds = timeNodes
  .map((node) => node.dataset.time)
  .map((timeCode) => {
    let [mins, secs] = timeCode.split(":").map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;
let hours = Math.floor(secondsLeft / 3600);
let mins = Math.floor(secondsLeft / 60) - hours * 60;
// secondsLeft = secondsLeft % 3600;
console.log(hours, mins);
