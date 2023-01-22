const menuSize = 120;
const greetingList = ['Hi', 'Salutations', '⍑ᒷꖎꖎ𝙹']
let index = 0
localStorage.setItem("lightTheme", true);
localStorage.setItem("visible", true);

function themeToggle() {
    let localTheme = localStorage.getItem("lightTheme") == 'true';
    let root = document.querySelector('html');
    localTheme = !localTheme
    localStorage.setItem("lightTheme", localTheme)
    root.setAttribute('data-theme', localTheme ? 'light' : 'dark')
} 

function removeNav() {
    let fakeNav = document.querySelectorAll('#fake-nav *')
    fakeNav.forEach(x => x.style.display = 'none')
    let message = document.createElement('h2')
    let fakeNavBox = document.querySelector('#fake-nav')
    message.innerHTML =  'Looks like our navbar is broken :( Try the double click override';
    fakeNavBox.appendChild(message)
}

function changeText(element, newText) {
    element.innerHTML = newText
}

document.addEventListener('DOMContentLoaded', () => {

    let lightTheme = localStorage.getItem("lightTheme") == 'true';
    if (!lightTheme) {
        themeToggle()
    }
    let darkModeToggle = document.querySelector('#theme-toggle-button')
    darkModeToggle.onclick = themeToggle

    let navInstructions = document.querySelectorAll('.nav-usage')
    navInstructions.forEach(x => x.onclick = removeNav)

    let toggleNav = document.querySelector('.menu')
    toggleNav.onclick = () => {
        toggleNav.style.display = 'none'
    }

    let greeting = document.querySelector('h1');

    setInterval(() => {
        index++
        index %= 3
        changeText(greeting, greetingList[index])
    }, 2500)
})


// Radial menu
document.addEventListener('dblclick', (event) => {
    let menu = document.querySelector('.menu')
    menu.style.display = 'flex';
    menu.style.left = `${event.clientX - menuSize / 2}px`;
    menu.style.top = `${event.clientY - menuSize / 2}px`;
})

