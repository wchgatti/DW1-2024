// function inverterPalavra(palavra) {
//     let trocapalavra = "";
//     for (let i = palavra.length - 1; i >= 0; i--) {
//         trocapalavra += palavra[i];
//     }
//     return trocapalavra;
// }
// console.log(inverterPalavra("javascript")); // Deve exibir: "tpircsavaj"
// console.log(inverterPalavra("hello")); // Deve exibir: "olleh"

function countVowels(frase){
            let cont = 0;
            for (let i = 0; i < frase.length; i++){
                let letra = frase[i].toLowerCase()
                if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
                   cont = cont + 1
                }
            }
            return cont;
        }
        console.log(countVowels("OpenAI")); // Deve exibir: 4
        console.log(countVowels("JavaScript")); // Deve exibir: 3