// let pressed = ["w", "e", "s", "b", "o", "s", "a", "b", "c", "d"];
let pressed = [];
let secretCode = "satomi";
window.addEventListener("keyup", (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join("").includes(secretCode)) {
    alert("Congratulation!!!");
    cornify_add();
  }
});
