//* Analisis personal para Jack

//* Creare una funcion que al llamarla se tendra que poner el nombre de la persona correctamente para poder sacar una mediana de sus salarios.

//* El metodo .find es el que utilizaremos, la diferencia entre .find y .filter es que .find saca el primer elemento dentro del array y .filter muestra todos los elementos que coinsiden con la peticion.

function buscarPersona(personaBuscada) {
  return salarios.find(persona => persona.name == personaBuscada);
};

