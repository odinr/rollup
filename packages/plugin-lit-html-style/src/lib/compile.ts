import nodeSass, { Result as nodeSassResult } from "node-sass";

export interface Options {
  file: string;
  data: string;
}

export interface Result {
  data: string;
}

export interface Compiler {
  (options: Options): Promise<Result>;
}

export const compiler: Compiler = (options: Options): Promise<Result> =>
  new Promise((resolve, reject) => {
    const resolved = ({ css }: nodeSassResult) =>
      resolve({ data: css.toString() });
    nodeSass.render(options, (err, res) => (err ? reject(err) : resolved(res)));
  });

export default compiler;
