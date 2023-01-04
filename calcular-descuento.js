const button = document.querySelector('#calcular');
const inputPrice = document.querySelector('#price');
const inputCupon = document.querySelector('#cupon');
const pResult = document.querySelector('#result');

button.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento(){
  const price = Number(inputPrice.value);
  const cupon = inputCupon.value;

  let discount;

  if (!price) {
    pResult.innerHTML = 'Ponle un precio';
    return;
  }

  switch (cupon) {
    case ('J4ck'):
      discount = 30;
      break;
    case ('J3#12'):
      discount = 12;
      break;
    default:
      pResult.innerHTML = 'No se encontraron cupones';
      return;
  }

  // if (!cupon){
  //   pResult.innerHTML = 'No se encontraron cupones';
  //   return;
  // } else if (cupon == 'J4ck'){
  //   discount = 30;
  // }else if (cupon == 'Je#12'){
  //   discount = 12;
  // } else if (cupon == false){
  //   pResult.innerHTML = 'El cupon es incorrecto';
  // } else{
  //   return;
  // }
  
  const newPrice = (price * (100 - discount) / 100);

  pResult.innerHTML = "El nuevo precio con descuento $" + newPrice;
}