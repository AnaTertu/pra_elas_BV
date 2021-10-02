const Cart = require('./cart.json');

let product = Cart.items?.length
console.log('Total de itens no carrinho: ', product)  // retorna quantidade de itens

let qtd = Cart.items.reduce((acc, current) => acc + current.quantity, 0)
console.log('Quantidade total comprada: ', qtd)  //retorna quantidade de total selecionada


// 1. calcular a quantidade de produtos no objeto cart
