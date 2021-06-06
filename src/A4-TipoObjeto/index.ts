const objetoA: {
  chaveA: string;
  chaveB: string;
  changeKeysValues(value1: string, value2: string): void;
} = {
  chaveA: 'chave1',
  chaveB: 'chave2',
  changeKeysValues(v1, v2) {
    this.chaveA = v1;
    this.chaveB = v2;
  },
};

console.log(objetoA.chaveA);
console.log(objetoA.chaveB);
objetoA.changeKeysValues('chave3', 'chave4');
console.log(objetoA.chaveA);
console.log(objetoA.chaveB);
