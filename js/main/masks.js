"use strict";
{
  document.addEventListener("input", function (event) {
    const { value } = event.target;
    if (value) {
      const elem = document.getElementById("birthdate");
      if (elem) {
        const elemSize = (value || "").length;
        let inputValue = value;
        if (elemSize === 2 || elemSize === 5) inputValue = value + "/";
        document.getElementById("birthdate").value = String(
          inputValue || ""
        ).replace(/^\D+/g, "");
      }
    }
  });
}
