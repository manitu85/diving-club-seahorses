// import $ from 'jquery'

// class Header {
//   constructor() {
//     this.menuItem = document.querySelectorAll('.menu__item')
//     this.menuLink = document.querySelectorAll('.menu__link')
//     this.events()    
//   }

//   events() {
//     this.menuItem.forEach(link => link.addEventListener('click', menuLink, this.nextLink.bind(this)))
//     this.menuItem.forEach(link => link.addEventListener('click', menuLink, this.previousLink.bind(this)))
//   }

//   nextLink() {
//     this.menuItem.classList.remove('menu__item--current')
//     console.log('Menu ITem', this.menuItem);    
//   }

//   previousLink() {
//     this.menuItem.classList.add('menu__item--current')
//     console.log('Menu ITem', this.menuItem);    
//   }
// }

// export default Header

// $(document).ready(
//   $(".menu__item").click('.menu__link', function (e) {
//     $(".menu__item").removeClass("menu__item--current");
//     $(this).addClass("menu__item--current");
//   })
// );