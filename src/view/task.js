import { createElement } from "../framework/render.js";

export class Task {
  constructor(task) {
    this.task = task;
  }

  getTemplate() {
    return `<div class="task">${this.task.title}</div>`;
  }

  getElement() {
    if (!this.element) {
      this.element = createElement("div");
      this.element.innerHTML = this.getTemplate();
      this.element = this.element.firstChild;
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
