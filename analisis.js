// * Analisis personal para Jack

// * Creare una funcion que al llamarla se tendra que poner el nombre de la persona correctamente para poder sacar una mediana de sus salarios.

// * El metodo .find es el que utilizaremos, la diferencia entre .find y .filter es que .find saca el primer elemento dentro del array y .filter muestra todos los elementos que coinsiden con la peticion.

function buscarPersona(personaBuscada) {
  return salarios.find(persona => persona.name == personaBuscada);
};

function medianaPorPersona(nombrePersona){
  const trabajos = buscarPersona(nombrePersona).trabajos;

  const salarios = trabajos.map(elemento => {return elemento.salario});

  const medianaSalarios = PlatziMath.calcularMediana(salarios);

  console.log(salarios);
  return medianaSalarios;
}

function aumentoSalarioPersona(nombrePersona) {
  const trabajos = buscarPersona(nombrePersona).trabajos;

  let porcentajesCrecimiento = [];

  for (let i = 1; i < trabajos.length; i++) {
    const salarioActual = trabajos[i].salario;
    const salarioPasado = trabajos[i - 1].salario;
    const crecimiento = salarioActual - salarioPasado;
    const porcentajeCrecimiento = crecimiento / salarioPasado;

    porcentajesCrecimiento.push(porcentajeCrecimiento);
  }
  
  const medianaPorcentajeCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

  // console.log(porcentajesCrecimiento, medianaPorcentajeCrecimiento);

  const ultimoSalario = trabajos[trabajos.length - 1].salario;
  const aumento = ultimoSalario * medianaPorcentajeCrecimiento;
  const nuevoSalario = ultimoSalario + aumento;

  return nuevoSalario;
}