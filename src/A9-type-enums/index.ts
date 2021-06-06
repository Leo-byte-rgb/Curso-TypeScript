enum Colors {
  RED,
  YELLOW,
  BLUE,
}

enum Colors {
  ROXO = 'ROXO',
  VERDE = 200,
  AMARELO = 201,
}
console.log(Colors[2]);

function escolhaACor(cor: Colors): void {
  console.log(Colors[cor]);
}

escolhaACor(2);
