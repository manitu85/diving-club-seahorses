import numberRollup from "number-rollup";
import tilt from "vanilla-tilt";

import Modal from "./moduls/modal";
import MobileMenu from "./moduls/MobileMenu";
import PageSectionObserver from "./moduls/PageSectionsObserver";

// Init
const pageSection = new PageSectionObserver();
const mobileMenu = new MobileMenu();
const modal = new Modal();
counterInView("30%", "-40%");
// window.addEventListener("load", initEffects);

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

// Preloader & audio effect mp3
const preloader = document.querySelector(".preloader");
const audio = document.getElementById("sound");

window.onload = function initEffects(cb) {
  // New Promise
  setInterval(() => {
    preloader.classList.add("loaded");
    audio.play();
    audio.volume = 0.2;
    return (cb) => clearInterval(initEffects);
  }, 1000);
};

// add for mobile version to turn-off audio

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
  const counter = document.getElementById("show");
  new Waypoint({
    element: counter,
    handler: function (direction) {
      if (direction == "down") {
        numberRollup();
        this.destroy();
      }
    },
    offset: offsetDown,
  });

  new Waypoint({
    element: counter,
    handler: function (direction) {
      if (direction == "up") {
        numberRollup();
        this.destroy();
      }
    },
    offset: offsetUp,
  });
}

// Vanila Tilt effects
tilt.init(document.querySelectorAll(".tours__tilt"), {
    max: 12, // max tilt rotation (degrees)
    startX: 0, // the starting tilt on the X axis, in degrees.
    startY: 0, // the starting tilt on the Y axis, in degrees.
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: .95,  // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,  // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.

	});

// https://stackoverflow.com/questions/55921442/how-to-fix-referenceerror-primordials-is-not-defined-in-node
