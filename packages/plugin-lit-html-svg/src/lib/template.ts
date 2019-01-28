export interface Template {
 (css: string): string;
}

export const template: Template = (css: string) => `
  import { svg } from "lit-element";
  export const symbol = svg\`${css}\`;
  export default symbol;
`;

export default template;