import { getSupport, BrowserSupport } from "caniuse-api";

export const es6Support: BrowserSupport = getSupport("es6-module");

export const es6Supported = Object.keys(es6Support)
  .filter(browser => !!es6Support[browser].y)
  .map(browser => {
    return { browser, version: es6Support[browser].y };
  });

export const es6String = es6Supported
  .map(({ browser, version }) => `${browser}>=${version}`)
  .join(",");

export default es6String;
