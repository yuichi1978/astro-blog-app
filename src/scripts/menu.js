
document.addEventListener("astro:page-load", () => {
  document.querySelector(".hamburger")?.addEventListener("click", () => {
    document.querySelector(".nav__links")?.classList.toggle("isActive");
  });
});