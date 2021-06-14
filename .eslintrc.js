module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
      "vue",
      "@typescript-eslint",
    ],
    "rules": {
        "@typescript-eslint/no-non-null-assertion": 0,
        "vue/no-multiple-template-root": 0
    }
};