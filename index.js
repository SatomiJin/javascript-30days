// Get our element
const player = document.querySelector(`.player`);
const video = player.querySelector(`.viewer`);
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(`.progress__filled`);

const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll(`[data-skip]`);
const ranges = player.querySelectorAll(`.player__slider`);
// Build out function
const togglePlay = () => {
  const method = video.paused ? "play" : "pause";
  video[method]();
};

const updateButton = (e) => {
  const icon = e.target.paused ? "fa-play" : "fa-pause";
  let iTag = toggle.querySelector("i");
  if (e.target.paused) {
    iTag.classList = "";
    iTag.classList.add("fa-solid", "fa-play");
  } else {
    iTag.classList = "";
    iTag.classList.add("fa-solid", "fa-pause");
  }
};

const skipVid = (e) => {
  video.currentTime += parseFloat(e.target.dataset.skip);
};

const handleRangeUpdate = (e) => {
  video[e.target.name] = e.target.value;
};

const handleUpdateProgress = (e) => {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
};

const handleScrub = (e) => {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
};
// Hook up the event listeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleUpdateProgress);

toggle.addEventListener("click", togglePlay);

skipButtons.forEach((button) => button.addEventListener("click", skipVid));
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) => range.addEventListener("mousemove", handleRangeUpdate));

let mouseDown = false;
progress.addEventListener("click", handleScrub);
progress.addEventListener("mousemove", (e) => mouseDown && handleScrub(e));
progress.addEventListener("mousedown", () => (mouseDown = true));
progress.addEventListener("mouseup", () => (mouseDown = false));
