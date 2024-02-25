$(document).ready(function () {
  var slides = $(".slider img");
  var dotsContainer = $(".dots-container");
  var currentSlide = 0;

  // Create dots
  slides.each(function (index) {
    dotsContainer.append('<div class="dot" data-slide="' + index + '"></div>');
  });

  var dots = $(".dot");

  // Show initial slide and dot
  showSlide(currentSlide);

  // Auto play
  var autoplayInterval = setInterval(function () {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 3000);

  // Click event for dots
  dots.click(function () {
    currentSlide = $(this).data("slide");
    showSlide(currentSlide);
    clearInterval(autoplayInterval);
  });

  // Function to show slide
  function showSlide(slideIndex) {
    slides.hide().slice(0, 3).show(); // Show only the first three slides
    dots.removeClass("active").eq(slideIndex).addClass("active");
  }
});
