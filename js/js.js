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

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.cabecalho__menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});
