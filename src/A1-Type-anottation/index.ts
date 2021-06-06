/*eslint-disable*/

let nome: string = 'Leonardo';
let idade: number = 0;
let adulto: boolean = false;
let simbolo: symbol = Symbol('Qualquer-simbol');


let array: number[] = [10, 9, 10];

array.push(1, 2, 3, 5);

console.log(array)


let pessoa:  { nome?: string; idade?: number; adulto?: boolean; } = {
  nome: 'Leonardo',
  idade: 18,
  adulto: true
};

console.log(pessoa)


function sum( x: number, y: number): number {
  return x + y;
}

const soma = sum(2, 5);

const soma2: (x : number, y : number) => number = (x , y) => x + y;

function showMessage(msg: string): void {
  return console.log(`Mensagem: ${msg}`)
}

showMessage('olá');


function noReturn(): void {
  console.log('Essa é uma função sem retorno');
}

noReturn();

function stringToNumber(str: string): number {
  return Number(str);
}

console.log(stringToNumber('10'))

const soma3 : (x : number, y : number) => void = (x : number, y : number) => {
  console.log(x * y)
};

soma3(2, 3)

const people : { nome: string, sobrenome?: string, idade: number, exibirNome(): string } = {
  nome: 'Leonardo',
  sobrenome: 'Agostini',
  idade: 18,

  exibirNome() {
    return `olá ${this.nome} ${this.sobrenome}, sua idade é ${this.idade} anos`
  }

}

console.log(people.exibirNome())


