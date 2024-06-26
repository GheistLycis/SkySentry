const config = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [
      0,
      'never',
      ['camel-case', 'pascal-case', 'kebab-case', 'snake-case'],
    ],
  },
}

export default config
