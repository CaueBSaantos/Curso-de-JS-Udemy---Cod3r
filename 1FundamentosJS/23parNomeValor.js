
//par  nome       valor
const saudacao = 'ola' //contexto lexico 1

function exec(){
    const saudacao = 'fala memo' // contexto lexico 2
    return saudacao
}
// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'joao',
    idade: 32,
    endereco: {
        logadouro: 'rua A e B',
        numero: 21,
    }
}


console.log(saudacao)
console.log(exec())
console.log(cliente)

