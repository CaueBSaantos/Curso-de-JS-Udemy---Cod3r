function dados ([min = 0, max= 1000]){

    if( max > min ) [ min, max] = [max,min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
 }

 
 console.log(D)
 console.log(dados([10,50]))