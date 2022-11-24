import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="custom-text-area"
export default class extends Controller {
  static targets = ["line", "cursor"]

  connect() {
    console.log("custom-text-area-controller connected")
  }

  shiftFocus() {
    this.lineTarget.classList.remove("blink_me")
  }

  type(e) {
    if (this.lineTarget === document.activeElement) {
      console.dir(e)
      this.lineTarget.innerText += e.key
      this.controlBlinker()
    }
  }

  controlBlinker() {
    if (this.lineTarget.innerText.length > 0) this.cursorTarget.innerText = "";
    if (this.lineTarget.innerText.length === 0) this.cursorTarget.innerText = "|";
  }

  setFocus() {
    console.log("setFocus fired");
    this.lineTarget.focus()
    console.log("setFocus finished");
  }

  handleCtrlKey() { }
}
