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

//backend->frontend
function inserir() {
    const id = parseInt(document.getElementById("inputId").value);
    if(procurePorChavePrimaria(id)!==null){
        alert("erro")
        
    }else{
        bloquearAtributos(false);
        visibilidadeDosBotoes('none', 'none', 'none', 'none', 'inline'); //visibilidadeDosBotoes(procure,inserir,alterar,excluir,salvar)
        oQueEstaFazendo = 'inserindo';
        mostrarAviso("INSERINDO - Digite os atributos e clic o botão salvar");
        document.getElementById("inputId").focus();
    }
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

    let id;
    if (bar == null) {
        id = document.getElementById("inputId").value;
    } else {
        id = bar.id;
    }

    const tipo = document.getElementById("inputTipo").value;
    const peso = document.getElementById("inputPeso").value;
    const caixa = parseInt(document.getElementById("inputCaixa").value);
    const preco = document.getElementById("inputPreco").value;
    const data = document.getElementById("inputData").value;
    //verificar se o que foi digitado pelo USUÁRIO está correto
    if (id && tipo && peso && caixa && preco && data) {// se tudo certo 
        switch (oQueEstaFazendo) {
            case 'inserindo':
                bar = new Produto(id, tipo, peso, caixa, preco, data);
                listaProduto.push(bar);
                mostrarAviso("Inserido na lista");
                listar();
                break;
                case 'alterando':
                    produtoAlterado = new Produto(id, tipo, peso, caixa, preco, data);
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
            linha.peso + " Litros - " +
            linha.caixa + " Unidades - " +
            linha.preco + " Reais - "+
            linha.data + "<br>";
    }
    return texto;
}

function inserirDados(){
    listaProduto = []
    let linha = new Produto(1, "Refri", 2, 6, 14, '2024-07-07');
    listaProduto.push(linha);

    linha = new Produto(2, "Cerveja", 0.600, 24, 7.5, '2024-08-22');
    listaProduto.push(linha);

    linha = new Produto(3, "Pinga", 1, 12, 15, '2007-07-05');
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
    document.getElementById("inputPeso").value = bar.peso;
    document.getElementById("inputCaixa").value = bar.caixa;
    document.getElementById("inputPreco").value = bar.preco;
    document.getElementById("inputData").value = bar.data;

    // Define os campos como readonly
    bloquearAtributos(true);
}

// Função para limpar os dados dos campos
function limparAtributos() {
    document.getElementById("inputTipo").value = "";
    document.getElementById("inputPeso").value = "";
    document.getElementById("inputCaixa").value = "";
    document.getElementById("inputPreco").value = "";
    document.getElementById("inputData").value = "";

    bloquearAtributos(true);
}

function bloquearAtributos(soLeitura) {
    //quando a chave primaria possibilita edicao, tranca (readonly) os outros e vice-versa
    document.getElementById("inputId").readOnly = !soLeitura;
    document.getElementById("inputTipo").readOnly = soLeitura;
    document.getElementById("inputPeso").readOnly = soLeitura;
    document.getElementById("inputCaixa").readOnly = soLeitura;
    document.getElementById("inputPreco").readOnly = soLeitura;
    document.getElementById("inputData").readOnly = soLeitura;
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
}

function listar() {
    document.getElementById("outputSaida").innerHTML = preparaListagem(listaProduto);
}

 