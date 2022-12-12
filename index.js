const prompt = require('prompt-sync')();

let nome = prompt(`Digite seu nome: `);
let salarioBruto = parseFloat(prompt(`Digite seu salário bruto: `));
let impostoDeRenda = salarioBruto * 0.10;
let salarioLiquido = salarioBruto - impostoDeRenda;

console.log(`Salário Líquido: R$ ${salarioLiquido}`);