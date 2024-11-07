function reverseArray(arr){
    let a = []
    for(i = arr.length - 1; i >= 0; i--){
        a.push(arr[i])
    }
    return a
}




console.log(reverseArray([1, 2, 3, 4])); // Deve exibir: [4, 3, 2, 1]
console.log(reverseArray(["apple", "banana"])); // Deve exibir: ["banana", "apple"]