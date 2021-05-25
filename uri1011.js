var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const R = parseFloat(input);
const pi = 3.14159;

const volume = (4 / 3.0) * pi * Math.pow(R, 3);

console.log("VOLUME = " + volume.toFixed(3));
