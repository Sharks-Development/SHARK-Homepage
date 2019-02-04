module.exports = {
    "extends": ["plugin:monorepo/recommended", "airbnb", "jest-enzyme"],
    globals: {
    },
    "env": {
      "jest": true
    },
    "root": true,
    rules: {
      'max-len': [0, { code: 100, ignoreStrings: true  }],
      indent: ['warn', 2],
      "no-unused-vars": ["warn"],
      'no-warning-comments': ["error", {"terms": ["fixme", "todo"]}],
      "import/no-extraneous-dependencies": 0,
      "no-unneeded-ternary": 0,
      "no-underscore-dangle": ["error", { "allowAfterThis": true }]
  
    }
  };