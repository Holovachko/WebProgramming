let n =parseInt( prompt("n = "))
let x_0 = 1
let x_1 = 1
let x_n = 0
i = 2
while(i <=n){
    x_n += x_0 + x_1 
    i++
}
window.alert(x_n)