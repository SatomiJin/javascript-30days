function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const slideImages = document.querySelectorAll(`.slide-in`);

function checkSlides(e) {
  slideImages.forEach((slideImage) => {
    // Tính toán vị trí cuộn cần thiết để hình ảnh xuất hiện một nửa trên màn hình
    const slideInAt = window.scrollY + window.innerHeight - slideImage.height / 2;
    // Tính toán vị trí của đáy hình ảnh
    const imageBottom = slideImage.offsetTop + slideImage.height;
    // Kiểm tra xem hình ảnh đã hiển thị được một nửa trên màn hình chưa
    const isHalfShown = slideInAt > slideImage.offsetTop;
    // Kiểm tra xem hình ảnh chưa cuộn qua khỏi màn hình
    const isNotScrolledPast = window.scrollY < imageBottom;

    // Nếu hình ảnh đã hiển thị một nửa và chưa cuộn qua khỏi màn hình
    if (isHalfShown && isNotScrolledPast) {
      // Thêm lớp "active" vào hình ảnh
      slideImage.classList.add("active");
    } else {
      // Loại bỏ lớp "active" khỏi hình ảnh
      slideImage.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlides));
// window.addEventListener("scroll", checkSlides);
