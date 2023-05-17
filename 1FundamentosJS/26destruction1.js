const pessoa = {
    nome: 'roberto',
    idade: 23,
    logadouro: {
        nomeRua: 'abc',
        numero: 321
    }
}

//const {nome, idade} = pessoa
//console.log(nome, idade)

//const {nome: n,idade: i} = pessoa 
//console.log(n,i)

const {sobrenome, bemHumorada = true }= pessoa
console.log(sobrenome,bemHumorada)

const {nome,idade,logadouro:{nomeRua,numero}}= pessoa
console.log(nome,idade,nomeRua,numero)