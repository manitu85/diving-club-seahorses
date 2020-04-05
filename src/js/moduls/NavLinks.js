// import $ from 'jquery'

// class NavLinks {
//   constructor() {
//     this.menuItem = document.querySelectorAll('.menu__item')
//     this.menuLink = document.querySelectorAll('.menu__link')
//     this.events()
//   }

//   events() {
//     this.menuItem.forEach(link => link.addEventListener('click', this.previousLink.bind(this)))
//     this.menuItem.forEach(link => link.addEventListener('click', this.nextLink.bind(this)))
//   }

//   nextLink(e) {
//     e.preventDefault;
//     this.menuItem.classList.add('menu__item--current')
//   }

//   previousLink(e) {
//     e.preventDefault;
//     this.menuItem.classList.remove('menu__item--current')
//   }
// }

// export default NavLinks

// $(document).ready(
//   $(".menu__item").click('.menu__link', function (e) {
//     $(".menu__item").removeClass("menu__item--current");
//     $(this).addClass("menu__item--current");
//   })
// );