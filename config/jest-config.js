const config = {
    'rootDir': './../',
    'verbose': true,
    'collectCoverage': false,
    'collectCoverageFrom': ['./**/*.js'],
    'moduleFileExtensions': [
        'js'
    ],
    'transform': {
        '^.+\\.js$': 'babel-jest'
    },
    "setupFiles": [
        "raf/polyfill",
        "jest-localstorage-mock",
    ],
    "moduleNameMapper": {
        "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js"
    },
};

module.exports = config;