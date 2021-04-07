// Selecting elements from DOM
// Event Handling watch for
// Defining functionality
class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector(".menu-icon");
    this.menu = document.querySelector(".menu");
    this.events();
  }

  events() {
    this.menuIcon.addEventListener("click", this.toggleMenu.bind(this));
  }

  toggleMenu() {
    this.menu.classList.toggle("menu--is-visible");
  }
}

export default MobileMenu;
