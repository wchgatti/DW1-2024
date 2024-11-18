let listaProduto = []; //conjunto de dados
let oQueEstaFazendo = ''; //variável global de controle
let bar = null; //variavel global 

window.onload = inserirDados();

bloquearAtributos(true);
//backend (não interage com o html)
function procurePorChavePrimaria(chave) {
    for (let i = 0; i < listaProduto.length; i++) {
        const bar = listaProduto[i];
        if (bar.id == chave) {
            bar.posicaoNaLista = i;
            return listaProduto[i];
        }
    }
    return null;//não achou
}

bloquearAtributos(true);
//backend (não interage com o html)
function procurePorChavePrimaria(chave) {
    for (let i = 0; i < listaProduto.length; i++) {
        const bar = listaProduto[i];
        if (bar.id2 == chave) {
            bar.posicaoNaLista = i;
            return listaProduto[i];
        }
    }
    return null;//não achou
}

// Função para procurar um elemento pela chave primária   -------------------------------------------------------------
function procure() {
    const id = document.getElementById("inputId").value;
    if (id) { // se digitou um nome
        bar = procurePorChavePrimaria(id);
        if (bar) { //achou na lista
            mostrarDadosproduto(bar);
            visibilidadeDosBotoes('inline', 'none', 'inline', 'inline', 'none'); // Habilita botões de alterar e excluir
            mostrarAviso("Achou na lista, pode alterar ou excluir");
        } else { //não achou na lista
            limparAtributos();
            visibilidadeDosBotoes('inline', 'inline', 'none', 'none', 'none');
            mostrarAviso("Não achou na lista, pode inserir");
        }
    } else {
        document.getElementById("inputId").focus();
        return;
    }
}
function procure() {
    const id2 = document.getElementById("inputId").value;
    if (id2) { // se digitou um nome
        bar = procurePorChavePrimaria(id2);
        if (bar) { //achou na lista
            mostrarDadosproduto(bar);
            visibilidadeDosBotoes('inline', 'none', 'inline', 'inline', 'none'); // Habilita botões de alterar e excluir
            mostrarAviso("Achou na lista, pode alterar ou excluir");
        } else { //não achou na lista
            limparAtributos();
            visibilidadeDosBotoes('inline', 'inline', 'none', 'none', 'none');
            mostrarAviso("Não achou na lista, pode inserir");
        }
    } else {
        document.getElementById("inputId").focus();
        return;
    }
}

//backend->frontend
function inserir() {
    bloquearAtributos(false);
    visibilidadeDosBotoes('none', 'none', 'none', 'none', 'inline'); //visibilidadeDosBotoes(procure,inserir,alterar,excluir,salvar)
    oQueEstaFazendo = 'inserindo';
    mostrarAviso("INSERINDO - Digite os atributos e clic o botão salvar");
    document.getElementById("inputId").focus();

}

// Função para alterar um elemento da lista
function alterar() {

    // Remove o readonly dos campos
    bloquearAtributos(false);

    visibilidadeDosBotoes('none', 'none', 'none', 'none', 'inline');

    oQueEstaFazendo = 'alterando';
    mostrarAviso("ALTERANDO - Digite os atributos e clic o botão salvar");
}

// Função para excluir um elemento da lista
function excluir() {
    bloquearAtributos(false);
    visibilidadeDosBotoes('none', 'none', 'none', 'none', 'inline'); //visibilidadeDosBotoes(procure,inserir,alterar,excluir,salvar)

    oQueEstaFazendo = 'excluindo';
    mostrarAviso("EXCLUINDO - clic o botão salvar para confirmar a exclusão");
}

function salvar() {
    //gerencia operações inserir, alterar e excluir na lista

    // obter os dados a partir do html

    let id, id2;
    if (bar == null) {
        id = document.getElementById("inputId").value;
        id2 = document.getElementById("inputId").value;
    } else {
        id = bar.id;
        id2 = bar.id2;
    }

    const tipo = document.getElementById("inputTipo").value;
    const fabri = document.getElementById("inputFabri").value;
    const peso = parseInt(document.getElementById("inputPeso").value);
    const preco = document.getElementById("inputPreco").value;
    const data = document.getElementById("inputData").value;
    const tipo2 = document.getElementById("inputTipo2").value;
    const fabri2 = document.getElementById("inputFabri2").value;
    const peso2 = parseInt(document.getElementById("inputPeso2").value);
    const preco2 = document.getElementById("inputPreco2").value;
    const data2 = document.getElementById("inputData2").value;
    //verificar se o que foi digitado pelo USUÁRIO está correto
    if (id && tipo && fabri && peso && preco && data && id2 && tipo2 && fabri2 && peso2 && preco2 && data2) {// se tudo certo 
        switch (oQueEstaFazendo) {
            case 'inserindo':
                bar = new Produto(id, tipo, fabri, peso, preco, data, id2, tipo2, fabri2, peso2, preco2, data2);
                listaProduto.push(bar);
                mostrarAviso("Inserido na lista");
                listar();
                break;
                case 'alterando':
                    produtoAlterado = new Produto(id, tipo, fabri, peso, preco, data, id2, tipo2, fabri2, peso2, preco2, data2);
                    listaProduto[bar.posicaoNaLista] = produtoAlterado;
                    mostrarAviso("Alterado");
                break;
            case 'excluindo':
                let novaLista = [];
                for (let i = 0; i < listaProduto.length; i++) {
                    if (bar.posicaoNaLista != i) {
                        novaLista.push(listaProduto[i]);
                    }
                }
                listaProduto = novaLista;
                mostrarAviso("EXCLUIDO");
                break;
            default:
                // console.error('Ação não reconhecida: ' + oQueEstaFazendo);
                mostrarAviso("Erro aleatório");
        }
        visibilidadeDosBotoes('inline', 'none', 'none', 'none', 'none');
        limparAtributos();
        listar();
        document.getElementById("inputId").focus();
    } else {
        alert("Erro nos dados digitados");
        return;
    }
}

//backend
function preparaListagem(vetor) {
    let texto = "";
    for (let i = 0; i < vetor.length; i++) {
        const linha = vetor[i];
        texto +=
            linha.id + " - " +
            linha.tipo + " - " +
            linha.fabri + " - " +
            linha.peso + " Kg - " +
            linha.preco + " Reais - "+
            linha.data + "<br>";
    }
    return texto;
}

function inserirDados(){
    listaProduto = []
    let linha = new Produto(1, "Bike'2000", "Nike", 8, 1900, '2024-07-07');
    listaProduto.push(linha);

    linha = new Produto(2, "Féra", "Papagaio", 15, 1400, '2024-08-22');
    listaProduto.push(linha);

    linha = new Produto(3, "Kronos", "Radames", 10, 12000, '2007-07-05');
    listaProduto.push(linha);

    listar();
}



//backend->frontend (interage com html)
    
function cancelarOperacao() {
    limparAtributos();
    bloquearAtributos(true);
    visibilidadeDosBotoes('inline', 'none', 'none', 'none', 'none');
    mostrarAviso("Cancelou a operação de edição");
}

function mostrarAviso(mensagem) {
    //printa a mensagem na divAviso
    document.getElementById("divAviso").innerHTML = mensagem;
}

// Função para mostrar os dados do produto nos campos
function mostrarDadosproduto(bar) {
    document.getElementById("inputId").value = bar.id;
    document.getElementById("inputTipo").value = bar.tipo;
    document.getElementById("inputFabri").value = bar.fabri;
    document.getElementById("inputPeso").value = bar.peso;
    document.getElementById("inputPreco").value = bar.preco;
    document.getElementById("inputData").value = bar.data;
    document.getElementById("inputId2").value = bar.id2;
    document.getElementById("inputTipo2").value = bar.tipo2;
    document.getElementById("inputFabri2").value = bar.fabri2;
    document.getElementById("inputPeso2").value = bar.peso2;
    document.getElementById("inputPreco2").value = bar.preco2;
    document.getElementById("inputData2").value = bar.data2;

    // Define os campos como readonly
    bloquearAtributos(true);
}

// Função para limpar os dados dos campos
function limparAtributos() {
    document.getElementById("inputTipo").value = "";
    document.getElementById("inputFabri").value = "";
    document.getElementById("inputPeso").value = "";
    document.getElementById("inputPreco").value = "";
    document.getElementById("inputData").value = "";
    document.getElementById("inputTipo2").value = "";
    document.getElementById("inputFabri2").value = "";
    document.getElementById("inputPeso2").value = "";
    document.getElementById("inputPreco2").value = "";
    document.getElementById("inputData2").value = "";

    bloquearAtributos(true);
}

function bloquearAtributos(soLeitura) {
    //quando a chave primaria possibilita edicao, tranca (readonly) os outros e vice-versa
    document.getElementById("inputId").readOnly = !soLeitura;
    document.getElementById("inputTipo").readOnly = soLeitura;
    document.getElementById("inputFabri").readOnly = soLeitura;
    document.getElementById("inputPeso").readOnly = soLeitura;
    document.getElementById("inputPreco").readOnly = soLeitura;
    document.getElementById("inputData").readOnly = soLeitura;
    document.getElementById("inputId2").readOnly = !soLeitura;
    document.getElementById("inputTipo2").readOnly = soLeitura;
    document.getElementById("inputFabri2").readOnly = soLeitura;
    document.getElementById("inputPeso2").readOnly = soLeitura;
    document.getElementById("inputPreco2").readOnly = soLeitura;
    document.getElementById("inputData2").readOnly = soLeitura;
}

// Função para deixar visível ou invisível os botões
function visibilidadeDosBotoes(btProcure, btInserir, btAlterar, btExcluir, btSalvar) {
    //  visibilidadeDosBotoes('none', 'none', 'none', 'none', 'inline'); 
    //none significa que o botão ficará invisível (visibilidade == none)
    //inline significa que o botão ficará visível 

    document.getElementById("btProcure").style.display = btProcure;
    document.getElementById("btInserir").style.display = btInserir;
    document.getElementById("btAlterar").style.display = btAlterar;
    document.getElementById("btExcluir").style.display = btExcluir;
    document.getElementById("btSalvar").style.display = btSalvar;
    document.getElementById("btCancelar").style.display = btSalvar; // o cancelar sempre aparece junto com o salvar
    document.getElementById("inputId").focus();
    document.getElementById("inputId2").focus();
}

function listar() {
    document.getElementById("outputSaida").innerHTML = preparaListagem(listaProduto);
}

function ListaPeso(){
    let peso = 0;
    for (let i = 0; i <= peso.length; i++){
        if(peso < id2){}
        }
    
    return peso;}

