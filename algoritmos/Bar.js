class Produto {
    constructor(id, tipo, peso, caixa, preco, data, posicaoNaLista) {
        this.id = id;
        this.tipo = tipo;
        this.peso = peso;
        this.caixa = caixa;
        this.preco = preco;
        this.data = data;


        this.posicaoNaLista = posicaoNaLista; //atributo para facilitar a alteração e exclusão 
    }
}
