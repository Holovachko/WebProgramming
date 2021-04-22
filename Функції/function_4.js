function evenNum(a , b ,c ){
    let num = 0
    let arr = [a , b ,c]
    for (el in arr){
        for(let i = 0; i < arr.length ; i++){
            if(el % 2 == 0){
                num += 1
            }
        }
    }
    return num
}