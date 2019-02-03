import { __decorate } from 'tslib';
import { html, svg, LitElement, customElement } from 'lit-element';

const style = html`<style>:host{display:inline-block;box-shadow:2px 2px 10px 1px rgba(0,0,0,.25)}</style>`;

const symbol = svg`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512"><path d="M490.594 80.054C418.778 69.729 339.428 64 256.001 64c-83.43 0-162.778 5.729-234.597 16.054C7.639 133.917 0 193.429 0 256c0 62.57 7.639 122.083 21.404 175.945C93.223 442.271 172.572 448 256.001 448c83.427 0 162.776-5.729 234.593-16.055C504.36 378.083 512 318.57 512 256c0-62.571-7.64-122.083-21.406-175.946zM192.001 352V160l160 96-160 96z"/></svg>`;

let Test = class Test extends LitElement {
  render() {
    return html`${style}${symbol}<p>test</p>`;
  }

};
Test = __decorate([customElement('test-element')], Test);

export { Test };
