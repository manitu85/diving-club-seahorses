import Modal from "./moduls/modal";
import MobileMenu from "./moduls/MobileMenu";
import StickyHeader from "./moduls/StickyHeader";

const modal = new Modal();
const mobileMenu = new MobileMenu();
const stickyHeader = new StickyHeader();

// Add handle click logo as button to top of page
const logos = document.querySelectorAll(".logo");
logos.forEach((logo) => {
  logo.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
