let n =parseInt( prompt("n = "))
let arr = [0 , 9]
i = 2
while(i <=n){
    arr[i] = 2*arr[i-1] + 3*arr[i-2]
    i++
}
window.alert(arr[n])