module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  env: {
    'browser': true
  },
  rules: {


    // TODO

    // Possible Errors
    // Best Practices
    // Variables
    // Stylistic Issues


    // ECMAScript 6
    'arrow-body-style'        : ['error', 'as-needed'],
    'arrow-parens'            : ['error', 'always'],
    'arrow-spacing'           : 'error',
    'generator-star-spacing'  : ['error', { 'before': true, 'after': false }],
    'no-confusing-arrow'      : 'error',
    'no-duplicate-imports'    : 'error',
    'no-useless-computed-key' : 'error',
    'no-useless-constructor'  : 'error',
    'no-useless-rename'       : 'error',
    'no-var'                  : 'error',
    'object-shorthand'        : 'error',
    'prefer-arrow-callback'   : 'error',
    'prefer-const'            : 'error',
    'prefer-numeric-literals' : 'error',
    'prefer-rest-params'      : 'error',
    'prefer-spread'           : 'error',
    'prefer-template'         : 'error',
    'rest-spread-spacing'     : ['error'],
    'sort-imports'            : 'error',
    'symbol-description'      : 'error',
    'template-curly-spacing'  : 'error',
    'yield-star-spacing'      : ['error', { 'before': false, 'after': true }]
  }
};

