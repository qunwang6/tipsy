/* eslint-disable no-underscore-dangle, no-var, vars-on-top */
declare global {
  // these are statically replaced by the Vite define config at build time
  var __COMMIT__: string;
  var __VERSION__: string;
}

export {};
