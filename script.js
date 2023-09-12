const navLinks = document.querySelectorAll(".nav-link");
const dropdown = document.querySelector(".dropdown-menu");
const navBar = document.querySelector(".nav-bar");
navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    dropdown.classList.add("show");
    navBar.style.opacity = 1;
  });
  link.addEventListener("mouseleave", () => {
    dropdown.classList.remove("show");
    navBar.style.opacity = 0.8;
  });
});
