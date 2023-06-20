const valor = "global"

function minhaFuncao (){
    console.log(valor)
}

function exe(){
    const valor = 'local'
    minhaFuncao()
}

console.log(exe())