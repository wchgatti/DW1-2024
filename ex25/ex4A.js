function allEquals(arr){
    let a = arr[0]
    for(i = 0; i < arr.length; i++){
        if(a != arr[i]){
            return false
        }
    }
   return true
}


console.log(allEquals([1, 1, 1])); // Deve exibir: true
console.log(allEquals([1, 2, 1])); // Deve exibir: false

