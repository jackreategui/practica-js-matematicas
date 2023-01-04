const button = document.querySelector('#calcular');
const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const pResult = document.querySelector('#result');

button.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento(){
  const price = Number(inputPrice.value);
  const discount = Number(inputDiscount.value);

console.log({price, discount});

  if (!price) {
    pResult.innerHTML = 'Ponle un precio';
    return;
  }

  if (!discount){
    pResult.innerHTML = 'Ponle un descuento';
    return;
  }

  if (discount >= 75){
    pResult.innerHTML = 'Escribe un descuento menor ó igual 75%';
  } else{
    const newPrice = (price * (100 - discount) / 100);
  
    pResult.innerHTML = "El nuevo precio con descuento $" + newPrice;
  }

}