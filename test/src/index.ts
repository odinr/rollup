import {LitElement,html, customElement, TemplateResult} from 'lit-element';
// @ts-ignore;
import style from './index.scss';
// @ts-ignore;
import svg from './index.svg';

@customElement('test-element')
export class Test extends LitElement{
 render(): TemplateResult{
  return html`${style}${svg}<p>test</p>`;
 }
}