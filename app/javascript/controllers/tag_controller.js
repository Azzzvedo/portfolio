import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="tag"
export default class extends Controller {
  static targets = ["expand"]

  connect() {
    console.log('tag controller connected');
  }

  hide() {
    this.expandTarget.classList.add('hidden')
  }

  unhide() {
    this.expandTarget.classList.remove('hidden')
  }
}
