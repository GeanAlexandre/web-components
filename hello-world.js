'use strict'


class HelloWorldComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() { return ['color'] }

  connectedCallback() {
    var helloWorldComponent = document.getElementById("hello-world");
    this.shadowRoot.appendChild(helloWorldComponent.content);
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    var style = document.createElement('style');
    style.textContent = `
      p {color: ${newVal}}
    `

    this.shadowRoot.appendChild(style);
  }
}

customElements.define('hello-world', HelloWorldComponent);