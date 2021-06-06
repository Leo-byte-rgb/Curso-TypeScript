/*eslint-disable*/
function multiplyArgs(...args: Array<number>): number {
  return args.reduce((ac, value) => ac * value);
}

const result = multiplyArgs(1, 2, 3, 4, 5);

function concatStrings(...args: Array<string>): string {
  return args.reduce((ac, value ) => ac + value);
}

function toUpper(...args: Array<string>): string[] {
  return args.map((value) => value.toLocaleUpperCase())
}
const toUppercase = toUpper('m', 'a', 'r', 'i', ' ', 'r', 'o', 'y', 'e', 'r')

const resultStrings = concatStrings('m', 'a', 'r', 'i', ' ', 'r', 'o', 'y', 'e', 'r')

function forReducer(): void {
  let soma: number = 1;

  for (let i = 1; i <= 5; i++) {
    soma*= i;
  }
  console.log(soma);
}

forReducer();
console.log(toUppercase)
console.log(resultStrings)
console.log(result);
