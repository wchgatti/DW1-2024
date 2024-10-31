pos = 3
valor = 100
let vet = [10, 20, 30, 40, 50, 60]


function inserir(vet, pos, valor){
    for(i = vet.length; i > pos; i--){
        vet[i] = vet[i-1]
    }
    vet[pos] = valor
}

    let vetor = [10, 20, 30]

console.log(vetor, 2, 25)