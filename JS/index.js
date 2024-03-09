const menu = document.querySelector(".menu-icon");
const navBar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  menu.classList.toggle("move");
  navBar.classList.toggle("open-menu");
});

// Removing nav menu after clicking on nav-link
window.onscroll = () => {
  navBar.classList.remove("open-menu");
  menu.classList.remove("move");
};

// HEader BAckground Change Om Scroll
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("header-active", window.scrollY > 0);
});

// Scroll Top
const scrollTop = document.querySelector(".scroll-top");
window.addEventListener("scroll", () => {
  scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
});

// Dark-Mode

// ! ============ Selectors ============>>
const darkToggle = document.getElementById("darkMode-icon");

// ! ============ State ============>>
const theme = localStorage.getItem("theme");

// ! ============ On Mount ============>>
theme && document.body.classList.add(theme);

// ! ============ Handlers ============>>
handleThemeToggle = () => {
  darkToggle.classList.toggle("ri-sun-line");
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark-mode");
  } else {
    localStorage.removeItem("theme");
  }
};

// ! ============ Events ============>>
darkToggle.onclick = ("click", handleThemeToggle);
