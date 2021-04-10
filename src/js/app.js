import Modal from "./moduls/modal";
import MobileMenu from "./moduls/MobileMenu";
import StickyHeader from "./moduls/StickyHeader";

const modal = new Modal();
const mobileMenu = new MobileMenu();
const stickyHeader = new StickyHeader();

// Add handle click logo as button to top of page
const siteLogos = document.querySelectorAll(".logo");
siteLogos.forEach((logo) => {
  logo.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Change header color on scroll
// const siteHeader = document.querySelector(".header");
// window.addEventListener("scroll", function () {
//   window.scrollY > 100
//     ? siteHeader.classList.add("header--dark")
//     : siteHeader.classList.remove("header--dark");
// });
