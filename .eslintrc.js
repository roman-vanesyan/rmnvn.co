module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:astro/recommended',
    'plugin:astro/jsx-a11y-recommended',
    'formatjs'
  ],
  'plugins': ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      rules: {}
    }
  ],

  rules: {
    'formatjs/enforce-description': ['error', 'literal'],
    'formatjs/enforce-default-message': ['error', 'literal'],
    'formatjs/enforce-id': [
      'error',
      {
        'idInterpolationPattern': '[sha512:contenthash:base64:6]'
      }
    ]
  }
};
