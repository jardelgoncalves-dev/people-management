"use strict";
{
  const form = document.querySelector("#form");
  function resetForm() {
    if (form && form.reset) {
      form.reset();
      const avatarsField = form.querySelector("#select-avatar");
      if (avatarsField) {
        avatarsField.querySelectorAll("button").forEach((btn) => {
          btn.classList.remove("--active");
        });
      }
    }
  }
}
