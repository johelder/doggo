module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
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
