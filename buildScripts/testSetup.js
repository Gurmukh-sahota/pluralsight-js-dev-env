// this file isnt transpiled so must use CommonJS and ES5

// Register babe to transpile before out tests run
require("babel-register")();

// disable webpack features that Mocha doesnt understand
require.extensions[".css"] = function(){};
