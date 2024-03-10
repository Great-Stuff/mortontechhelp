const hidden_on_mobile = Array.from(document.querySelectorAll(".hidden-on-mobile"))
const menu_bars = Array.from(document.querySelectorAll(".menu-bar"))
function toggleMenu(){
    hidden_on_mobile.forEach((element) => element.classList.toggle("change"))
    menu_bars.forEach((element) => element.classList.toggle("change"))
}