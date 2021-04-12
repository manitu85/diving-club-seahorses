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

// ServiceWorker is a progressive technology. Ignore unsupported browsers
// if ("serviceWorker" in navigator) {
//   console.log("CLIENT: service worker registration in progress.");
//   navigator.serviceWorker.register("/service-worker.js").then(
//     function () {
//       console.log("CLIENT: service worker registration complete.");
//     },
//     function () {
//       console.log("CLIENT: service worker registration failure.");
//     }
//   );
// } else {
//   console.log("CLIENT: service worker is not supported.");
// }

// Ensure that the browser supports the service worker API
if (navigator.serviceWorker) {
  // Start registration process on every page load
  window.addEventListener("load", () => {
    navigator.serviceWorker
      // The register function takes as argument
      // the file path to the worker's file
      .register("/service-worker.js")
      // Gives us registration object
      .then((reg) => console.log("Service Worker Registered"))
      .catch((swErr) =>
        console.log(`Service Worker Installation Error: ${swErr}}`)
      );
  });
}
