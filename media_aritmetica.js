//*Metodo for

// const salario = [212, 31121, 131, 311, 3532];

// function calcularSalarioPromedio(salarioLista){

//   let sumaSalario = 0;
  
//   for (let i = 0; i < salarioLista.length; i++) {
//     sumaSalario = sumaSalario + salarioLista[i];
//   }
  
//   const promedio = sumaSalario / salarioLista.length;
//   return promedio;
// };

// console.log(calcularSalarioPromedio(salario));


//*Saber si un numreo es par

function esPar(lista){
  return !(lista.length % 2);
}
function esImpar(lista) {
  return (lista.length % 2);
}

function calcularModa(lista) {
  const listaElementos = {};

  for (let i = 0; i < lista.length; i++) {
    const element = lista[i];

    if (listaElementos[element]) {
      listaElementos[element] += 1;
    } else {
      listaElementos[element] = 1;
    }
  }
  
  console.log(listaElementos);
}

function calcularMediana(listaDesordenada) {

  const lista = ordenarLista(listaDesordenada);
  const listaEsPar = esPar(lista);

  if (listaEsPar) {
    const mitad1 = lista[(lista.length / 2) - 1];
    const mitad2 = lista[lista.length / 2];

    const listaMitades = [mitad1, mitad2];

    return calcularPromedio(listaMitades);

  } else{
    const indexMitadListaImpar = Math.floor(lista.length / 2);
    const medianaImpar = lista[indexMitadListaImpar];
    // console.log(indexMitadListaImpar);
    console.log(medianaImpar);
    return medianaImpar;
  }
}

//*Saber ordenar una lista

function ordenarLista(listaDesordenada) {
  const lista = listaDesordenada.sort((a, b) => a - b);

  return lista;
}


//*Metodo .reduce - Calcular promedio


function calcularPromedio(lista){
  const sumaLista = lista.reduce((acumulado, elemento) => acumulado + elemento);

  const promedio = sumaLista / lista.length;
  return promedio;
}