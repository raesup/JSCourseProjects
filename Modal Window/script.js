"use strict";

const showButtons = document.querySelectorAll(".show");
const closeButton = document.querySelector(".close");
const main = document.querySelector(".window");
const overlay = document.querySelector(".overlay");

function hidden() {
  main.classList.add("hidden");
  overlay.classList.add("hidden");
}

showButtons.forEach((button) => {
  button.addEventListener("click", () => {
    main.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});

closeButton.addEventListener("click", () => {
  hidden();
});

overlay.addEventListener("click", () => {
  hidden();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    hidden();
  }
});
