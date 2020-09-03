
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
        alias: {
          pages:'./src/pages',
          components: './src/components',
          utils: './src/utils',
          api: './src/api',
          store:'./src/store'
        },
      },
    ]
  ]
};
