function findIndex(arr, element){
    let a = 0
    let b = 0
    for(i = 0; i < arr.length; i++){
        if(element == arr[i]){
            a = b 
        }
        b++
    }
    if(a == 0){
        a = -1
    }
    return a
}





console.log(findIndex([1, 2, 3, 4], 3)); // Deve exibir: 2
console.log(findIndex(["apple", "banana"], "cherry")); // Deve exibir: -1