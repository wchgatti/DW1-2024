function average(arr){
    let a = 0
    for(i = 0; i < arr.length; i++){
    a += arr[i]/arr.length
    }
    return a
}




console.log(average([1, 2, 3, 4])); // Deve exibir: 2.5
console.log(average([10, 20, 30])); // Deve exibir: 20