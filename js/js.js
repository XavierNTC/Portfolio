let isDarkMode = true;

function applyDarkMode() {
    if (isDarkMode) {
        document.body.style.backgroundColor = "#000000";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "#000000";
    }
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    applyDarkMode();
}

