export interface Template {
 (css: string): string;
}

export const template: Template = (css: string) => `
  import { html } from "lit-element";
  export const style = html\`<style>${css}</style>\`;
  export default style;
`;

export default template;