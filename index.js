const checkboxes = document.querySelectorAll(`.inbox input[type="checkbox"]`);
let lastChecked;
let inBetween = false;
const handleCheck = (e) => {
  // check if they had shift key down
  //   AND check that they are checking it

  if (e.shiftKey && e.target.checked) {
    // go ahead and do that we please
    checkboxes.forEach((checkbox) => {
      if (checkbox === e.target || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = e.target;
};
const checkAndToggleClass = () => {
  checkboxes.forEach((checkbox) => {
    const pTag = checkbox.nextElementSibling; // Giả sử thẻ <p> nằm ngay sau thẻ <input>
    if (checkbox.checked) {
      if (pTag && pTag.tagName === "P") {
        pTag.classList.add("active");
      }
    } else {
      if (pTag && pTag.tagName === "P") {
        pTag.classList.remove("active");
      }
    }
  });
};
checkboxes.forEach((checkbox) => checkbox.addEventListener(`click`, handleCheck));
checkboxes.forEach((checkbox) => checkbox.addEventListener(`click`, checkAndToggleClass));
