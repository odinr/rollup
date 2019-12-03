import { resolve } from "path";

interface CallbackData {
  file?: string;
  contents?: string;
}
export const importer = (
  url: string,
  _prev: string,
  done: (data?: CallbackData) => void
) => {
  if (url.match(/^\./)) {
    return done();
  }
  const file = resolve(process.cwd(), "node_modules", url);
  return done({ file });
};

export default importer;
