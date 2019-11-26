import {createConfig} from 'rollup-config-webcomponent';
const config = createConfig({
 input: {
     main: './src/index.ts',
     style: './src/index.scss',
     icon: './src/index.svg',
 },
 name:'elg',
 dir: 'demo'
});
export default [
    createConfig({
        input: {
            main: './src/index.ts',
            style: './src/index.scss',
            icon: './src/index.svg',
        },
        name:'elg',
        dir: 'demolib'
       }),
       createConfig({
           input: './src/index.ts',
           dir: 'demo',
           bundle: true
       })
];