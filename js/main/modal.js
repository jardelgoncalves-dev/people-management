"use strict";

// modal register
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

// modal delete
{
  let item = null;
  const modal = document.querySelector("#modal-delete");
  function openModalDelete(itemToDelete) {
    if (modal) {
      item = itemToDelete;
      modal.classList.add("--visible");
    }
  }

  if (modal) {
    modal
      .querySelector("#cancel-modal-delete")
      .addEventListener("click", () => {
        modal.classList.remove("--visible");
        item = null;
      });
  }
}
