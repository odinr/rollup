export interface Template {
 (data: string): string;
}

export const template: Template = (data: string) => `
  import { svg } from "lit-element";
  export const symbol = svg\`${data}\`;
  export default symbol;
`;

export default template;