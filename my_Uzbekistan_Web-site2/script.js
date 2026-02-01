const navToggle = document.getElementById("nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--open");
  navToggle.setAttribute(
    "aria-label",
    nav.classList.contains("nav--open") ? "Menyuni yopish" : "Menyuni ochish"
  );
});

document.querySelectorAll(".nav-link").forEach((link) => {
  if (
    link.href === location.href ||
    location.href.includes(link.getAttribute("href"))
  ) {
    link.classList.add("active");
  }
  link.addEventListener("click", () => {
    nav.classList.remove("nav--open");
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth",
      });
    }
  });
});

window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
