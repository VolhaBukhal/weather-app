/* eslint-disable */
const path = require('path');
const resolve = arg => path.resolve(__dirname, arg)

module.exports = {
  webpack: {
    alias: {
      '@components': resolve('src/components'),
      '@interfaces': resolve('src/interfaces/'),
    },
  },
};
