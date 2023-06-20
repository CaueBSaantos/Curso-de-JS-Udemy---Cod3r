function soma (){
    let soma = 0
    for( i in arguments){
        soma += arguments [i]
    }
    return soma
}

console.log(soma(1))
console.log(soma(2,3,4))
console.log(soma(-1,-3,8))
console.log(soma('teste', 123))