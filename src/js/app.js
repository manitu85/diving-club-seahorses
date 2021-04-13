import numberRollup from "number-rollup";
// import waypoints from "waypoints/lib/noframework.waypoints";

import Modal from "./moduls/modal";
import MobileMenu from "./moduls/MobileMenu";
import PageSectionObserver from "./moduls/PageSectionsObserver";

// Init
const pageSection = new PageSectionObserver();
const mobileMenu = new MobileMenu();
const modal = new Modal();
counterInView("30%", "-40%");
// window.onload = function () {
//   fadeEffect();
// };

// Ensure that the browser supports the service worker API
// ServiceWorker is a progressive technology. Ignore unsupported browsers
if (navigator.serviceWorker) {
  // Start registration process on every page load
  window.addEventListener("load", function () {
    navigator.serviceWorker
      // The register function takes as argument
      // the file path to the worker's file
      .register("/service-worker.js")
      // Gives us registration object
      .then((reg) => console.log("Service Worker Registered"))
      .catch((err) =>
        console.log(`Service Worker Installation Error: ${err}}`)
      );
  });
}

const preloader = document.querySelector(".preloader");
window.onload = function fadeEffect(cb) {
  setInterval(() => {
    preloader.classList.add("loaded");
    return (cb) => clearInterval(fadeEffect);
  }, 800);
};
// window.addEventListener("load", fadeEffect);

// Add handle click logo as button to top of page
const siteLogos = document.querySelectorAll(".logo");
siteLogos.forEach((logo) => {
  logo.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Change color of header on scroll
const siteHeader = document.querySelector(".header");
window.addEventListener("scroll", function () {
  // pageYOffset or scrollY
  window.pageYOffset > 200
    ? siteHeader.classList.add("header--dark")
    : siteHeader.classList.remove("header--dark");
});

// Counter section show
function counterInView(offsetDown, offsetUp) {
  const show = document.getElementById("show");
  new Waypoint({
    element: show,
    handler: function (direction) {
      if (direction == "down") {
        numberRollup();
        // Destroy counter after once because slows down the site
        this.destroy();
      }
    },
    offset: offsetDown,
  });

  new Waypoint({
    element: show,
    handler: function (direction) {
      if (direction == "up") {
        numberRollup();
        // Destroy counter after once because slows down the site
        this.destroy();
      }
    },
    offset: offsetUp,
  });
}

// https://stackoverflow.com/questions/55921442/how-to-fix-referenceerror-primordials-is-not-defined-in-node
