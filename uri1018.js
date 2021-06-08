var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let n = parseInt(input);

console.log(n);

let qtd = parseInt(n / 100);
console.log(qtd + " nota(s) de R$ 100,00");
n = n % 100;

qtd = parseInt(n / 50);
console.log(qtd + " nota(s) de R$ 50,00");
n = n % 50;

qtd = parseInt(n / 20);
console.log(qtd + " nota(s) de R$ 20,00");
n = n % 20;

qtd = parseInt(n / 10);
console.log(qtd + " nota(s) de R$ 10,00");
n = n % 10;

qtd = parseInt(n / 5);
console.log(qtd + " nota(s) de R$ 5,00");
n = n % 5;

qtd = parseInt(n / 2);
console.log(qtd + " nota(s) de R$ 2,00");
n = n % 2;

qtd = parseInt(n / 1);
console.log(qtd + " nota(s) de R$ 1,00");
