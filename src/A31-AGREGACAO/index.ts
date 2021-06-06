export class CarrinhoDeCompras {
  private readonly produtos: Array<Produto> = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const product of produtos) {
      this.produtos.push(product);
    }
  }
  qtdProdutos(): number {
    return this.produtos.length;
  }
  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}
export class Produto {
  constructor(public _nome: string, public preco: number) {}
}
const produto1 = new Produto('Camiseta', 50.0);

const carrinho = new CarrinhoDeCompras();
carrinho.inserirProdutos(produto1);
console.log(carrinho.valorTotal());
console.log(carrinho.qtdProdutos());
