// open-close mobile menu
document.querySelectorAll(".js-mobile-menu").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".mob-overlay").classList.toggle("is-open");
  });
});

// open book tour window
document.querySelectorAll(".js-book-tr-window").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".book-overlay").classList.toggle("is-open");
  });
});

// details tour window

document.querySelectorAll(".js-dt-hoverla").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".tr-dt-overlay").classList.toggle("is-open");
  });
});

// close details tour window
document.querySelectorAll(".close-dt-window-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".tr-dt-overlay").classList.toggle("is-open");
  });
});
