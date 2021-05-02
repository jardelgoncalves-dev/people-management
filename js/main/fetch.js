{
  window.addEventListener("load", () => {
    const list = document.querySelector("#list-people");
    (() => {
      fetch(`${URL_API}/peoples`)
        .then((res) => res.json())
        .then((data) => {
          if (list) {
            (data || []).forEach((item) => {
              const liElement = document.createElement("li");
              liElement.className = "list-cards__item";
              liElement.innerHTML = `
                <div class="card">
                  <div class="card__avatar">
                    <img src="${URL_API}${item.avatar}" alt="Avatar" />
                  </div>
                  <h2 class="card__name">
                    <a href="#">${item.name}</a>
                  </h2>
                  <span class="card__charge">${item.role}</span>
                  <span class="card__age">${calculateAge(
                    item.birthdate
                  )} years old</span>
                  <div class="card__actions">
                    <button class="card__actions__btn" onclick="openModalDelete(${
                      item.id
                    })">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 5H4.16667H17.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.66663 5V3.33333C6.66663 2.89131 6.84222 2.46738 7.15478 2.15482C7.46734 1.84226 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84226 12.8451 2.15482C13.1577 2.46738 13.3333 2.89131 13.3333 3.33333V5M15.8333 5V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5H15.8333Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                    <button class="card__actions__btn">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.1666 2.5C14.3855 2.28113 14.6453 2.10751 14.9313 1.98906C15.2173 1.87061 15.5238 1.80964 15.8333 1.80964C16.1428 1.80964 16.4493 1.87061 16.7353 1.98906C17.0213 2.10751 17.2811 2.28113 17.5 2.5C17.7188 2.71887 17.8924 2.9787 18.0109 3.26467C18.1294 3.55064 18.1903 3.85714 18.1903 4.16667C18.1903 4.47619 18.1294 4.78269 18.0109 5.06866C17.8924 5.35463 17.7188 5.61446 17.5 5.83333L6.24996 17.0833L1.66663 18.3333L2.91663 13.75L14.1666 2.5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              `;
              list.appendChild(liElement);
            });
          }
        })
        .catch((error) => console.log(error));
    })();
  });
}
