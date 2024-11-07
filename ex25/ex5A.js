function removeDuplicates(arr){
    let a = 0
    let b = ""
    for(i = 0; i < arr.length; i++){
    if(b != arr[i]){
        arr[a] = arr[i]
        a++ 
     }
     b = arr[i]
    }
    arr.length = a
    return arr
}



console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4])); // Deve exibir: [1, 2, 3, 4]
console.log(removeDuplicates(["apple", "apple", "banana"])); // Deve exibir: ["apple", "banana"]
