import {createConfig} from 'rollup-config-webcomponent';
const config = createConfig({
 input: './src/index.ts',
 name:'elg'
});
export default config;