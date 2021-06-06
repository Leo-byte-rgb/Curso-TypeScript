function addOrConcat(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a} ${b}`;
}

console.log(addOrConcat('olá', 'leonardo'));

function branchLess(a: number, b: number): number {
  const menorNumero =
    a * <number>(<unknown>(a > b)) + b * <number>(<unknown>(b > a));
  return menorNumero;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function withIf(a: number, b: number) {
  if (a < b) return a;
  if (b < a) return b;
}

console.log(branchLess(10, 5));
