import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="tag"
export default class extends Controller {
  static targets = ["expand", "wiggler", "link"]

  connect() {
    // console.log('tag controller connected');
    this.wiggle()
    console.log(this.linkTarget.innerText);
  }

  unhide() {
    // console.log("fired");
    this.expandTarget.classList.remove('hidden')
    this.linkTarget.classList.add('link')
    // this.spanTarget.classList.remove('hidden')
  }

  hide() {

    this.expandTarget.classList.add('hidden')
    this.linkTarget.classList.remove('link')
    // this.spanTarget.classList.remove('hidden')
  }

  wiggle() {
    if (!this.hasWigglerTarget) return;
    const randomTime = this.wigglerTarget.innerText === "Ian." ? 0 : Math.floor(Math.random() * 20) + Math.random() + 1;
    setTimeout(() => {
      this.wigglerTarget.classList.add('wiggle')
      setTimeout(() => {
        this.wigglerTarget.classList.remove('wiggle')
      }, 2000);
    }, randomTime * 1000);
  }
}
