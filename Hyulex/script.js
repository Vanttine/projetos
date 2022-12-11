const barra = document.querySelector(".barra");
const navMenu = document.querySelector(".navmenu");

barra.addEventListener("click", () => {
    barra.classList.toggle('active');
    navMenu.classList.toggle('active');
})
