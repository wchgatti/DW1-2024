function mergeArrays(arr, arr2){
    let a = []
    for(i = 0; i < arr.length; i++){
        a.push(arr[i])
    }
    for(b = 0; b < arr2.length; b++){
        a.push(arr2[b])
        }
    return a
}





console.log(mergeArrays([1, 2], [3, 4])); // Deve exibir: [1, 2, 3, 4]
console.log(mergeArrays(["apple"], ["banana", "cherry"])); // Deve exibir: ["apple", "banana", "cherry"]