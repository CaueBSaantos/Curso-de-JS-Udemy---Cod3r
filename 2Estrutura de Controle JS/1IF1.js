function n (nota){
    if(nota >= 7){
        console.log('Parabens ! sua nota foi de ' + nota)
    }
}

n(8)

function seForTrueAparece(valor){
    if(valor){
        console.log('Parece se for TRUE ' + valor)
    }
}

seForTrueAparece(1)
seForTrueAparece(0)
seForTrueAparece(null)
seForTrueAparece('')
seForTrueAparece(' ')
