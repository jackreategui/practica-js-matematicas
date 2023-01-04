const button = document.querySelector('#calcular');
const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const pResult = document.querySelector('#result');

button.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento(){
  const price = inputPrice.value;
  const discount = inputDiscount.value;

  const newPrice = (price * (100 - discount) / 100);

  pResult.innerHTML = "El nuevo precio con descuento $" + newPrice;
}