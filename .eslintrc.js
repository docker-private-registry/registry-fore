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
    'init-declarations'             : ['error', 'always'],
    'no-catch-shadow'               : 'error',
    'no-delete-var'                 : 'error',
    'no-label-var'                  : 'error',
    'no-restricted-globals'         : ['error'],
    'no-shadow-restricted-names'    : 'error',
    'no-shadow'                     : 'error',
    'no-undef-init'                 : 'error',
    'no-undef'                      : 'error',
    'no-undefined'                  : 'error',
    'no-unused-vars'                : 'error',
    'no-use-before-define'          : 'error',


    // Stylistic Issues
    'array-bracket-spacing'         : ['error', 'never'],
    'block-spacing'                 : 'error',
    'brace-style'                   : 'error',
    'camelcase'                     : 'error',
    'comma-dangle'                  : ['error', 'never'],
    'comma-spacing'                 : ['error', { 'before': false, 'after': true }],
    'comma-style'                   : ['error', 'last'],
    'computed-property-spacing'     : ['error', 'never'],
    'consistent-this'               : ['error', 'that'],
    'eol-last'                      : ['error', 'always'],
    'func-call-spacing'             : ['error', 'never'],
    'func-name-matching'            : 'error',
    'func-names'                    : ['error', 'always'],
    'func-style'                    : ['error', 'expression'],
    'id-length'                     : 'error',
    'indent'                        : ['error', 2],
    'jsx-quotes'                    : ['error', 'prefer-double'],

    'key-spacing'                   : ['error', {
      'align': {
        'beforeColon' : true,
        'afterColon'  : true,
        'on'          : 'colon',
        'mode'        : 'minimum'
      },

      'singleLine': {
        'beforeColon' : false,
        'afterColon'  : true,
        'mode'        : 'strict'
      },

      'multiLine': {
        'beforeColon' : true,
        'afterColon'  : true,
        'mode'        : 'minimum'
      }
    }],

    'keyword-spacing'               : ['error', { 'before': true, 'after': true }],
    'line-comment-position'         : ['error', { 'position': 'above' }],
    'linebreak-style'               : ['error', 'unix'],
    'lines-around-comment'          : ['error', { 'beforeBlockComment': true }],
    'lines-around-directive'        : ['error', 'always'],
    'max-depth'                     : ['error', 4],
    'max-len'                       : ['error', 80],
    'max-lines'                     : ['error', 300],
    'max-nested-callbacks'          : ['error', 4],
    'max-params'                    : ['error', 4],
    'max-statements-per-line'       : ['error', { 'max': 1 }],
    'max-statements'                : ['error', 10],
    'multiline-ternary'             : ['error', 'always'],
    'new-cap'                       : 'error',
    'new-parens'                    : 'error',
    'newline-after-var'             : ['error', 'always'],
    'newline-before-return'         : 'error',
    'newline-per-chained-call'      : ['error', { 'ignoreChainWithDepth': 2 }],
    'no-array-constructor'          : 'error',
    'no-bitwise'                    : 'error',
    'no-continue'                   : 'error',
    'no-inline-comments'            : 'error',
    'no-lonely-if'                  : 'error',
    'no-mixed-operators'            : 'error',
    'no-mixed-spaces-and-tabs'      : 'error',
    'no-multiple-empty-lines'       : 'error',
    'no-negated-condition'          : 'error',
    'no-nested-ternary'             : 'error',
    'no-new-object'                 : 'error',
    'no-plusplus'                   : 'error',
    'no-restricted-syntax'          : ['error', 'WithStatement'],
    'no-tabs'                       : 'error',
    'no-ternary'                    : 'error',
    'no-trailing-spaces'            : 'error',
    'no-underscore-dangle'          : 'error',
    'no-unneeded-ternary'           : 'error',
    'no-whitespace-before-property' : 'error',
    'object-curly-newline'          : ['error', { 'minProperties': 1 }],
    'object-curly-spacing'          : ['error', 'always'],
    'object-property-newline'       : 'error',
    'one-var-declaration-per-line'  : ['error', 'initializations'],
    'one-var'                       : ['error', { 'var': 'always', 'let': 'never', 'const': 'never' }],
    'operator-assignment'           : ['error', 'always'],
    'operator-linebreak'            : ['error', 'after'],
    'quote-props'                   : ['error', 'as-needed'],
    'quotes'                        : ['error', 'single'],
    'semi-spacing'                  : 'error',
    'semi'                          : ['error', 'always'],
    'space-before-blocks'           : 'error',
    'space-before-function-paren'   : ['error', 'never'],
    'space-in-parens'               : ['error', 'never'],
    'space-infix-ops'               : 'error',
    'space-unary-ops'               : 'error',
    'spaced-comment'                : ['error', 'always'],
    'unicode-bom'                   : 'error',
    'wrap-regex'                    : 'error',


    // ECMAScript 6
    'arrow-body-style'              : ['error', 'as-needed'],
    'arrow-parens'                  : ['error', 'always'],
    'arrow-spacing'                 : 'error',
    'generator-star-spacing'        : ['error', { 'before': true, 'after': false }],
    'no-confusing-arrow'            : 'error',
    'no-duplicate-imports'          : 'error',
    'no-useless-computed-key'       : 'error',
    'no-useless-constructor'        : 'error',
    'no-useless-rename'             : 'error',
    'no-var'                        : 'error',
    'object-shorthand'              : 'error',
    'prefer-arrow-callback'         : 'error',
    'prefer-const'                  : 'error',
    'prefer-numeric-literals'       : 'error',
    'prefer-rest-params'            : 'error',
    'prefer-spread'                 : 'error',
    'prefer-template'               : 'error',
    'rest-spread-spacing'           : ['error'],
    'sort-imports'                  : 'error',
    'symbol-description'            : 'error',
    'template-curly-spacing'        : 'error',
    'yield-star-spacing'            : ['error', { 'before': false, 'after': true }]
  }
};

