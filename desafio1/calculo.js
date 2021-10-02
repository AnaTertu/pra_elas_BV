const Cart = require('./cart.json');

const total1 = [ Cart.items[0].quantity * Cart.items[0].price]
console.log('Este produto custará: R$', total1);

const total2 = [ Cart.items[1].quantity * Cart.items[1].price]
console.log('Este produto custará: R$,', total2);

const total3 = [ Cart.items[2].quantity * Cart.items[2].price]
console.log('Este produto custará: R$', stotal3);

const calcTotal = [ (Cart.items[0].quantity * Cart.items[0].price) + (Cart.items[1].quantity * Cart.items[1].price) + (Cart.items[2].quantity * Cart.items[2].price)]
console.log('Sua compra total foi: ', calcTotal)

// // 2. somar o valor total do cart
