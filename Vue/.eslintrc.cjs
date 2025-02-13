module.exports = {
  root: true,
  extends: ['devextreme/spell-check'],
  overrides: [{
    files: ['*.ts', '*.vue'],
    extends: ['devextreme/vue'],
    env: { es6: true },
    parserOptions: {
      project: './tsconfig.json',
      'createDefaultProgram': true,
      'ecmaVersion': 6,
    },
    globals: {
      System: false,
      AzureGateway: false,
      AzureFileSystem: false,
    },
  }]
};
