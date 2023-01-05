const salario = [212, 31121, 131, 311, 3532];

function calcularSalarioPromedio(salarioLista){

  let sumaSalario = 0;
  
  for (let i = 0; i < salarioLista.length; i++) {
    sumaSalario = sumaSalario + salarioLista[i];
  }
  
  const promedio = sumaSalario / salarioLista.length;
  return promedio;
};

console.log(calcularSalarioPromedio(salario));