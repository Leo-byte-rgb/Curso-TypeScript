export function add(a: unknown, b: unknown) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a} ${b}`;
}

interface Pessoa {
  nome: string;
}
interface Animal {
  cor: string;
}

type PessoaOuAnimal = Pessoa | Animal;
export class Aluno implements Pessoa {
  constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal): void {
  if (obj instanceof Aluno) console.log(obj.nome);
}

mostraNome(new Aluno('Jão'));
