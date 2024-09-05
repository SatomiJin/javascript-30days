const msg = new SpeechSynthesisUtterance();
let voices = [];
const voiceDropdown = document.querySelector(`[name=voice]`);
const options = document.querySelectorAll(`[type=range],[name="text"]`);
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");
msg.text = document.querySelector(`[name="text"]`).value;

const populateVoices = (e) => {
  voices = e.target.getVoices();
  voiceDropdown.innerHTML = voices
    .map((voice) => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join("");
};

const setVoice = (e) => {
  msg.voice = voices.find((voice) => voice.name === e.target.value);
};

const toggle = (stackOver = true) => {
  speechSynthesis.cancel();
  if (stackOver) {
    speechSynthesis.speak(msg);
  }
};
const setOption = (e) => {
  msg[e.target.name] = e.target.value;
};
const stopVoice = () => {
  speechSynthesis.cancel();
};
speechSynthesis.addEventListener("voiceschanged", populateVoices);
voiceDropdown.addEventListener("change", setVoice);
options.forEach((item) => item.addEventListener("change", setOption));
speakButton.addEventListener("click", toggle);

stopButton.addEventListener("click", stopVoice);
