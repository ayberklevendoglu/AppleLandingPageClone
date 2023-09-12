const navLinks = document.querySelectorAll(".nav-link");
const dropdown = document.querySelector(".dropdown-menu");
navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    dropdown.classList.add("show");
  });
  link.addEventListener("mouseleave", () => {
    dropdown.classList.remove("show");
  });
});
