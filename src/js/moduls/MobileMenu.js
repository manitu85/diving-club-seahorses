// Selecting elements from DOM
// Event Handling watch for
// Defining functionality
class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector(".menu-icon");
    this.menu = document.querySelector(".menu");
    this.menuItem = document.querySelectorAll(".menu__item");
    this.events();
  }

  events() {
    this.menuIcon.addEventListener("click", this.toggleMenu.bind(this));
    this.menuItem.forEach((item) =>
      item.addEventListener("click", this.closeModal.bind(this))
    );
    document.addEventListener("keyup", this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode == "27") {
      this.closeModal();
    }
  }

  toggleMenu() {
    this.menu.classList.toggle("menu--is-visible");
  }

  closeModal() {
    this.menu.classList.remove("menu--is-visible");
  }

  // openModal(e) {
  //   e.preventDefault();
  //   this.menu.classList.add("menu--is-visible");
  // }
}

export default MobileMenu;
