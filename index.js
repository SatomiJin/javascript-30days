const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

const items = document.querySelectorAll(".item");

items.forEach((item, index) => {
  if (index % 2 === 0) {
    item.style.transform = `rotateY(-2deg)`; // Nghiêng phần tử chẵn sang trái
  } else {
    item.style.transform = `rotateY(2deg)`; // Nghiêng phần tử lẻ sang phải
  }
  item.style.backgroundColor = `hsl(${index * 20}, 80%, 70%)`;
});

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  console.log(slider.scrollLeft);
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});
