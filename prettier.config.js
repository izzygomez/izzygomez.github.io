/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  printWidth: 80,
  tabWidth: 2,
  singleQuote: false,

  // Using `require.resolve()` here because of issues if I didn't use it
  // otherwise, see [1] & [2]
  // [1] https://github.com/prettier/prettier/issues/15388#issuecomment-1717746872
  // [2] https://github.com/prettier/prettier/issues/15085
  plugins: [require.resolve("@shopify/prettier-plugin-liquid")],

  overrides: [
    {
      files: "*.html",
      options: {
        parser: "liquid-html",
      },
    },
  ],
};

module.exports = config;
