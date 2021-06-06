const pessoa = {
  nome: 'Leonardo' as const,
  idade: 18,
};

pessoa.idade = 17;

export default 1;

function choseColor(cor: 'Vermelho' | 'Amarelo' | 'Verde'): string {
  return cor;
}

choseColor('Vermelho');
