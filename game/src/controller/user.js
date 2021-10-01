// Commonjs - forma de importação do JS moderno o EcmonScript
const MachineOption = require('./machine'); // importo o MachineOption pois quero acessar o metodo sort
const inquirer = require('inquirer');
const option = require('../data/index');
const gameBy = require('../data/by');

class User extends MachineOption {  // class User herda propriedades da class MachineOption
    constructor({opt, name, selected}){
        super({ opt }); //criação da lógica do jogo
        this._name = name; //metodo interno que recebe o parametro que está dentro do constructor
        this._selected = selected;
        this._sort = this.sort() //chama ele mesmo - o metodo sort criado na class MachineOption, o metodo pai dentro da estrutura, está salvando o retorno do pai
    }
    set name (string){ 
        this._name = string; // o resultado do jogo é tradado através do nome escolhido que é uma string
    }
    set selected(string){
        this._selected = string;
    }
    get name(){
        return this._name;
    }
    get selected(){
        return this._selected;
    }

    logic(){
        if( this._selected === this._sort){ // se ( _selected exatamente igual _sort)
            return `${this._name}, a máquina escolheu ${this._sort} e você escolheu ${this.selected} - resultado => você empatou!`
        } else if (
            (this._selected === 'Pedra' && this._sort === 'Tesoura' ) ||
            (this._selected === 'Tesoura' && this._sort === 'Papel' ) ||
            (this._selected === 'Papel' && this._sort === 'Pedra' ) 
        ){
            return `${this._name}, a máquina escolheu ${this._sort} e você escolheu ${this.selected} - resultado => você ganhou!`
        } else {
            return `${this._name}, a máquina escolheu ${this._sort} e você escolheu ${this.selected} - resultado => você perdeu!`
        }
    }
    game(){
        console.info(gameBy);
        return inquirer.prompt([
            {
                name: 'name',
                message: 'Qual seu nome? ',
                default: 'Jogador'
            },
            {
                type: 'list',
                name: 'jokenpo',
                message: 'Selecione uma das opções: ',
                choices: option
            }
        ]).then((resposta) => {
            this._name = resposta.name
            this._selected = resposta.jokenpo
            console.info(`${this.logic()}`)
        })
    }
}

module.exports = User;

//instalamos a dependencia- $ npm i inquirer - que trouxe o node_modules
//gitignore - node_modules (toda pasta declarada aqui dentro não subirá para o git)
