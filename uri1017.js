var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const horas = parseInt(lines.shift());
const kmH = parseInt(lines.shift());

const qntLitros = (horas * kmH) / 12;

console.log(qntLitros.toFixed(3));
