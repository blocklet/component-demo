const path = require('path');
const webpack = require('webpack');

module.exports = {
  webpack: (config) => {
    if (!config.resolve) {
      config.resolve = {};
    }
    if (!config.resolve.alias) {
      config.resolve.alias = {};
    }

    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, {
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "assert": require.resolve("assert"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "os": require.resolve("os-browserify"),
      "url": require.resolve("url")
    });

    config.resolve.fallback = fallback;
    config.plugins = (config.plugins || []).concat([
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer']
      })
    ])

    return config;
  },
  jest: (config) => {
    const setupFile = path.join(__dirname, './tools/jest-setup.js');
    if (Array.isArray(config.setupFiles)) {
      config.setupFiles.push(setupFile);
    } else {
      config.setupFiles = [setupFile];
    }

    return config;
  },
};
