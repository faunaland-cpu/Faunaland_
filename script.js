// =========================
// FaunaLand Script Final
// =========================

// =========================
// Hamburger Menu
// =========================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// =========================
// Close menu after click
// =========================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// =========================
// Reveal Animation
// =========================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      element.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// =========================
// Active Sidebar Link LMS
// =========================

const sections = document.querySelectorAll(".learn-card");
const sidebarLinks = document.querySelectorAll(".learn-sidebar a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (scrollY >= sectionTop - 140) {
      currentSection = section.getAttribute("id");
    }
  });

  sidebarLinks.forEach((link) => {
    link.classList.remove("active-link");

    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active-link");
    }
  });
});

// =========================
// Simple Image Fallback
// =========================

const images = document.querySelectorAll("img");

images.forEach((img) => {
  img.addEventListener("error", () => {
    img.style.display = "none";

    const fallback = img.nextElementSibling;

    if (fallback) {
      fallback.style.display = "flex";
    }
  });
});