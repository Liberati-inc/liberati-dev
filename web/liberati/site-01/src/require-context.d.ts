/** Webpack require.context — used for dynamic project discovery */
declare namespace NodeJS {
  interface Require {
    context(
      directory: string,
      useSubdirectories: boolean,
      regExp: RegExp
    ): {
      keys: () => string[];
      (id: string): { default: unknown };
    };
  }
}
