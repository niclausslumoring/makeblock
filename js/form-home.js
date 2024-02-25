function checkInputs() {
  var fullName = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  if (fullName !== "" && email !== "" && phone !== "") {
    document.getElementById("submitButton").classList.add("warranty__box");
    document.getElementById("submitButton").classList.remove("bg-makeblock-gray");
  } else {
    document.getElementById("submitButton").classList.remove("warranty__box");
    document.getElementById("submitButton").classList.add("bg-makeblock-gray");
  }
}

// Menambahkan event listener untuk setiap input
document.getElementById("fname").addEventListener("input", checkInputs);
document.getElementById("email").addEventListener("input", checkInputs);
document.getElementById("phone").addEventListener("input", checkInputs);
