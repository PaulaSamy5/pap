function myfunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
// Check if dark mode preference is stored in local storage
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

// Apply dark mode on page load
if (isDarkMode) {
    enableDarkMode();
}

// Function to toggle dark mode
function toggleDarkMode() {
    if (isDarkMode) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

// Function to enable dark mode
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
}

// Function to disable dark mode
function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', null);
}