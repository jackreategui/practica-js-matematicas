console.group("Cuadrado");

// Cuadrado

const ladoCuadrado = 6;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * 2;

// console.log({
//   ladoCuadrado,
//   perimetroCuadrado,
//   areaCuadrado,
// })

function calcularCuadrado(lado){
  return{
    perimetro: (lado * 4),
    area: (lado * 2),
  }
}

console.log(calcularCuadrado(3));

console.groupEnd("Cuadrado");

console.group("Triangulo");

// Triangulo

const ladoTriangulo1 = 4;
const ladoTriangulo2 = 4;
const ladoTrianguloBase = 6;
const alturaTriangulo = 7;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

// console.log({
//   ladoTriangulo1,
//   ladoTriangulo2,
//   ladoTrianguloBase,
//   alturaTriangulo,
//   perimetroTriangulo,
//   areaTriangulo,
// })

function calcularTriangulo(lado1, lado2, base, altura){
  return{
    perimetro: (lado1 + lado2 + base),
    area: (base * altura) / 2,
  }
}

console.log(calcularTriangulo(5, 5, 6, 8));

console.groupEnd("Triangulo");

console.group("Circulo");

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const pi = Math.PI;

const circunferencia = diametroCirculo * pi;
const areaCirculo = (radioCirculo ** 2) * pi;

console.log({
  radioCirculo,
  diametroCirculo,
  pi,
  circunferencia,
  areaCirculo,
})




console.groupEnd("Circulo");