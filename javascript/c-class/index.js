//class chama ela mesma com o this faz esta referência a ela
class Calculation{  //tem que ser passado o método constructor, 
    constructor( _height, _width){ // e nele temos (parâmetros)
    this._height = _height; // que precisam ser retornados dentro dele e o this 
    this._width = _width; // e temos que referenciá-lo
    }
    //metodos que nós nomeamos
    answer(){
       return this._height * this._width;
    }
}

// para acessá-lo
let anyValue = new Calculation(2, 3)

// retornamos e acessamos
console.log(anyValue.answer())