var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const nome = lines.shift();
const salario = parseFloat(lines.shift());
const totalVendas = parseFloat(lines.shift());

const total = salario + totalVendas * 0.15;

console.log("TOTAL = R$ " + total.toFixed(2));
