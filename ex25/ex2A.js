function findMax(arr){
    let b = 0
    for(i = 0; i < arr.length; i++){
        if(b<arr[i]){
            b = arr[i]
        }
    }
    return b
}



console.log(findMax([1, 2, 3, 4, 5])); // Deve exibir: 5
console.log(findMax([-10, 0, 10, 5])); // Deve exibir: 10
