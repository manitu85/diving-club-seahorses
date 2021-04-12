// Selecting elements from DOM
// Event Handling observer
// Defining functionality
class MobileMenu {
  constructor() {
    this.menu = document.querySelector(".menu");
    this.menuIcon = document.querySelector(".menu-icon");
    this.menuItem = document.querySelectorAll(".menu__item");
    this.events();
  }

  events() {
    this.menuItem.forEach((item) =>
      item.addEventListener("click", this.closeModal.bind(this))
    );
    this.menuIcon.addEventListener("click", this.toggleMenu.bind(this));
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
}

export default MobileMenu;
