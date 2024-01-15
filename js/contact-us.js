Array.from(document.querySelectorAll(".js-click-member")).forEach((item) => {
  item.addEventListener("click", () => {
    togglePopup(1);
  });
});

function togglePopup(index) {
  var popup = document.querySelectorAll("#popup");
  popup[index].classList.toggle("hidden");
  popup[index].style.backgroundColor = "rgba(0,0,0,0.3)";
}
function closePopup(index) {
  var popup = document.querySelectorAll("#popup");
  popup[index].classList.add("hidden");
}

const inputNama = document.getElementById("fname");
const inputEmail = document.getElementById("email");
const inputPhone = document.getElementById("phone");
const inputMessage = document.getElementById("message");
const submitButton = document.getElementById("submitButton");

// Tambahkan event listener untuk setiap input
[inputNama, inputEmail, inputPhone, inputMessage].forEach((input) => {
  input.addEventListener("input", checkInputs);
});

// Fungsi untuk memeriksa apakah semua input sudah diisi
function checkInputs() {
  const namaValue = inputNama.value.trim();
  const emailValue = inputEmail.value.trim();
  const phoneValue = inputPhone.value.trim();
  const messageValue = inputMessage.value.trim();

  // Jika semua input telah diisi, aktifkan tombol submit dan ubah warna menjadi biru
  if (namaValue !== "" && emailValue !== "" && phoneValue !== "" && messageValue !== "") {
    submitButton.style.backgroundColor = "#3E5580"; // Ganti warna biru sesuai kebutuhan
    submitButton.disabled = false;
  } else {
    submitButton.style.backgroundColor = ""; // Kembalikan ke warna semula jika ada input yang kosong
    submitButton.disabled = true;
  }
}

// Tambahkan event listener untuk form submit
document.querySelector("form").addEventListener("submit", function (e) {
  // Cek apakah semua input sudah diisi saat form disubmit
  if (!checkForm()) {
    e.preventDefault(); // Hentikan proses submit
    alert("Harap isi semua field sebelum submit!"); // Tampilkan alert
  }
});

// Fungsi untuk memeriksa apakah semua input sudah diisi saat form disubmit
function checkForm() {
  const namaValue = inputNama.value.trim();
  const emailValue = inputEmail.value.trim();
  const phoneValue = inputPhone.value.trim();
  const messageValue = inputMessage.value.trim();

  const isFormValid = namaValue !== "" && emailValue !== "" && phoneValue !== "" && messageValue !== "";

  if (isFormValid) {
    openPopupTerimaKasih(); // Munculkan popup terima kasih jika formulir valid
  }

  return isFormValid;
}

// Fungsi untuk membuka popup terima kasih
function openPopupTerimaKasih() {
  const popupTerimaKasih = document.getElementById("popupTerimaKasih");
  popupTerimaKasih.classList.remove("hidden");
}

// Fungsi untuk menutup popup terima kasih
function closePopupTerimaKasih() {
  console.log("Menutup popup terima kasih");
  const popupTerimaKasih = document.getElementById("popupTerimaKasih");
  popupTerimaKasih.classList.add("hidden");
}
