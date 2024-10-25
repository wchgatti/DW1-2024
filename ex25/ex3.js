// function inverterPalavra(palavra) {
//     let trocapalavra = "";
//     for (let i = palavra.length - 1; i >= 0; i--) {
//         trocapalavra += palavra[i];
//     }
//     return trocapalavra;
// }
// console.log(inverterPalavra("javascript")); // Deve exibir: "tpircsavaj"
// console.log(inverterPalavra("hello")); // Deve exibir: "olleh"

function isPalindrome() {

    let palavra = document.getElementById("inputPalavra").value.toLowerCase();
    let resp = document.getElementById("resultado"); //para facilitar a resposta
    let novaPalavra = "";
    let letra = "";

    for (let i = palavra.length - 1; i >= 0; i--) {
        letra = palavra.charAt(i);
        novaPalavra += letra;
    }
    if (palavra === novaPalavra) {
        resultado = "true";
    } else {
        resultado = "else";
    }
}
console.log(isPalindrome("arara")); // Deve exibir: true
console.log(isPalindrome("hello")); // Deve exibir: false