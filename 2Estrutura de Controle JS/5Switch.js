const escola = function(nota){
    switch(Math.floor(nota)){
        case 10: case 9:
            (console.log('Parabens!'))
            break
        case 7: case 8:
            (console.log('Aprovado'))
            break
        case 5: case 6:
            (console.log('Recuperação'))
            break
        case 4: case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('numero invalido')
    } 
}

escola(10)
escola(7)
escola(5)
escola(3)
escola(0)