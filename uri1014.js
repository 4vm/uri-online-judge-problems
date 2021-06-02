var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const X = parseInt(lines.shift());
const Y = parseFloat(lines.shift());

const consumo = X / Y;

console.log(consumo.toFixed(3) + " km/l");
