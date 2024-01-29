document.addEventListener("DOMContentLoaded", function () {
  Array.from(document.querySelectorAll(".js-click-member")).forEach((item) => {
    item.addEventListener("click", () => {
      togglePopup(0);
    });
  });

  const inputName = document.getElementById("name");
  const inputOrganizationName = document.getElementById("organizationName");
  const inputEmail = document.getElementById("email");
  const inputPhone = document.getElementById("phone");
  const inputMessage = document.getElementById("messege");
  const partnershipType = document.getElementById("partnershipType");
  const submitButton = document.getElementById("submitButton");

  // Add event listener for each input
  [inputName, inputOrganizationName, inputEmail, inputPhone].forEach((input) => {
    input.addEventListener("input", checkInputs);
  });

  // Function to check if mandatory inputs are filled
  function checkInputs() {
    const nameValue = inputName.value.trim();
    const organizationNameValue = inputOrganizationName.value.trim();
    const emailValue = inputEmail.value.trim();
    const phoneValue = inputPhone.value.trim();

    // If mandatory inputs are filled, activate the submit button and change the color to blue
    if (nameValue !== "" && organizationNameValue !== "" && emailValue !== "" && phoneValue !== "") {
      submitButton.style.backgroundColor = "#1D77FF"; // Change the color as needed
      submitButton.disabled = false;
    } else {
      submitButton.style.backgroundColor = ""; // Reset to the original color if there is an empty mandatory input
      submitButton.disabled = true;
    }
  }

  // Add event listener for form submit
  document.querySelector("form").addEventListener("submit", function (e) {
    // Check if mandatory inputs are filled when the form is submitted
    if (!checkForm()) {
      e.preventDefault(); // Stop the submit process
      alert("Please fill in all required fields before submitting!"); // Display an alert
    }
  });

  // Function to check if mandatory inputs are filled when the form is submitted
  function checkForm() {
    const nameValue = inputName.value.trim();
    const organizationNameValue = inputOrganizationName.value.trim();
    const emailValue = inputEmail.value.trim();
    const phoneValue = inputPhone.value.trim();

    const isFormValid = nameValue !== "" && organizationNameValue !== "" && emailValue !== "" && phoneValue !== "";

    if (isFormValid) {
      openPopupTerimaKasih(); // Show the thank you popup if the form is valid
    }

    return isFormValid;
  }

  // Function to open the thank you popup
  function openPopupTerimaKasih() {
    const popupTerimaKasih = document.getElementById("popupTerimaKasih");
    popupTerimaKasih.classList.remove("hidden");
  }

  // Function to close the thank you popup
  function closePopupTerimaKasih() {
    console.log("Closing the thank you popup");
    const popupTerimaKasih = document.getElementById("popupTerimaKasih");
    popupTerimaKasih.classList.add("hidden");
  }
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
