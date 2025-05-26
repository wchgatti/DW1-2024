/****************************************************************
 * Seleção dos elementos HTML
 ****************************************************************/
// Botões
const btnBotoes = document.querySelectorAll("[btn-numero]");
const btnOperacoes = document.querySelectorAll("[btn-operador]");
const btnIgual = document.querySelector("[btn-igual]");
const btnDelete = document.querySelector("[btn-delete]");
const btnAC = document.querySelector("[btn-ac]");

// As divs que vão exibir os valores da calculadora
const bufferElemento = document.querySelector("[txt-buffer]");
const displayElemento = document.querySelector("[txt-display]");

// Objeto que irá representar e armazenar os dados da calculadora
const calculadora = {
  operandoAnterior: "",
  operandoAtual: "",
  operador: "",
  bufferTextoElemento: bufferElemento,
  displayTextoElemento: displayElemento,
};

/****************************************************************
 * Associar funções aos eventos dos elementos HTML
 ****************************************************************/
// Botão AC
btnAC.addEventListener("click", () => {
  limpaVariaveis(calculadora);
});

// Botão Delete
btnDelete.addEventListener("click", () => {
  apagaDigito(calculadora);
});

// Botão de igual
btnIgual.addEventListener("click", () => {
  executaCalculo(calculadora);
});

// Botões dos números
btnBotoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    adicionaNumero(calculadora, botao.innerText);
  });
});

// Botões dos operadores
btnOperacoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    escolheOperador(calculadora, botao.innerText);
  });
});

/****************************************************************
 * Regras da aplicação
 ****************************************************************/

function atualizaDisplay(calculadora) {
  calculadora.displayTextoElemento.innerText = calculadora.operandoAtual || "0";
  calculadora.bufferTextoElemento.innerText = calculadora.operandoAnterior
    ? `${calculadora.operandoAnterior} ${calculadora.operador}`
    : "";
}

function limpaVariaveis(calculadora) {
  calculadora.operandoAnterior = "";
  calculadora.operandoAtual = "";
  calculadora.operador = "";
  atualizaDisplay(calculadora);
}

function adicionaNumero(calculadora, numero) {
  if (numero === "." && calculadora.operandoAtual.includes(".")) return;
  calculadora.operandoAtual += numero;
  atualizaDisplay(calculadora);
}

function escolheOperador(calculadora, operador) {
  if (calculadora.operandoAtual === "") return;
  if (calculadora.operandoAnterior !== "") {
    executaCalculo(calculadora);
  }
  calculadora.operador = operador;
  calculadora.operandoAnterior = calculadora.operandoAtual;
  calculadora.operandoAtual = "";
  atualizaDisplay(calculadora);
}

function executaCalculo(calculadora) {
  const anterior = parseFloat(calculadora.operandoAnterior);
  const atual = parseFloat(calculadora.operandoAtual);
  if (isNaN(anterior) || isNaN(atual)) return;

  let resultado;
  switch (calculadora.operador) {
    case "+":
      resultado = anterior + atual;
      break;
    case "-":
      resultado = anterior - atual;
      break;
    case "*":
      resultado = anterior * atual;
      break;
    case "÷":
      resultado = atual === 0 ? "Erro" : anterior / atual;
      break;
    default:
      return;
  }

  calculadora.operandoAtual = resultado.toString();
  calculadora.operador = "";
  calculadora.operandoAnterior = "";
  atualizaDisplay(calculadora);
}

function apagaDigito(calculadora) {
  calculadora.operandoAtual = calculadora.operandoAtual.toString().slice(0, -1);
  atualizaDisplay(calculadora);
}
