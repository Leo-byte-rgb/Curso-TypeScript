export class Carro {
  private readonly motor: Motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }
  acelerar(): void {
    this.motor.acelerar();
  }
  parar(): void {
    this.motor.parar();
  }
  desligar(): void {
    this.motor.desligar();
  }
}
export class Motor {
  ligar(): void {
    console.log('Ligar');
  }
  acelerar(): void {
    console.log('Acelerando');
  }
  parar(): void {
    console.log('Parando');
  }
  desligar(): void {
    console.log('Desligando');
  }
}

const carro = new Carro();
carro.acelerar();
