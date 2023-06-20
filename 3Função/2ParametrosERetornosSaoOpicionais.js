function area(altura,largura){
    const area = altura * largura
    if(area > 20){
        console.log(`valor acima do permitido: ${area}`)
    }else {
        return area
    }
}

console.log(area(2,2))
console.log(area())
console.log(area(3,5,6,7))
console.log(area(5,5))


// OBS codigo apenas para demonstrar o returno Undefined
