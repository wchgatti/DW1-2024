const num = [10,15,20,25,30,35]





// const copia = []
//     for(numero of num){
//         copia.push(numero*10)
//     }


function mult10(elemento){
    return elemento + 10
}
// const copia = num.map(mult10)



const copia = num.map(function(elemento){
    return elemento * 10
})

// const mult3 = elemento => elemento * 3




console.log(copia)


const carro = { 
    marca:"Toyota",
    modelo:"Corola"
}

console.log(carro)