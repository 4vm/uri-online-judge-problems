var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

var peca1 = lines.shift().split(' ')
var peca2 = lines.shift().split(' ')

var codPeca1 = peca1.shift()
var qntPeca1 = parseInt(peca1.shift())
var valorPeca1 = parseFloat(peca1.shift())
var subtotal1 = qntPeca1 * valorPeca1

var codPeca2 = peca2.shift()
var qntPeca2 = parseInt(peca2.shift())
var valorPeca2 = parseFloat(peca2.shift())
var subtotal2 = qntPeca2 * valorPeca2

var total = subtotal1 + subtotal2

console.log('VALOR A PAGAR: R$ ' + total.toFixed(2))
