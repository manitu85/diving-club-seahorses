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


class MobileMenu {
  constructor() {
    // selecting elements from DOM
    this.menuIcon = document.querySelector('.menu-icon')
    this.menu = document.querySelector('.menu')
    this.events()
  }

  // Event Handling watch for
  events() {
    this.menuIcon.addEventListener('click', this.toggleMenu.bind(this))
  }

  // Defining functionality
  toggleMenu() {
    this.menu.classList.toggle('menu--is-visible')
  }
}

export default MobileMenu