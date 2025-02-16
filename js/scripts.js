document.addEventListener("DOMContentLoaded", function() {
    // Get the submit button for the quote request
    const submitButton = document.getElementById("submit-button");

    // Event listener for the button click
    submitButton.addEventListener("click", function() {
        // Get the selected device and issue values
        const device = document.getElementById("device").value;
        const issue = document.getElementById("issue").value;

        // Construct the URL with query parameters for device and issue
        const quoteUrl = `quote.html?device=${encodeURIComponent(device)}&issue=${encodeURIComponent(issue)}`;

        // Redirect to quote.html with the selected values in the URL
        window.location.href = quoteUrl;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the URL parameters (device and issue)
    const urlParams = new URLSearchParams(window.location.search);

    const device = urlParams.get("device");  // Get the device from the URL
    const issue = urlParams.get("issue");    // Get the issue from the URL

    // If both device and issue are available, populate the form fields
    if (device && issue) {
        document.getElementById("device").value = device;  // Set the device model field
        document.getElementById("issue").value = issue;    // Set the issue description field
    } else {
        alert("No device or issue information found. Please go back to the services page.");
    }
});