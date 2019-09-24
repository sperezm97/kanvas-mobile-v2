module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./path-to-assets'], // stays the same
  commands: require('./path-to-commands.js'), // formerly "plugin", returns an array of commands
};
