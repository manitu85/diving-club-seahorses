import numberRollup from "number-rollup";
import Modal from "./moduls/modal";
import MobileMenu from "./moduls/MobileMenu";
import PageSectionObserver from "./moduls/PageSectionsObserver";

const modal = new Modal();
const mobileMenu = new MobileMenu();
const pageSection = new PageSectionObserver();

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

// Counter from up
const counterInViewDown = new Waypoint({
  element: document.getElementById("show"),
  handler: function (direction) {
    if (direction == "down") {
      numberRollup({
        easing: "easeIn",
      });
    }
  },
  offset: "30%",
});

// Counter from down
const counterInViewUp = new Waypoint({
  element: document.getElementById("show"),
  handler: function (direction) {
    if (direction == "up") {
      numberRollup({
        easing: "easeIn",
      });
    }
  },
  offset: "-40%",
});

counterInViewDown();
counterInViewUp();

// Ensure that the browser supports the service worker API
// ServiceWorker is a progressive technology. Ignore unsupported browsers
if (navigator.serviceWorker) {
  // Start registration process on every page load
  window.addEventListener("load", () => {
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
