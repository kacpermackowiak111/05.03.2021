
const arr = new Array(1,15,150,1500,'Jan',5525,'Henryk')

console.log(arr)

console.log(arr.every(item => item > 1)) 

const Index = arr.findIndex(item => item ==='Jan')
console.log(Index)