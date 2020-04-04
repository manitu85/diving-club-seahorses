import $ from 'jquery'

import Modal from './moduls/Modal'
// import Header from './moduls/Header'
import MobileMenu from './moduls/MobileMenu'


const modal = new Modal();
const mobileMenu = new MobileMenu();
// const header = new Header();


$(document).ready(
  $(".menu__item").click('.menu__link', function (e) {
    $(".menu__item").removeClass("menu__item--current");
    $(this).addClass("menu__item--current");
  })
);