"use strict";

{
  const modal = document.getElementById("modal");
  const modalClose = document.getElementById("modal-close");
  const modalOpen = document.getElementById("modal-open");

  if (modal && modalClose) {
    modalClose.addEventListener("click", () => {
      if (modal.classList.contains("--visible")) {
        modal.classList.remove("--visible");
      }
    });
  }

  if (modal && modalOpen) {
    modalOpen.addEventListener("click", () => {
      if (!modal.classList.contains("--visible")) {
        modal.classList.add("--visible");
      }
    });
  }
}
