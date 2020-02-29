'use strict'


class helloWorldComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    var style = document.createElement('style');
    var paragrafo = document.createElement('p');
    paragrafo.innerText = 'Gean Silva';

    document.body.appendChild(paragrafo);
    document.body.appendChild(style);

    document.body.querySelector('style').textContent = `p {color:red}`
  }
}

customElements.define('hello-world', helloWorldComponent);