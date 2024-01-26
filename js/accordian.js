const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((accordionHeader) => {
  accordionHeader.addEventListener("click", () => {
    const line = accordionHeader.querySelector(".line");
    const accordionBody = accordionHeader.nextElementSibling;
    const icon = accordionHeader.querySelector("svg");

    // Toggle active class for the clicked header
    accordionHeader.classList.toggle("active");
    icon.classList.toggle("rotate"); // Tambahkan atau hilangkan kelas rotate

    if (accordionHeader.classList.contains("active")) {
      // Hide the line and expand the accordion body
      // line.classList.add("hidden");
      accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
    } else {
      // Show the line and collapse the accordion body
      line.classList.remove("hidden");
      accordionBody.style.maxHeight = 0;
    }

    // Loop through other headers to deactivate them
    accordionHeaders.forEach((otherAccordionHeader) => {
      if (otherAccordionHeader !== accordionHeader) {
        const otherLine = otherAccordionHeader.querySelector(".line");
        const otherAccordionBody = otherAccordionHeader.nextElementSibling;
        const otherIcon = otherAccordionHeader.querySelector("svg");

        // Deactivate other headers
        otherAccordionHeader.classList.remove("active");
        otherLine.classList.remove("hidden");
        otherAccordionBody.style.maxHeight = 0;
        otherIcon.classList.remove("rotate"); // Hilangkan kelas rotate pada ikon lainnya
      }
    });
  });
});
