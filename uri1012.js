var input = require("fs").readFileSync("/dev/stdin", "utf8");

const [A, B, C] = input.split(" ");
const PI = 3.14159;

const areaTriangulo = (A * C) / 2;
const areaCirculo = PI * (C * C);
const areaTrapezio = ((parseFloat(A) + parseFloat(B)) * C) / 2.0;
const areaQuadrado = B * B;
const areaRetangulo = A * B;

console.log(
  "TRIANGULO: " +
    areaTriangulo.toFixed(3) +
    "\nCIRCULO: " +
    areaCirculo.toFixed(3) +
    "\nTRAPEZIO: " +
    areaTrapezio.toFixed(3) +
    "\nQUADRADO: " +
    areaQuadrado.toFixed(3) +
    "\nRETANGULO: " +
    areaRetangulo.toFixed(3)
);
