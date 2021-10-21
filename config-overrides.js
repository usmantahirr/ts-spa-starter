const path = require('path');

module.exports = function override(config) {
  // eslint-disable-next-line no-param-reassign
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src/'),
      '@api': path.resolve(__dirname, 'src/api/'),
      '@configs': path.resolve(__dirname, 'src/configs/'),
      '@components': path.resolve(__dirname, 'src/shared/components/'),
      '@pages': path.resolve(__dirname, 'src/shared/pages/'),
      '@templates': path.resolve(__dirname, 'src/shared/templates/'),
      '@modules': path.resolve(__dirname, 'src/shared/modules/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@types': path.resolve(__dirname, 'src/types/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.d.ts'],
  };
  return config;
};
