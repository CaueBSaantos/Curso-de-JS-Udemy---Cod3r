// armazenando funcao em variavel 

const soma = function soma (a,b){
    console.log (a + b)
}
soma(2,4)

// Armazenando funcao arrow em uma variavel 

const vez = (a,b) =>{
    return a * b
}
console.log(vez(3,2))


// retorno implicito
const subi = (a,b) => a - b;

console.log(subi(3,2))
