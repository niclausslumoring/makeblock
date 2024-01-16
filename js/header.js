function toggleBurgerPopup() {
  // Sembunyikan burger button
  var burgerButton = document.getElementById("burgerButton");
  burgerButton.classList.add("hidden");

  // Tampilkan button close
  var closeButton = document.querySelector(".burger-menu-close");
  closeButton.classList.remove("hidden");

  // Tampilkan popup burger menu
  var popup = document.getElementById("popupBurger");
  popup.classList.remove("hidden");
  popup.style.backgroundColor = "rgba(0,0,0,0.3)";
}

function closeBurgerPopup() {
  // Sembunyikan button close
  var closeButton = document.querySelector(".burger-menu-close");
  closeButton.classList.add("hidden");

  // Tampilkan burger button kembali
  var burgerButton = document.getElementById("burgerButton");
  burgerButton.classList.remove("hidden");

  // Sembunyikan popup burger menu
  var popup = document.getElementById("popupBurger");
  popup.classList.add("hidden");
}
