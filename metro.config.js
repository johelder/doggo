const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;
const defaultSourceExts =
  require('metro-config/src/defaults/defaults').sourceExts;

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts:
      process.env.MY_APP_MODE === 'mocked'
        ? ['mock.tsx', 'mock.ts', 'svg', ...defaultSourceExts]
        : [...sourceExts, 'svg'],
  },
};

module.exports = mergeConfig(defaultConfig, config);
