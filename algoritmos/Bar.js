class Carro {
    constructor(id, tipo, peso, caixa, preco, posicaoNaLista) {
        this.id = id;
        this.tipo = tipo;
        this.peso = peso;
        this.caixa = caixa;
        this.preco = preco;


        this.posicaoNaLista = posicaoNaLista; //atributo para facilitar a alteração e exclusão 
    }
}