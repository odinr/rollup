# rollup-config-webcomponent
[![Published on npm](https://img.shields.io/npm/v/rollup-config-webcomponent.svg)](https://www.npmjs.com/package/rollup-config-webcomponent)

This config is not the one config to rule them all, but 'my' config for compiling and bundling custom elements based on [lit-element](https://lit-element.polymer-project.org/). Youre mileage might vary, but if your starting fresh, this might be of great help or some of the source code. Drop a line for improvements.

The purpose of this config is to have a single import in your project for all plugins and configs. When dealing with mono-repo with multiple packages, plugins and configs, then things can get out of hands, even with `lerna`.

This config is environment controlled, example `rollup -c --environment bundle,compress,es:6` will create a bundle and compressed javascript file, huh? but also compress the inline css and optimize svg.

**issues**

- [Accessing "isAsset" on files in the bundle is deprecated, please use "type === 'asset'" instead](https://github.com/ritz078/rollup-plugin-filesize/issues/57) - no impact

```javascript 
// rollup.config.js
import createConfig from "rollup-config-webcomponent";
export default createConfig({
 name:'foo', 
 input:"./src/index.ts"
});
```
>🛠WARNING: this is a living config and will change over time!
> 
>☠️ Not yet testet in IE(es5), but should work, might need regenetive runtime.
> 
>🧁 90%++ support add [webcomponent polyfill](https://unpkg.com/@webcomponents/webcomponentsjs@2.2.6/webcomponents-loader.js)

## Options
**name** `:string`

**input** `:string`

**ecma** `:number?`

**plugin**`:Object?`

> `resolve` [@rollup-plugin-node-resolve](https://www.npmjs.com/package/rollup-plugin-node-resolve)

> `style` [@rollup-plugin-lit-html-style](ttps://www.npmjs.com/package/rollup-plugin-lit-html-style)

> `typescript` [@rollup-plugin-typescript2](https://www.npmjs.com/package/rollup-plugin-typescript2)
> - when --bundle `declaration` is set to false, it is recomended to not provide this option in your `tsconfig.json`
> - `target` default to `esnext` since babel do all the transpiling. *might change in future to enforced*

## Enviroment
```
rollup -c --environment compress,bundle,ecma:[5|6]
```

**compress**

when enabled, this will apply plugin `cssnano` to style and `terser` to javascript

**bundle** 

When enabled files are output to `./dist` and all imports are included, when disabled `package.depencies` + `tslib` are marked as external. 

**ecma** `:5|6 defaul:6 (esmodules === 6)`

# Example
```javascript 
// src/index.ts
import { 
  customElement, 
  eventOptions,
  html,
  LitElement,
  property,
  TemplateResult
} from "lit-element";

@customElement("foo-bar" as any)
class Bar extends LitElement {

 @property({})
 label: string = "click me!";
 
 @eventOptions({})
 _onClick() {
  windowm.alert('you clicked me!');
 }

 render(): TemplateResult {
  return html`
   <button @click="${this._onClick}">
    ${this.label}
   </button>
  `;
 }
}
```

```css
/* index.scss */
button {
 color: white;
 background-color: green;
}
```

```html
<!-- demo/index.html -->
<html>
 <head>
  <script src="foo.mjs" type="module"></script>
 </head>
 <body>
  <foo-bar label="foo me"></foo-bar>
 </body>
</html>
```

```javascript 
// rollup.config.js
import createConfig from "rollup-config-webcomponent";
const config = {
 name: 'foo',
 input: "./src/index.ts"
};
export { createConfig, config };
export default createConfig(config);
```

```javascript 
// rollup.demo.config.js
import { createConfig, config }
export default createConfig({...config,dir:'demo'});
```

```bash
rollup -c rollup.demo.config.js --environment bundle
http-server demo # or your favourite server
```
