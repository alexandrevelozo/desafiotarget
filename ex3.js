// 3)
const fs = require("fs");

// Lê o arquivo JSON que contém os valores de faturamento diário
const dadosFaturamento = JSON.parse(
  fs.readFileSync("faturamento.json", "utf-8")
);

// Filtra os valores de faturamento diferentes de zero
const valoresFaturamento = dadosFaturamento.filter((valor) => valor !== 0);

// Calcula o menor e o maior valor de faturamento
const menorFaturamento = Math.min(...valoresFaturamento);
const maiorFaturamento = Math.max(...valoresFaturamento);

// Calcula a média mensal de faturamento
const mediaMensal =
  valoresFaturamento.reduce((total, valor) => total + valor, 0) /
  valoresFaturamento.length;

// Calcula o número de dias em que o valor de faturamento diário foi superior à média mensal
const diasAcimaMedia = valoresFaturamento.filter(
  (valor) => valor > mediaMensal
).length;

// Exibe as informações calculadas no console
console.log(`Menor faturamento diário: ${menorFaturamento}`);
console.log(`Maior faturamento diário: ${maiorFaturamento}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaMedia}`);
