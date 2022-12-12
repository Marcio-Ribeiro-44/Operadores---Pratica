const prompt = require('prompt-sync')();

// Comandos de Decisão Aninhados

x = parseFloat(prompt(`Digite o valor de x: `))
y = parseFloat(prompt(`Digite o valor de y: `))
z = parseFloat(prompt(`Digite o valor de z: `))

if ((x + y > z) && (x + z > y) && (y + z > x)) {
  if ((x === y) && (y === z)) {
    console.log(`Triângulo Equilátero!`)
  } else if ((x === y) || (x === z) || (y === z)) {
    console.log(`Triângulo Isósceles!`)
  } else {
    console.log(`Triângulo Escaleno!`)
  }
} else {
  console.log(`Os lados não formam um triângulo!`)
}

// prática
nome = prompt(`Digite o seu nome: `);
salarioBruto = parseFloat(prompt(`Informe o salário bruto: `));
dependentes = parseInt(prompt(`Digite o número de dependentes: `))
renda_percapita = salarioBruto / (dependentes + 1)
faixa1 = salarioBruto > 0 && salarioBruto <= 1903.98;
faixa2 = salarioBruto <= 2826.65;
faixa3 = salarioBruto >= 2826.66;

if (renda_percapita >= 500) {
  if (faixa1) {
    var ir = salarioBruto * 0.05;
  } else if (faixa2) {
    var ir = salarioBruto * 0.075
  } else {
    var ir = salarioBruto * 0.15
  }
} else {
  var ir = 0
}
salarioLiquido = salarioBruto - ir
console.log(`${nome} receberá o salário líquido de R$ ${salarioLiquido}`);