export abstract class Personagem {
  constructor(
    protected name: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    console.log(`${this.name} está atacando`);
    personagem.perderVida(this.ataque);
  }
  perderVida(forcaAtaque: number): void {
    console.log(`${this.name} está perdendo vida`);
    this.vida -= forcaAtaque;
  }
  abstract bordao(): void;
}
export class Guerreira extends Personagem {
  bordao(): void {
    console.log('IAAAAA');
  }
}
export class Monstro extends Personagem {
  bordao(): void {
    console.log('ARHHH');
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(monstro);
monstro.atacar(monstro);
