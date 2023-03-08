const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

// Calcula o valor total do faturamento mensal da distribuidora
const valorTotal = Object.values(faturamento).reduce(
  (total, valor) => total + valor,
  0
);

// 4)
// Calcula o percentual de representação de cada estado
const percentuais = {};
for (const estado in faturamento) {
  percentuais[estado] = (faturamento[estado] / valorTotal) * 100;
}

// Exibe os percentuais de representação de cada estado no console
for (const estado in percentuais) {
  console.log(`${estado}: ${percentuais[estado].toFixed(2)}%`);
}
