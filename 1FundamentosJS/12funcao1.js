// funcao sem retorno

function ImprimirSoma (a, b ){ 

    console.log( a + b)
}

ImprimirSoma(2,4,)

// funcao com retorno 

function SomaSoma(a,b = 0){// o "=0" é para quando o valor não for especificado, então o =0 fica como valor padrão
    return a + b
}

console.log(SomaSoma(2))