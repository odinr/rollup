# rollup-config-webcomponent
[![Published on npm](https://img.shields.io/npm/v/rollup-config-webcomponent.svg)](https://www.npmjs.com/package/rollup-config-webcomponent)

## Options
**name** `:string`

**input** `:string`

**ecma** `:number?`

## Enviroment
```
rollup -c --environment compress,bundle,ecma:[5|6]
```

**compress**

when enabled, this will apply plugin `cssnano` to style and `terser` to javascript

**bundle** 

When enabled files are output to `./dist` and all imports are included, when disabled `package.depencies` + `tslib` are marked as external. 

**ecma** `:5|6 defaul:6 (esmodules === 6)`
