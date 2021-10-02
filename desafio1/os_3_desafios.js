const Cart = require('./cart.json');

// 3. imprimir o nome de cada produto do cart
for (let i = 0; i < Cart.items.length; i++) {
    console.log(
        'Produto comprado: ',
        Cart.items[i].title,
        '\n Quantidade: ',
        Cart.items[i].quantity,
        '\n Valor pago: R$',
        Cart.items[i].price,
    )
}

// 1. calcular a quantidade de produtos no objeto cart
let qtd = Cart.items.reduce((acc, current) => acc + current.quantity, 0)
console.log('Quantidade total comprada: ', qtd)

// 2. somar o valor total do cart
let totalValue = Cart.items
    .map(item => item.quantity * item.price)
    .reduce((acc, current) => acc + current, 0)
    console.log('Total: R$', totalValue);
