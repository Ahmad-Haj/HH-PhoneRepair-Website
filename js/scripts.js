document.addEventListener("DOMContentLoaded", function() {
    // Get the submit button for the form
    const submitButton = document.getElementById("submit-button");

    // When the user clicks the button, store the selected device and issue in sessionStorage
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();  // Prevent default form submission behavior

        // Capture the device and issue values
        const device = document.getElementById("device").value;
        const issue = document.getElementById("issue").value;

        // Store the values in sessionStorage
        sessionStorage.setItem("device", device);
        sessionStorage.setItem("issue", issue);

        // Redirect to the quote page
        window.location.href = "quote.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the stored device and issue values from sessionStorage
    const device = sessionStorage.getItem("device");
    const issue = sessionStorage.getItem("issue");

    // If the data exists, populate the form fields with the values
    if (device && issue) {
        document.getElementById("device").value = device;  // Populate the device model field
        document.getElementById("issue").value = issue;    // Populate the issue description field
    } else {
        // If no data is found, show an alert or handle the missing data scenario
        alert("No data found. Please go back to the services page.");
    }
});

