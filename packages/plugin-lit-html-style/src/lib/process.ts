import postcss from "postcss";
import { plugins, AcceptedPlugin } from "./plugins";

export interface Options {
  file: string;
  data: string;
  plugins: AcceptedPlugin[];
}

export interface Processor {
  (options: Options): Promise<string>;
}

export const processor: Processor = (options: Options) => {
  const { file, data, plugins } = options;
  return new Promise<string>((resolve, reject) => {
    postcss(plugins)
      .process(data, { from: file })
      .then(({ css }) => resolve(css), reject);
  });
};

export default process;
export { plugins };
