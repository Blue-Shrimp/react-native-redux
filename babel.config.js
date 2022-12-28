module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        global: ['./'],
        extensions: ['.js', '.json'],
        alias: {
          '@root': './',
          '@stores': './src/store',
          '@screens': './src/screen',
        },
      },
    ],
  ],
}
