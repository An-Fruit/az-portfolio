//some basic JS to toggle the menu open/closed
function toggleMenu() {
    const menu = document.querySelector(".menu_links")
    const icon = document.querySelector(".hamburger_icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}