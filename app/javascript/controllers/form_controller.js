import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form"
export default class extends Controller {
  static targets = ["input", "last"]

  connect() {
  }

  add() {
    let str = this.inputTarget.value
    this.inputTarget.value = ""
    str = str.replace(/[^\w\s\']|_/g, "")
      .replace(/\s+/g, " ").toLowerCase();
    if (str.value === "") return;
    str = str.charAt(0).toUpperCase() + str.slice(1);
    this.lastTarget.insertAdjacentHTML('beforebegin', `
    <div data-controller="tag">
    <span class="tag student hover-button" data-tag-target="button">${str}.</span>
      <div class="hidden expand" data-tag-target="expand">
        <p>Nothing to see here!</p>
      </div>
    </div>`)
  }

  enter(e) {
    if (e.key === "Enter") {
      this.add()
    }
  }
}
