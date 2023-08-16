module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
<<<<<<< HEAD
  extends: "eslint:recommended",
=======
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
>>>>>>> 0d991fa93388f8b5536ac104cd16815dba7abdd1
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
<<<<<<< HEAD
  rules: {},
};
=======
  rules: {
    indent: ["error", 2],
  },
};
>>>>>>> 0d991fa93388f8b5536ac104cd16815dba7abdd1
