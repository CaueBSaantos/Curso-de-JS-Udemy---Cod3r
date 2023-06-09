// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal 
function fun1(){}

// Armazenar em uma varialvel 

const func = function(){}

// Armazenar em um arry
const array = [function(a, b){return a + b},fun1,func]
console.log(array[0](2,3))

// Armazenar em um atributo de objeto 

const obj = {}

obj.falar = function(){return('opa')}
console.log(obj.falar())

// Passar função como param 

function run(fun){
    fun()
}

run(function(){console.log('Executando')})

// Um função pode retonar/conter um função

function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)
const cincoMais = soma (3,5)
cincoMais(3)