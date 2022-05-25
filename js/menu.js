(() => {
  const refs = {
    openMenuBtn: document.querySelector(".menu-click"),
    closeMenuBtn: document.querySelector(".modal-menu__click"),
    menu: document.querySelector(".modal-menu"),
    body: document.querySelector("body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();