const fabricantes = ["f1","f2","f3","f4","f5"]

function imprimir (indice,nome){
    console.log(`${indice + 1} - ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))