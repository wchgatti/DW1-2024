function countOccurrences(arr, element){
    let a = 0
    for(i = 0; i < arr.length; i++){
        if(arr[i] == element){
            a += 1
        }
    }
    return a
}



console.log(countOccurrences([1, 2, 2, 3, 2], 2)); // Deve exibir: 3
console.log(countOccurrences(["apple", "banana", "apple"], "apple")); // Deve exibir: 2