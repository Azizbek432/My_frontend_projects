const container = document.querySelector(".container");
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");

if (!container || !openBtn || !closeBtn) {
  console.warn("Required elements missing: .container, #open or #close");
} else {
  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    container.classList.add("show-nav");
  });
  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    container.classList.remove("show-nav");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") container.classList.remove("show-nav");
  });
}
