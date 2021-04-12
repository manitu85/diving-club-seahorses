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
      .catch((swErr) =>
        console.log(`Service Worker Installation Error: ${swErr}}`)
      );
  });
}

// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", function () {
//     navigator.serviceWorker.register("/service-worker.js").then(
//       function (registration) {
//         // Registration was successful
//         console.log(
//           "ServiceWorker registration successful with scope: ",
//           registration.scope
//         );
//       },
//       function (err) {
//         // registration failed :(
//         console.log("ServiceWorker registration failed: ", err);
//       }
//     );
//   });
// }
