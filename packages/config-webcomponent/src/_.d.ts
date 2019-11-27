declare module "@babel/preset-env";
declare module "rollup-plugin-babel";
declare module "rollup-plugin-serve";
declare module "rollup-plugin-terser";

declare module '*.scss' {
    const content: import('lit-element').CSSResult;
    export default content;
}

declare module '*.svg' {
    const content: import('lit-element').SVGTemplateResult;
    export default content;
}