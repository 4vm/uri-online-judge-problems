var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

let totalSegundos = parseInt(lines.shift());

const horas = totalSegundos / 3600;
totalSegundos = totalSegundos % 3600;

const minutos = totalSegundos / 60;
totalSegundos = totalSegundos % 60;

console.log(
  Math.trunc(horas) +
    ":" +
    Math.trunc(minutos) +
    ":" +
    Math.trunc(totalSegundos)
);
