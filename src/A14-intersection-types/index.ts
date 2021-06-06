type temNome = { nome: string };
type temSobre = { sobre: string };
type temIdade = { idade: number };

type Pessoa = temNome & temSobre & temIdade;

const pessoa: Pessoa = {
  nome: 'Leonardo',
  sobre: 'Sogstine',
  idade: 17,
};
console.log(pessoa);

export default 2;
