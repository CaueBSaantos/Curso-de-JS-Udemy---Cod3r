const nome = "joao"
const concatenacao = "ola" + nome + "!"
const template = `olá ${nome}!`

console.log(template)

// OBS: dentro de uma template da para passar uma função 

const up = texto => texto.toUpperCase()
console.log(`Olá ${up('cuidado')}!`)
