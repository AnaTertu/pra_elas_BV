// reducer

// muito usado pra soma - como num carrinho de compras

const initialValues = [ 1, 2, 3, 4, 5, 6 ]; // percorrer todos os valores e somá-los no final
const calcReduce = (value1, current1) => value1 + current1

let reduceResult = initialValues.reduce(calcReduce)
console.log('resultado', reduceResult)

//initialValues.reduce( calcReduce, initialValues.length)

// rest operator
