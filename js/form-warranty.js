function checkInputs() {
  var fullName = document.getElementById("fullname").value;
  var institution = document.getElementById("Institution").value;
  var email = document.getElementById("Email").value;
  var whatsapp = document.getElementById("Whatsapp").value;
  var serial = document.getElementById("Serial").value;

  var allInputsFilled = fullName !== "" && institution !== "" && email !== "" && whatsapp !== "" && serial !== "";

  if (allInputsFilled) {
    document.getElementById("submitButton").classList.add("warranty__box");
    document.getElementById("submitButton").classList.remove("bg-makeblock-gray");
  } else {
    document.getElementById("submitButton").classList.remove("warranty__box");
    document.getElementById("submitButton").classList.add("bg-makeblock-gray");
  }
}

// Menambahkan event listener untuk setiap input
document.getElementById("fullname").addEventListener("input", checkInputs);
document.getElementById("Institution").addEventListener("input", checkInputs);
document.getElementById("Email").addEventListener("input", checkInputs);
document.getElementById("Whatsapp").addEventListener("input", checkInputs);
document.getElementById("Serial").addEventListener("input", checkInputs);
