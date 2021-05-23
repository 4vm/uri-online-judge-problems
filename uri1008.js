var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const number = parseInt(lines.shift());
const workedHours = parseInt(lines.shift());
const hourlyRate = parseFloat(lines.shift());

const salary = workedHours * hourlyRate;

console.log(`NUMBER = ${number}\nSALARY = U$ ${salary.toFixed(2)}`);
