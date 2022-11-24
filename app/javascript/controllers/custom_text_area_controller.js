import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="custom-text-area"
export default class extends Controller {
  static targets = ["line"]

  connect() {
    console.log("custom-text-area-controller connected")
    console.log(this.lineTarget);
  }

  shiftFocus() {
    this.lineTarget.focus()
  }
}
