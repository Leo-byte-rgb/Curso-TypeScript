type Idade = number;
type CorRGB = 'Red' | 'Green' | 'Blue';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

type People = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: CorPreferida;
};

const people: Array<People> = [
  {
    nome: 'Leonardo',
    idade: 18,
    salario: 715,
    corPreferida: 'Magenta',
  },
  {
    nome: 'Maria',
    idade: 20,
    salario: 1715,
    corPreferida: 'Ciano',
  },
  {
    nome: 'Maria',
    idade: 21,
    salario: 1715,
    corPreferida: 'Preto',
  },
];
const filteredPeople = people.filter((person) =>
  person.nome === 'Maria' ? person : null,
);

console.log(filteredPeople);
export default 10;
