var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

const a = parseInt(lines.shift());
const b = parseInt(lines.shift());
const c = parseInt(lines.shift());

const maiorAB = (a + b + Math.abs(a - b)) / 2;
const maiorXC = (c + maiorAB + Math.abs(c - maiorAB)) / 2;

console.log(maiorXC + " eh o maior");
