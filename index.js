const prompt = require('prompt-sync')();

for (let i = 1; i <= 5; i++) {
  console.log(`${i}ª Pessoa`)
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
  console.log(`${nome} receberá o salário líquido de R$ ${salarioLiquido}\n`);
}