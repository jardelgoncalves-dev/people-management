"use strict";
{
  document.addEventListener("input", function (event) {
    const { value } = event.target;
    if (value) {
      const elem = document.getElementById("birthdate");
      if (elem) {
        const elemSize = (value || "").length;
        let inputValue = value;
        if (elemSize === 3 || elemSize === 6) {
          const lastChar = value.slice(elemSize - 1);
          if (lastChar !== "/") {
            inputValue = `${value.slice(0, elemSize - 1)}/${value.slice(
              elemSize - 1
            )}`;
          }
        }
        document.getElementById("birthdate").value = String(
          inputValue || ""
        ).replace(/[a-z]+/gi, "");
      }
    }
  });
}
