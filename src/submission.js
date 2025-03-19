document.getElementById("toLogin").addEventListener("click", () => {
    window.location.href = "login.php";
});


document.addEventListener('DOMContentLoaded', function () {
  const submitButton = document.getElementById('submitButton');
  const autoCloseDialog = document.getElementById('autoCloseDialog');

  // Function to show the dialog and automatically close it after 3 seconds
  function showAutoCloseDialog() {
    // Show the dialog
    autoCloseDialog.show();

    // Automatically close the dialog after 3 seconds
    setTimeout(() => {
      autoCloseDialog.close();
    }, 5000); // 3000 milliseconds = 3 seconds
  }

  // Add event listener to the submit button
  submitButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the form from submitting (for demonstration purposes)

    // Validate the form (optional)
    const form = document.getElementById('studentForm');
    if (form.checkValidity()) {
      // If the form is valid, show the dialog
      showAutoCloseDialog();
    } else {
      // If the form is invalid, show an error message or handle it as needed
      alert('Please fill out all required fields.');
    }
  });
});