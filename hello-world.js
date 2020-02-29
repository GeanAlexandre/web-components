'use strict'


class HelloWorldComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {

    var shadow = this.attachShadow({ mode: 'open' });
    var helloWorldComponent = document.getElementById("hello-world");
    shadow.appendChild(helloWorldComponent.content);
  }
}

customElements.define('hello-world', HelloWorldComponent);