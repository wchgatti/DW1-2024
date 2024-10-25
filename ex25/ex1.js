function inverterPalavra(palavra) {
    let trocapalavra = "";
    for (let i = palavra.length - 1; i >= 0; i--) {
        trocapalavra += palavra[i];
    }
    return trocapalavra;
}
console.log(inverterPalavra("javascript")); // Deve exibir: "tpircsavaj"
console.log(inverterPalavra("hello")); // Deve exibir: "olleh"