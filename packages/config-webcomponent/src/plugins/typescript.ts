import * as TypeScript from "typescript";
import TypeScript2 from 'rollup-plugin-typescript2';
import {Partial} from 'rollup-plugin-typescript2/dist/partial';
import {IOptions} from 'rollup-plugin-typescript2/dist/ioptions';

export interface Options extends Partial<IOptions> {
 typescript?: typeof TypeScript,
 verbosity?: number;
}

export const plugin = (o?:Partial<IOptions>): any => {
 const {
  typescript=TypeScript,
  verbosity=0,
 } = o || {};
 return TypeScript2({
  typescript,
  verbosity,
 });
}

export default plugin;