import $ from 'jquery'
import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints'
import smoothScroll from 'jquery-smooth-scroll'


class StickyHeader {
  constructor() {
    // Sticky
    this.siteHeader = $('.header')
    this.headerTriggerElement = $('.large-hero__title')
    // Highlight
    this.pageSections = $('.section')
    this.headerLinks = $('.menu .menu__link')
    // Watch onload
    this.createHeaderWaypoint()
    this.createPageSectionWaypoint()
    this.addSmoothScroll()
    
  }

  createHeaderWaypoint() {
    let self = this;
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler: (direction) => {
        if (direction == 'down') {
          self.siteHeader.addClass('header--dark')
        } else {
          self.siteHeader.removeClass('header--dark')
        }
      }
    })
  }

  addSmoothScroll() {
    this.headerLinks.smoothScroll({
      offset: -80,
      speed: 600,
      preventDefault: true
    })
  }

  createPageSectionWaypoint() {
    let self = this;
    this.pageSections.each(function() {
      let currentPageSection = this;

      // Highlight link if scroll down
      new Waypoint({
        element: currentPageSection,
        handler: direction => {
          if( direction == 'down') {
            let matchingHeaderLink = currentPageSection.getAttribute('data-matching-link')
            self.headerLinks.removeClass('is-current-link')
            $(matchingHeaderLink).addClass('is-current-link')
          }
        },
        offset: '25%'
      })

      // Highlight link if scroll up
      new Waypoint({
        element: currentPageSection,
        handler: direction => {
          if (direction == 'up') {
            let matchingHeaderLink = currentPageSection.getAttribute('data-matching-link')
            self.headerLinks.removeClass('is-current-link')
            $(matchingHeaderLink).addClass('is-current-link')
          }
        },
        offset: '-40%'
      })

    })
  }
}

export default StickyHeader




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

// }

// export default StickyHeader

