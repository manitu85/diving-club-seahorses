import $ from "jquery";
import waypoints from "waypoints/lib/noframework.waypoints";
import smoothScroll from "jquery-smooth-scroll";

class PageSectionObserver {
  constructor() {
    // lazy images
    this.lazyImages = $(".lazyload");
    // Highlight
    this.pageSections = $(".section");
    this.headerLinks = $(".menu .menu__link");
    // Watch onload
    this.createPageSectionWaypoint();
    this.addSmoothScroll();
    this.refreshWaypoints();
  }

  refreshWaypoints() {
    this.lazyImages.on("load", () => {
      Waypoint.refreshAll();
    });
  }

  addSmoothScroll() {
    this.headerLinks.smoothScroll({
      offset: -60,
      speed: 600,
      preventDefault: true,
    });
  }

  createPageSectionWaypoint() {
    let self = this;
    this.pageSections.each(function () {
      let currentPageSection = this;

      // Highlight link if scroll down
      new Waypoint({
        element: currentPageSection,
        handler: (direction) => {
          if (direction == "down") {
            let matchingHeaderLink = currentPageSection.getAttribute(
              "data-matching-link"
            );
            self.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "25%",
      });

      // Highlight link if scroll up
      new Waypoint({
        element: currentPageSection,
        handler: (direction) => {
          if (direction == "up") {
            let matchingHeaderLink = currentPageSection.getAttribute(
              "data-matching-link"
            );
            self.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "-40%",
      });
    });
  }
}

export default PageSectionObserver;

// class StickyHeader {
//   constructor() {
//     this.siteHeader = document.querySelector('.header')
//     this.headerTriggerElement = document.querySelector('.info')
//     this.headerLinks = document.querySelectorAll('.menu .menu__link')
//     // Calls
//     this.createHeaderWaypoint()
//     this.addSmoothScroll()
//   }

//   createHeaderWaypoint() {
//     // let self = this;
//     new Waypoint({
//       element: this.headerTriggerElement,
//       handler: direction => {
//         if (direction == 'down') {
//           this.siteHeader.classList.add('header--dark')
//         } else {
//           this.siteHeader.classList.remove('header--dark')
//         }
//       }
//     })
//   }

// export default StickyHeader
