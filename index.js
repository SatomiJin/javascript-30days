const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight);

const highlightLink = (e) => {
  const linkCoords = e.target.getBoundingClientRect();
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top - window.scrollY,
    left: linkCoords.left - window.scrollX,
  };
  highlight.style.width = `${coords.width + 20}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.opacity = 1;

  highlight.style.transform = `translate(${coords.left - 10}px,${coords.top}px)`;
};

const hiddenLight = () => {
  highlight.style.opacity = 0;
};
triggers.forEach((a) => a.addEventListener("mouseenter", highlightLink));
// triggers.forEach((a) => a.addEventListener("mouseleave", hiddenLight));
