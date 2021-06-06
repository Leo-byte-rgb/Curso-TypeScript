interface sobrenome {
  sobrenome: string;
}
interface nome {
  nome: string;
}
interface nomeCompleto {
  nomeCompleto(): string;
}

interface TypePeople extends nome, sobrenome, nomeCompleto {}

export class Pessoa implements TypePeople {
  constructor(public nome: string, public sobrenome: string) {}
  nomeCompleto(): string {
    return this.nome + '' + this.sobrenome;
  }
}
