let listaAluno = []; //conjunto de dados
let oQueEstaFazendo = ''; //variável global de controle
let bar = null; //variavel global 

window.onload = inserirDados();

bloquearAtributos(true);
//backend (não interage com o html)
function procurePorChavePrimaria(chave) {
    for (let i = 0; i < listaAluno.length; i++) {
        const bar = listaAluno[i];
        if (bar.id == chave) {
            bar.posicaoNaLista = i;
            return listaAluno[i];
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
            mostrarDadosAluno(bar);
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

    let id;
    if (bar == null) {
        id = document.getElementById("inputId").value;
    } else {
        id = bar.id;
    }

    const tipo = document.getElementById("inputTipo").value;
    const Bi1 = document.getElementById("inputBi1").value;
    const Bi2 = parseInt(document.getElementById("inputBi2").value);
    const Bi3 = document.getElementById("inputBi3").value;
    const Bi4 = document.getElementById("inputBi4").value;
    //verificar se o que foi digitado pelo USUÁRIO está correto
    if (id && tipo && Bi1 && Bi2 && Bi3 && Bi4) {// se tudo certo 
        switch (oQueEstaFazendo) {
            case 'inserindo':
                bar = new Aluno(id, tipo, Bi1, Bi2, Bi3, Bi4);
                listaAluno.push(bar);
                mostrarAviso("Inserido na lista");
                listar();
                break;
                case 'alterando':
                    AlunoAlterado = new Aluno(id, tipo, Bi1, Bi2, Bi3, Bi4);
                    listaAluno[bar.posicaoNaLista] = AlunoAlterado;
                    mostrarAviso("Alterado");
                break;
            case 'excluindo':
                let novaLista = [];
                for (let i = 0; i < listaAluno.length; i++) {
                    if (bar.posicaoNaLista != i) {
                        novaLista.push(listaAluno[i]);
                    }
                }
                listaAluno = novaLista;
                mostrarAviso("EXCLUIDO");
                break;
            default:
                // console.error('Ação não reconhecida: ' + oQueEstaFazendo);
                mostrarAviso("Erro aleatório");
            }
                salvarListaNoLocalStorage(); // Salva as alterações no Local Storage
                limparAtributos();
                listar();
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
            linha.Bi1 + " 1° Bimestre - " +
            linha.Bi2 + " 2° Bimestre - " +
            linha.Bi3 + " 3° Bimestre - "+
            linha.Bi4 + " 4° Bimestre <br>";
    }
    return texto;
}

function inserirDados(){
    listaAluno = []
    let linha = new Aluno(111, "Wesley Gatti", 80, 80, 80, 80);
    listaAluno.push(linha);

    linha = new Aluno(222, "Bruno Shiba", 90, 95, 85, 90);
    listaAluno.push(linha);

    linha = new Aluno(333, "João Bühler", 64, 70, 55, 42);
    listaAluno.push(linha);

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

// Função para mostrar os dados do Aluno nos campos
function mostrarDadosAluno(bar) {
    document.getElementById("inputId").value = bar.id;
    document.getElementById("inputTipo").value = bar.tipo;
    document.getElementById("inputBi1").value = bar.Bi1;
    document.getElementById("inputBi2").value = bar.Bi2;
    document.getElementById("inputBi3").value = bar.Bi3;
    document.getElementById("inputBi4").value = bar.Bi4;

    // Define os campos como readonly
    bloquearAtributos(true);
}

// Função para limpar os dados dos campos
function limparAtributos() {
    document.getElementById("inputTipo").value = "";
    document.getElementById("inputBi1").value = "";
    document.getElementById("inputBi2").value = "";
    document.getElementById("inputBi3").value = "";
    document.getElementById("inputBi4").value = "";

    bloquearAtributos(true);
}

function bloquearAtributos(soLeitura) {
    //quando a chave primaria possibilita edicao, tranca (readonly) os outros e vice-versa
    document.getElementById("inputId").readOnly = !soLeitura;
    document.getElementById("inputTipo").readOnly = soLeitura;
    document.getElementById("inputBi1").readOnly = soLeitura;
    document.getElementById("inputBi2").readOnly = soLeitura;
    document.getElementById("inputBi3").readOnly = soLeitura;
    document.getElementById("inputBi4").readOnly = soLeitura;
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
    document.getElementById("outputSaida").innerHTML = preparaListagem(listaAluno);
}


function salvarListaNoLocalStorage() {
    localStorage.setItem("listaAluno", JSON.stringify(listaAluno));
}

function carregarListaDoLocalStorage() {
    const listaSalva = localStorage.getItem("listaAluno");
    if (listaSalva) {
        listaAluno = JSON.parse(listaSalva); // Converte a string JSON de volta para um array
    } else {
        inserirDados(); // Cria a lista inicial caso não exista no Local Storage
    }
}
window.onload = function() {
    carregarListaDoLocalStorage(); // Carrega os dados do Local Storage ao carregar a página
    listar(); // Atualiza a interface com os dados carregados
};



