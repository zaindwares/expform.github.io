const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 900) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

function openPdf() {
  // Replace 'myresume.pdf' with the actual name of your PDF file
  var pdfUrl = './css/assets/myresume.pdf';
  // Open the PDF file in a new tab/window
  window.open(pdfUrl, '_blank');
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

// Add the new LinkedIn link functionality here
const linkedinLink = document.getElementById("linkedin-link");

linkedinLink.addEventListener("click", function(event) {
  const isConfirmed = confirm("Are you sure you want to visit LinkedIn?");
  
  if (isConfirmed) {
    const linkedinUrl = "https://www.linkedin.com/in/olivergarciajr/";
    window.open(linkedinUrl, "_blank");
    event.preventDefault();
  }
});

// Add functionality for Facebook icon
const facebookLink = document.getElementById("facebook-link");

facebookLink.addEventListener("click", function(event) {
  const isConfirmed = confirm("Are you sure you want to visit Facebook?");
  
  if (isConfirmed) {
    const facebookUrl = "https://www.facebook.com/odyigarcia";
    window.open(facebookUrl, "_blank");
    event.preventDefault();
  }
});

// Get the phone icon element
const phoneIcon = document.getElementById("phone-icon");

// Add click event listener
phoneIcon.addEventListener("click", function(event) {
    // Copy phone number to clipboard
    const phoneNumber = "09166653291"; // Replace with your phone number
    navigator.clipboard.writeText(phoneNumber);

    // Show alert
    alert("Phone number copied to clipboard!");
});
