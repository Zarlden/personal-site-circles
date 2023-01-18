let lightTheme = true;

function themeToggle() {

    let root = document.querySelector('html')
    root.setAttribute('data-theme', lightTheme ? 'light' : 'dark')
    lightTheme = !lightTheme
} 

document.addEventListener('DOMContentLoaded', () => {
    let darkModeToggle = document.querySelector('#theme-toggle-button')
    darkModeToggle.onclick = themeToggle
})

