const notas = [3,5,7,8,10]

for(let i in notas){
    console.log(`nota ${notas[i]}`)
}

const pessoa = {
    nome: 'joao',
    sobrenome: 'silva',
    idade: 34,
    peso: 70
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}