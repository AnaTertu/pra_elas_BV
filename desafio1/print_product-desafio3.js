const Cart = require('./cart.json');

// 3. imprimir o nome de cada produto do cart
Cart.items.map( products => console.log(products.title))


// 4 - retorna true , pois têm itens
let product2 = Cart.items.length >= 1  
console.log(product2)

// 5. retorna false
Cart.items.map( products => console.log(products.items?.title?.length >= 1))

// 6. retorna false
Cart.items.map( products => console.log(products.items?.title?.length >= 1))

// 7. retorna todo conteúdo
//console.log(Cart)
