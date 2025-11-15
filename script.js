// Chattrix Super Script
// Features: Mobile Menu, Light/Dark Mode, Saved Theme, Loader, Page Transitions,
// Scroll-to-top, Smooth Scroll, Post expand functionality.

(() => {

  /* -------------------------
     ELEMENT SELECTORS
  -------------------------- */
  const menuBtn = document.querySelector(".menu-btn");
  const mobileNav = document.getElementById("mobile-menu");
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const loader = document.getElementById("loader");
  const scrollBtn = document.getElementById("scrollTopBtn");

  /* -------------------------
     LOADING SCREEN
  -------------------------- */
  window.addEventListener("load", () => {
    loader.classList.add("hide");
    setTimeout(() => loader.remove(), 600);
  });

  /* -------------------------
     PAGE TRANSITION ANIMATION
  -------------------------- */
  document.querySelectorAll("a[href]").forEach(link => {
    if (link.target === "_blank") return;

    link.addEventListener("click", e => {
      const href = link.getAttribute("href");
      if (!href.endsWith(".html")) return;

      e.preventDefault();
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = href;
      }, 300);
    });
  });

  /* -------------------------
     MOBILE MENU TOGGLE
  -------------------------- */
  menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });

  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => mobileNav.classList.remove("active"));
  });

  /* -------------------------
     LIGHT / DARK MODE
  -------------------------- */
  const THEME_KEY = "chattrix_theme";

  function applyTheme(light) {
    if (light) {
      body.classList.add("light-mode");
      themeToggle.textContent = "🌞";
      localStorage.setItem(THEME_KEY, "light");
    } else {
      body.classList.remove("light-mode");
      themeToggle.textContent = "🌙";
      localStorage.setItem(THEME_KEY, "dark");
    }
  }

  const savedTheme = localStorage.getItem(THEME_KEY);
  applyTheme(savedTheme === "light");

  themeToggle.addEventListener("click", () => {
    applyTheme(!body.classList.contains("light-mode"));
  });

  /* -------------------------
     ESC KEY CLOSE MENU
  -------------------------- */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") mobileNav.classList.remove("active");
  });

  /* -------------------------
     SCROLL TO TOP BUTTON
  -------------------------- */
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

})();