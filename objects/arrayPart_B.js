const persons = [ // objeto sempre compõe chave e valor
    {name: 'Ana', age: 25, family:'brothers'},
    {name: 'Carolina', age: 14},
    {name: 'Vanessa', age: 60},
    {name: 'Julio', age: 18}
]

//metodos que manipulam Array esperam uma arrow function dentro deles

//////   Metodo filter

//passo parametros pois estou percorrendo elementos do array
//podemos usar dois parametro  1- a referencia dele mesmo - 2 -indice
let filterResult = persons.filter( person => person.age > 18 )
console.log( persons );
console.log(filterResult);

let filterResult1 = persons.filter((person, index) => {
    console.log(index)
    person.age > 15  //dentro do {} não retorna nada
    console.log(person)
})
console.log(filterResult1); // retorna [] vazio

let filterResult2 = persons.filter((person) => person.name.length > 6 ) //somente um parametro não necessita de () , como representado na linha 12
console.log(filterResult2);

let filterResult3 = persons.filter( person => person?.family?.length >= 1)
console.log(filterResult3);

////// Metodo map

// gerenciador de relacionamento com uma estrutura backend e o banco de dados
// consumir e injetar dados no banco de dados, se relaciona com várias tabelas,
// map tbm acessa várias matrizes e gera uma conexão com cada model - orm
// orm - gerenciador de relacionamente de um estrutura back-end com o banco de dados

persons.map( person => console.log('com map' + person))
persons.forEach( person => console.log('com forEach' , person))  


////// Metodo find

let personFind = persons.find( person => person.name === 'Vanessa')
console.log(personFind)

// [ 
//     {
//         name: '', age: 12, family:[...{}]
//     },
//     {
//         name: '', age: 12, family:[...{}]
//     },{
//         name: '', age: 12, family:[...{}]
//     }
// ]

// class Person{
//     _name
//     constructor(name){
//         this._name = name;
//     }
//     result(){}
// }

// reducer

const calcAge = (value, current) => value.age + current.age
const ageValue = persons.filter( person => person.age)

let personResult = persons.reduce(calcAge)
console.log('calculo de idade', personResult)

let personResult1 = ageValue.reduce((val, current) => val.age + current.age)
console.log('calculo de idade', personResult1)

//let allAge = persons.reduce((anterior, atual) => [..anterior.age, ..atual.age] )

//initialValues.reduce( calcReduce, initialValues.length)

// rest operator
