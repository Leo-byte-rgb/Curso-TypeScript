export class Empresa {
  private readonly nome: string;
  protected readonly colaboradores: Array<Colaboradores> = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaboradores): void {
    this.colaboradores.push(colaborador);
  }
  mostrarColabores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}
export class Colaboradores {
  constructor(public readonly nome: string, public readonly sobre: string) {}
}
export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11,11,11,11,11');
  }
  pop(): Colaboradores | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

const empresa = new Udemy();
const colaborador1 = new Colaboradores('Leonardo', 'Agostini');
const colaborador2 = new Colaboradores('Ruan', 'Souza');
const colaborador3 = new Colaboradores('Zanetini', 'Luiz');
empresa.adicionaColaborador(colaborador1);
empresa.adicionaColaborador(colaborador2);
empresa.adicionaColaborador(colaborador3);
empresa.adicionaColaborador(colaborador1);
empresa.adicionaColaborador(colaborador2);
empresa.adicionaColaborador(colaborador3);
const colaboradorRemovido = empresa.pop();
console.log(colaboradorRemovido);
