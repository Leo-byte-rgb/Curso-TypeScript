export class Pessoa {
  constructor(
    public name: string,
    public sobrenome: string,
    private age: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.age;
  }
  getCpf(): string {
    return this.cpf;
  }
  getNomeCompleto(): void {
    return console.log(`${this.name} ${this.sobrenome}`);
  }
}

export class Aluno extends Pessoa {
  constructor(
    name: string,
    sobrenome: string,
    age: number,
    cpf: string,
    public sala: string,
  ) {
    super(name, sobrenome, age, cpf);
  }
}
export class Cliente extends Pessoa {}
