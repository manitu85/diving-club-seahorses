// import $ from 'jquery'

// class MobileMenu {
//   constructor() {
//     this.menuIcon = $('.menu-icon')
//     this.menu = $('.menu')
//     this.events()
//   }

//   events() {
//     this.menuIcon.click(this.toggleMenu.bind(this)) 
//   }

//   toggleMenu() {
//     this.menu.toggleClass('menu--is-visible')
//   }
// }

// export default MobileMenu


// Selecting elements from DOM
// Event Handling watch for
// Defining functionality
class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector('.menu-icon')
    this.menu = document.querySelector('.menu')
    this.events()
  }

  events() {
    this.menuIcon.addEventListener('click', this.toggleMenu.bind(this))
  }

  toggleMenu() {
    this.menu.classList.toggle('menu--is-visible')
  }
}

export default MobileMenu