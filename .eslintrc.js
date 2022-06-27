module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    semi: [2, 'never'],
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        semi: [2, 'never'],
      },
    },
  ],
  globals: {
    GLOBAL: true,
    __DEV__: true,
  },
}
