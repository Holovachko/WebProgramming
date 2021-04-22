let arr = ['Василь' , 'Петро' , 'Іван', 'Іван' , 'Євген', 'Іван']
let i = 0 
for (el in arr){
    if (el == 'Іван'){
        i += 1
    }
}
window.alert(i)