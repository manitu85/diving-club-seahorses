import Modal from "./moduls/modal";
import MobileMenu from "./moduls/MobileMenu";
import StickyHeader from "./moduls/StickyHeader";
// import NavLinks from './moduls/NavLinks'

const modal = new Modal();
const mobileMenu = new MobileMenu();
const stickyHeader = new StickyHeader();
// const navLinks = new NavLinks();

// When user clicks anywhere outside of the Modal, close Modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
