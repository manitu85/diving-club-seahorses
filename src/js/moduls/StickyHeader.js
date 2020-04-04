import $ from 'jquery'
import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints'


// class StickyHeader {
//   constructor() {
//     this.siteHeader = $('.header')
//     this.headerTriggerElement = $('.large-hero__title')
//     this.createHeaderWaypoint()
//   }

//   createHeaderWaypoint() {
//     let self = this;
//     new Waypoint({
//       element: this.headerTriggerElement[0],
//       handler: (direction) => {
//         if (direction == 'down') {
//           self.siteHeader.addClass('header--dark')
//         } else {
//           self.siteHeader.removeClass('header--dark')
//         }
//       }
//     })
//   }
// }

// export default StickyHeader


class StickyHeader {
  constructor() {
    this.siteHeader = document.querySelector('.header')
    this.headerTriggerElement = document.querySelector('.info')
    this.createHeaderWaypoint()
  }

  createHeaderWaypoint() {
    let self = this
    new Waypoint({
      element: this.headerTriggerElement,
      handler: direction => {
        if (direction == 'down') {
          self.siteHeader.classList.add('header--dark')
        } else {
          self.siteHeader.classList.remove('header--dark')
        }
      }
    })
  }
}

export default StickyHeader

