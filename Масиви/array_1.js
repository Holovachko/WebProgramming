function marks(){
let sumOfMarks = 0
let category = 0
for (el in arguments){
    sumOfMarks += el
}
let arithmeticMean = sumOfMarks/arguments.length
for (el in arguments){
    if (el == 2){
        category = 'двійочник'
        break
    }
    if (el == 3){
        category = 'трійочник'
        break
    }
    else if (arguments.indexOf(4) != -1 ){
        category = 'хорошист'
    }
    else{
        category = 'відмінник'
    }

}
}