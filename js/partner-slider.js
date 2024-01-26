document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("imageSlider");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;

  function showImage(index) {
    const images = slider.children;
    const screenWidth = window.innerWidth;

    // Menentukan jumlah foto yang akan ditampilkan berdasarkan lebar layar
    const numVisibleImages = screenWidth >= 640 ? 3 : 1;

    for (let i = 0; i < images.length; i++) {
      const adjustedIndex = (index + i) % images.length;
      if (i >= 0 && i < numVisibleImages) {
        images[adjustedIndex].classList.remove("hidden");
      } else {
        images[adjustedIndex].classList.add("hidden");
      }
    }
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
    showImage(currentIndex);
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % slider.children.length;
    showImage(currentIndex);
  }

  prevBtn.addEventListener("click", prevImage);
  nextBtn.addEventListener("click", nextImage);

  // Show the initial images
  showImage(currentIndex);
});
