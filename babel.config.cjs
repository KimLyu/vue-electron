module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@vue/babel-preset-jsx',
      {
        'injectH': false,
        useBuiltIns: 'usage',
      }
    ]
  ]
}
