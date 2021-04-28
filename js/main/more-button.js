const removeEvent = () => {
  const dropdowns = document.querySelectorAll(".dropdown");
  for (let i = 0; i < dropdowns.length; i++) {
    let openDropdown = dropdowns[i];
    if (openDropdown.classList.contains("--visible")) {
      openDropdown.classList.remove("--visible");
    }
  }
};
window.onclick = function (event) {
  if (!event.target.matches(".dropdown")) {
    removeEvent();
  }
};

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    removeEvent();
    elem.classList.toggle("--visible");
    e.stopPropagation();
  });
});
