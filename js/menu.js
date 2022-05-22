(() => {
    const refs = {
      openModalBtn: document.querySelector("[menu-click]"),
      closeModalBtn: document.querySelector("[modal-menu__click]"),
      modal: document.querySelector("[modal-menu]"),
      body: document.querySelector("body"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll");
    }
  })();