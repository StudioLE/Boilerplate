module.exports = {
  'env': {
    'browser': true,
    'jquery': true,
    'es6': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 6
  },
  'globals': {
    'chrome': false
  },
  'rules': {
    'accessor-pairs': 'warn',
    'array-bracket-newline': ['warn', 'consistent'],
    'array-bracket-spacing': ['warn', 'always'],
    'array-callback-return': 'warn',
    'array-element-newline': 'off',
    'arrow-body-style': 'warn',
    'arrow-parens': 'warn',
    'arrow-spacing': 'warn',
    'block-scoped-var': 'warn',
    'block-spacing': 'warn',
    'brace-style': [
      'warn',
      'stroustrup'
    ],
    'callback-return': 'warn',
    'camelcase': 'off',
    'capitalized-comments': 'off',
    'class-methods-use-this': 'warn',
    'comma-dangle': 'warn',
    'comma-spacing': [
      'warn',
      {
        'after': true,
        'before': false
      }
    ],
    'comma-style': 'warn',
    'complexity': 'warn',
    'computed-property-spacing': [
      'warn',
      'never'
    ],
    'consistent-return': 'warn',
    'consistent-this': 'warn',
    'curly': [
      'warn',
      'multi'
    ],
    'default-case': 'warn',
    'dot-location': [
      'warn',
      'property'
    ],
    'dot-notation': 'warn',
    'eol-last': [
      'warn',
      'always'
    ],
    'eqeqeq': 'off',
    'func-call-spacing': 'warn',
    'func-name-matching': 'warn',
    'func-names': 'off',
    'func-style': [
      'warn',
      'expression'
    ],
    'function-paren-newline': 'warn',
    'generator-star-spacing': 'warn',
    'global-require': 'warn',
    'guard-for-in': 'warn',
    'handle-callback-err': 'warn',
    'id-blacklist': 'warn',
    'id-length': 'off',
    'id-match': 'warn',
    'implicit-arrow-linebreak': 'warn',
    'indent': ['warn', 2, {
      'ArrayExpression': 1,
      'ObjectExpression': 1,
      'MemberExpression': 0
    }],
    'indent-legacy': 'off',
    'init-declarations': 'off',
    'jsx-quotes': 'warn',
    'key-spacing': 'warn',
    'keyword-spacing': 'off',
    'line-comment-position': 'warn',
    'lines-around-comment': 'warn',
    'lines-around-directive': 'warn',
    'lines-between-class-members': 'warn',
    'max-classes-per-file': 'warn',
    'max-depth': 'warn',
    'max-len': 'off',
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'warn',
    'max-params': 'warn',
    'max-statements': 'off',
    'max-statements-per-line': 'warn',
    'multiline-comment-style': [
      'warn',
      'separate-lines'
    ],
    'multiline-ternary': 'warn',
    'new-parens': 'warn',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': 'off',
    'no-alert': 'warn',
    'no-array-constructor': 'warn',
    'no-async-promise-executor': 'warn',
    'no-await-in-loop': 'warn',
    'no-bitwise': 'warn',
    'no-buffer-constructor': 'warn',
    'no-caller': 'warn',
    'no-catch-shadow': 'warn',
    'no-confusing-arrow': 'warn',
    'no-console': 'off',
    'no-continue': 'warn',
    'no-div-regex': 'warn',
    'no-duplicate-imports': 'warn',
    'no-else-return': 'off',
    'no-empty-function': 'warn',
    'no-eq-null': 'warn',
    'no-eval': 'warn',
    'no-extend-native': 'warn',
    'no-extra-bind': 'warn',
    'no-extra-label': 'warn',
    'no-extra-parens': 'off',
    'no-floating-decimal': 'warn',
    'no-implicit-coercion': 'warn',
    'no-implicit-globals': 'warn',
    'no-implied-eval': 'warn',
    'no-inline-comments': 'warn',
    'no-inner-declarations': [
      'warn',
      'functions'
    ],
    'no-invalid-this': 'off',
    'no-iterator': 'warn',
    'no-label-var': 'warn',
    'no-labels': 'warn',
    'no-lone-blocks': 'warn',
    'no-lonely-if': 'warn',
    'no-loop-func': 'warn',
    'no-magic-numbers': 'off',
    'no-misleading-character-class': 'warn',
    'no-mixed-operators': 'warn',
    'no-mixed-requires': 'warn',
    'no-multi-assign': 'warn',
    'no-multi-spaces': 'warn',
    'no-multi-str': 'warn',
    'no-multiple-empty-lines': 'warn',
    'no-native-reassign': 'warn',
    'no-negated-condition': 'warn',
    'no-negated-in-lhs': 'warn',
    'no-nested-ternary': 'warn',
    'no-new': 'warn',
    'no-new-func': 'warn',
    'no-new-object': 'warn',
    'no-new-require': 'warn',
    'no-new-wrappers': 'warn',
    'no-octal-escape': 'warn',
    'no-param-reassign': 'off',
    'no-path-concat': 'warn',
    'no-plusplus': 'off',
    'no-process-env': 'warn',
    'no-process-exit': 'warn',
    'no-proto': 'warn',
    'no-prototype-builtins': 'warn',
    'no-restricted-globals': 'warn',
    'no-restricted-imports': 'warn',
    'no-restricted-modules': 'warn',
    'no-restricted-properties': 'warn',
    'no-restricted-syntax': 'warn',
    'no-return-assign': 'warn',
    'no-return-await': 'warn',
    'no-script-url': 'warn',
    'no-self-compare': 'warn',
    'no-sequences': 'warn',
    'no-shadow': 'warn',
    'no-shadow-restricted-names': 'warn',
    'no-spaced-func': 'warn',
    'no-sync': 'warn',
    'no-tabs': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-ternary': 'warn',
    'no-throw-literal': 'warn',
    'no-trailing-spaces': [
      'warn',
      {
        'ignoreComments': true,
        'skipBlankLines': true
      }
    ],
    'no-undef-init': 'warn',
    'no-undefined': 'off',
    'no-underscore-dangle': 'warn',
    'no-unmodified-loop-condition': 'warn',
    'no-unneeded-ternary': 'warn',
    'no-unused-expressions': 'warn',
    'no-unused-vars': 'warn',
    'no-use-before-define': 'off',
    'no-useless-call': 'warn',
    'no-useless-computed-key': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-rename': 'warn',
    'no-useless-return': 'warn',
    'no-var': 'off',
    'no-void': 'warn',
    'no-warning-comments': [
      'warn',
      {
        'location': 'start'
      }
    ],
    'no-whitespace-before-property': 'warn',
    'no-with': 'warn',
    'nonblock-statement-body-position': 'warn',
    'object-curly-newline': ['warn', { 'consistent': true }],
    'object-curly-spacing': ['warn', 'always'],
    'object-property-newline': 'warn',
    'object-shorthand': [
      'warn',
      'properties'
    ],
    'one-var': 'off',
    'one-var-declaration-per-line': [
      'warn',
      'initializations'
    ],
    'operator-assignment': 'warn',
    'operator-linebreak': 'warn',
    'padded-blocks': 'off',
    'padding-line-between-statements': 'warn',
    'prefer-arrow-callback': 'off',
    'prefer-const': 'warn',
    'prefer-destructuring': 'off',
    'prefer-numeric-literals': 'warn',
    'prefer-object-spread': 'warn',
    'prefer-promise-reject-errors': 'warn',
    'prefer-reflect': 'warn',
    'prefer-rest-params': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'off',
    'quote-props': ['warn', 'consistent-as-needed'],
    'quotes': [
      'warn',
      'single'
    ],
    'radix': 'warn',
    'require-atomic-updates': 'warn',
    'require-await': 'warn',
    'require-jsdoc': 'off',
    'require-unicode-regexp': 'warn',
    'rest-spread-spacing': 'warn',
    'semi': ['warn', 'never'],
    'semi-spacing': [
      'warn',
      {
        'after': true,
        'before': false
      }
    ],
    'semi-style': 'warn',
    'sort-imports': 'warn',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-blocks': 'warn',
    'space-before-function-paren': 'off',
    'space-in-parens': 'off',
    'space-infix-ops': 'warn',
    'space-unary-ops': [
      'warn',
      {
        "words": true,
        "nonwords": false,
        "overrides": {
          "!": true
        }
      }
    ],
    'spaced-comment': [
      'warn',
      'always'
    ],
    'strict': 'off',
    'switch-colon-spacing': 'warn',
    'symbol-description': 'warn',
    'template-curly-spacing': 'warn',
    'template-tag-spacing': 'warn',
    'unicode-bom': [
      'warn',
      'never'
    ],
    'valid-jsdoc': 'off',
    'vars-on-top': 'off',
    'wrap-iife': 'warn',
    'wrap-regex': 'warn',
    'yield-star-spacing': 'warn',
    'yoda': [
      'warn',
      'never'
    ]
  }
}
