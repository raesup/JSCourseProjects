"use strict";

const showButtons = document.querySelectorAll(".show");
const closeButton = document.querySelector(".close");
const main = document.querySelector(".window");
const overlay = document.querySelector(".overlay");

showButtons.forEach((button) => {
  button.addEventListener("click", () => {
    main.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});

closeButton.addEventListener("click", () => {
  main.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  main.classList.add("hidden");
  overlay.classList.add("hidden");
});
