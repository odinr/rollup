export interface Template {
 (css: string): string;
}

export const template: Template = (css: string) => `
  import { css } from "lit-element";
  export const style = css\`<style>${css}</style>\`;
  export default style;
`;

export default template;