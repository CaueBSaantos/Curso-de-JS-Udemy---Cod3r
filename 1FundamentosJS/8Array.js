const valores = [1.6,2.0,3.9,4.5]

console.log(valores[3])
console.log(valores[2],valores[7])

valores[7] = 7
console.log(valores)
console.log(valores.length) // length mostra quantos elementos tem dentro do Array

valores.push({id:3}, false, null, 'teste') // utilizado para adicionar um ou mais elementos no final de um array existente.
console.log(valores)

console.log(valores.pop())// retira o ultimo valor do Array 

console.log(typeof valores)