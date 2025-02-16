document.addEventListener("DOMContentLoaded", function() {
    // For iPhone Repair Button
    const iphoneButton = document.getElementById("iphone-submit");
    iphoneButton.addEventListener("click", function() {
        const device = document.getElementById("phone-model").value; // Get iPhone model
        const issue = document.getElementById("iphone-issue").value; // Get issue for iPhone
        
        // Construct the URL with query parameters for device and issue
        const quoteUrl = `quote.html?device=${encodeURIComponent(device)}&issue=${encodeURIComponent(issue)}`;
        
        // Redirect to the quote page with query parameters
        window.location.href = quoteUrl;
    });

    // For Android Repair Button
    const androidButton = document.getElementById("android-submit");
    androidButton.addEventListener("click", function() {
        const device = document.getElementById("android-model").value; // Get Android model
        const issue = document.getElementById("android-issue").value; // Get issue for Android
        
        // Construct the URL with query parameters for device and issue
        const quoteUrl = `quote.html?device=${encodeURIComponent(device)}&issue=${encodeURIComponent(issue)}`;
        
        // Redirect to the quote page with query parameters
        window.location.href = quoteUrl;
    });
});

// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the URL parameters (device and issue)
    const urlParams = new URLSearchParams(window.location.search);

    const device = urlParams.get("device");  // Get the device from the URL
    const issue = urlParams.get("issue");    // Get the issue from the URL

    // If both device and issue are available, populate the form fields
    if (device && issue) {
        document.getElementById("device").value = device;  // Set the device field
        document.getElementById("issue").value = issue;    // Set the issue field
    } else {
        alert("No device or issue information found. Please go back to the services page.");
    }
});
