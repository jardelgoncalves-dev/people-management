{
  window.addEventListener("load", () => {
    const list = document.querySelector("#select-avatar");
    (() => {
      fetch(`${URL_API}/avatars`)
        .then((res) => res.json())
        .then((data) => {
          if (list) {
            (data || []).forEach((item) => {
              const buttonElement = document.createElement("button");
              buttonElement.className = "select-avatar__item";
              buttonElement.type = "button";
              buttonElement.innerHTML = `
                <img src="${URL_API}${item.image}" alt="Avatar" />
              `;
              list.appendChild(buttonElement);
            });
          }
        })
        .then(() => {
          if (list) {
            const buttons = list.querySelectorAll("button");
            buttons.forEach((btn) => {
              btn.addEventListener("click", () => {
                buttons.forEach((unselectButton) =>
                  unselectButton.classList.remove("--active")
                );
                btn.classList.toggle("--active");
              });
            });
          }
        })
        .catch((error) => console.log(error));
    })();
  });
}
