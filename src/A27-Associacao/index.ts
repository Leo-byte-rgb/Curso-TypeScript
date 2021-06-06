export class Escritor {
  private _ferramenta : Ferramenta | null;
  constructor(private _nome: string) {}
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;
  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(this.nome + 'está escrevendo');
  }
}
export class MáquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log
  }
}
