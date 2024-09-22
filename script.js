const navBtn = document.getElementById("nav-btn");
const navLinks = document.getElementById("nav-links");
let isNavOpen = false;

navBtn.addEventListener("click", () => {
    isNavOpen = !isNavOpen;
    navLinks.style.display = isNavOpen ? "flex" : "none"; 
    navBtn.classList.toggle("ri-menu-line", !isNavOpen);
    navBtn.classList.toggle("ri-close-line", isNavOpen);
})