module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@app': './',
          '@assets': './src/assets',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@lib': './src/lib',
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
