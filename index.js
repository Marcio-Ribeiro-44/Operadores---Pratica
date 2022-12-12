const prompt = require('prompt-sync')();

nome = prompt(`Digite o seu nome: `);
salarioBruto = parseFloat(prompt(`Informe o salário bruto: `));
faixa1 = salarioBruto > 0 && salarioBruto <= 1903.98;
faixa2 = salarioBruto <= 2826.65;
faixa3 = salarioBruto >= 2826.66;
ir = salarioBruto * 0.075;
ir = salarioBruto * 0.15;
if (faixa1) {
  var ir = salarioBruto * 0.05;
} else if (faixa2) {
  var ir = salarioBruto * 0.075
} else {
  var ir = salarioBruto * 0.15
}
salarioLiquido = salarioBruto - ir
console.log(`${nome} receberá o salário líquido de R$ ${salarioLiquido}`);