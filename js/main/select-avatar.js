"use strict";

{
  const selectAvatar = document.querySelector("#select-avatar");
  if (selectAvatar) {
    const buttons = selectAvatar.querySelectorAll("button");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((unselectButton) =>
          unselectButton.classList.remove("--active")
        );
        btn.classList.toggle("--active");
      });
    });
  }
}
