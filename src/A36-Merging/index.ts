interface Pessoa {
  nome: string;
}
interface Pessoa {
  readonly sobrenome: string;
}

const pessoa: Pessoa = {
  nome: 'Luiz',
  sobrenome: 'Mirando',
};
console.log(pessoa);
export default 1;
