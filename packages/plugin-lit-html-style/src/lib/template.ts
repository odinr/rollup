export interface Template {
 (css: string): string;
}

export const template: Template = (css: string) => `
  import { css } from "lit-element";
  export const style = css\`${css}\`;
  export default style;
`;

export default template;