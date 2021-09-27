class MachineOption{
    constructor({opt}){ // dentro do constructor temos um parametro aqui é um objeto 
        this._opt = opt; // _opt metodo interno da class = o opt é o que recebo de parametro dela
    }

    sort(){  // o metodo sort percorre o valor informado no data index.js e sorteia um valor
        const sortResult = Math.floor(Math.random() * 3 - 0); // tem que ser um num int, pois será acessado atraves do indice do array -- floor - arredonda , radom - escolhe
        return this._opt[sortResult].name
    }

    set opt(option){ //add valor a class (option - escolher um nome perto do que irá representar )
        this._opt = option;
    }

    get opt(){ // recebe o valor da class
        return this._opt;
    }
}

module.exports = MachineOption;
