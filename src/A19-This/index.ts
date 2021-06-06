function funcao(this: Date, args: string): void {
  return console.log(this, args);
}

funcao.call(new Date(), 'leonardo');
