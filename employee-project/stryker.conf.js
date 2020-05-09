module.exports = function (config) {
  config.set({
    mutator: 'javascript',
    packageManager: 'npm',

    files: [
      './**',
      '!.stryker-tmp/**',
      '!node_modules/**',
      '!coverage/**',
      '!test/integration/*.js'
    ],
    mutate: ['controller/**/*.js'],
    testRunner: 'jest',
    transpilers: [],
    reporter: ['html', 'clear-text', 'progress'],
    coverageAnalysis: 'off',
    jest: {
      config: require('./jest.config.js')
    },
    logLevel: "all",
    thresholds: { high: 95, low: 85, break: 56 },
    timeoutMs: 10*60*1000, // 10 minutes
  });
};