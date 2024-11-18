class Produto {
    constructor( id, tipo, fabri, peso, preco, data, id2, tipo2, fabri2, peso2, preco2, data2, posicaoNaLista) {
        this.id = id;
        this.tipo = tipo;
        this.fabri = fabri;
        this.peso = peso;
        this.preco = preco;
        this.data = data;
        this.id2 = id2;
        this.tipo2 = tipo2;
        this.fabri2 = fabri2;
        this.peso2 = peso2;
        this.preco2 = preco2;
        this.data2 = data2;
        


        this.posicaoNaLista = posicaoNaLista; //atributo para facilitar a alteração e exclusão 
    }
}
