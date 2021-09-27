//função sem parametro () {sentença a ser executada}
function initialFunc(){
    console.log(22+32);
}
//somente lê , abaixo tem uma lógica empregada 

// invocar a função, chamo o nome da função,
 ou não será executada
initialFunc()

//função com (parametro) {sentença a ser executada}
function imc(peso, altura){
    let result = peso / (altura * altura); // valor do parametro
    return result.toFixed(2);  // return - nossa função retorna um valor específico, com duas casas decimais já aproximado
}

console.log(imc(70, 1.68));

() => {} //função anônima do tipo arrow

// não consegue fazer referência a um objeto, pois ela não irá entendê-lo
const func = () => {
    console.log('Função sem parametro do tipo arrow, sintaxe mais inchuta de uma function')
}

func();

//Função com parametro do tipo arrow
const func1 = (name) => {
    console.log(name)
}

func1('Tertu');


// dentro da pasta b-functions 
// $ node index.js