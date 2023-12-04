function add(arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    
    // console.log(sum);     
    return sum
    
}

let sums = add([2,4,1,8]);
console.log(sums);