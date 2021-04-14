import numberRollup from "number-rollup";
import tilt from "vanilla-tilt";

// Custom Moduls
import Modal from "./moduls/modal";
import MobileMenu from "./moduls/MobileMenu";
import PageSectionObserver from "./moduls/PageSectionsObserver";

// ############ INIT instances and functions #####################
const pageSection = new PageSectionObserver();
const mobileMenu = new MobileMenu();
const modal = new Modal();

handleSiteLogoToTop();
handleChangeHeaderColor();
handleCounterInView("30%", "-40%");
handleTilt();

window.onload = function initEffects(cb) {
  // New Promise
  setInterval(() => {
    handleLoadedOverlay();
    handleAudioOnLoad();
    return (cb) => clearInterval(initEffects);
  }, 1000);
};
// window.addEventListener("load", initEffects);

// ############ SITE services worker #####################
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

// ############ SITE FUNCTIONS #####################

// Audio effect mp3
function handleAudioOnLoad() {
  // add for mobile version to turn-off audio eventually
  const audio = document.querySelector(".audio__effect");
  audio.volume = 0.2;
  audio.play();
}

// Preloader
function handleLoadedOverlay() {
  const preloader = document.querySelector(".preloader");
  return preloader.classList.add("loaded");
}

// Add handle click logo as button to top of page
function handleSiteLogoToTop() {
  const siteLogos = document.querySelectorAll(".logo");
  return siteLogos.forEach((logo) => {
    logo.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

// Change color of header on scroll
function handleChangeHeaderColor() {
  const siteHeader = document.querySelector(".header");
  return window.addEventListener("scroll", function () {
    // pageYOffset or scrollY
    if (window.pageYOffset > 200) {
      siteHeader.classList.add("header--dark");
    } else {
      siteHeader.classList.remove("header--dark");
    }
  });
}

// Counter section show
function handleCounterInView(offsetDown, offsetUp) {
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

// Vanilla Tilt effects
function handleTilt() {
  return tilt.init(document.querySelectorAll(".tours__tilt"), {
    max: 12, // max tilt rotation (degrees)
    startX: 0, // the starting tilt on the X axis, in degrees.
    startY: 0, // the starting tilt on the Y axis, in degrees.
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 0.95, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  });
}

// https://stackoverflow.com/questions/55921442/how-to-fix-referenceerror-primordials-is-not-defined-in-node
