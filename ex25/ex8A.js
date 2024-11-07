function getEvenNumbers(arr){
    let a = []
    for(i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            a.push(arr[i])
        }
    }
    return a
}




console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Deve exibir: [2, 4, 6]
console.log(getEvenNumbers([10, 15, 20, 25])); // Deve exibir: [10, 20]