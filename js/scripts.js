document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to HH Phone Repairs!");
});
// Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const device = urlParams.get('device');
const issue = urlParams.get('issue');

// Now use these parameters to populate the form or display them
document.getElementById('deviceModel').innerText = device; // e.g., display device type
document.getElementById('issueDescription').innerText = issue; // e.g., display the issue
