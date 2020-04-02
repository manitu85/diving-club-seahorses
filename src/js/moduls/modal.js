import $ from 'jquery'

class Modal {
  constructor() {
    this.openModalButton = $('.modal__open')
    this.modal = $('.modal')
    this.closeModalButton = $('.modal__close')
    this.events()
  }

  events() {
    // clicking the open modal button
    this.openModalButton.click(this.openModal.bind(this))
    // clicking the X close modal button
    this.closeModalButton.click(this.closeModal.bind(this))
    // escape key
    $(document).keyup(this.keyPressHandler.bind(this))
  }

  keyPressHandler(e) {
    if (e.keyCode == '27') {
      this.closeModal()
    }
  }

  openModal() {
    this.modal.addClass('modal--is-visible')
    return false // prevent default behavior for link
  }

  closeModal() {
    this.modal.removeClass('modal--is-visible')
  }

}

export default Modal