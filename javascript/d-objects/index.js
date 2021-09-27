const product = {
    name: 'Iphone',
    price: 5000,
    discount: 5,
    convertPrice: function () {
        return Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(this.price)
    },
    getPrice: function () {
        let discount = (this.price * this.discount) / 100
        return Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(this.price - discount)
    }
}

//console.log(product)
//console.log(product.price)
console.log(product.convertPrice())
console.log(product.getPrice())