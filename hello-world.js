'use strict'


class helloWorldComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {

    var shadow = this.attachShadow({ mode: 'open' });

    var style = document.createElement('style');
    var paragrafo = document.createElement('p');
    paragrafo.innerText = 'Hello World';

    shadow.appendChild(paragrafo);
    shadow.appendChild(style);
    shadow.querySelector('style').textContent = `p {color:red}`

  }
}

customElements.define('hello-world', helloWorldComponent);