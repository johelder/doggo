module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@providers': './src/providers',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@services': './src/services',
          '@theme': './src/styles/theme',
          '@types': './src/types',
          '@utils': './src/utils',
          '@data': './src/data',
          '@infrastructure': './src/infrastructure',
          '@domain': './src/domain',
          '@test': './src/test',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        ModuleName: '@env',
        path: '.env',
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
