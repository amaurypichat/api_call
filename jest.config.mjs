
  // "jest": {
    // "moduleFileExtensions": [
      // "js",
      // "json",
      // "vue"
    // ],
    // "transform": {

      // ".*\\.(vue)$": "vue-jest",
	  // ".*\\.(js)$": "babel-jest"
    // }

  // }

/** @type {import('jest').Config} */
const config = {

      //"testEnvironment": "jsdom",
      transform: {
        '\\.(js|jsx)$': ['babel-jest', { configFile: './babel.config.testing.js' }],
		".*\\.(vue)$": "vue-jest",
      },
      "roots": ["test/"]
  };
  
export default config;