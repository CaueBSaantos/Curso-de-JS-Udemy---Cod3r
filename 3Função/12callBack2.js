//sem call back
const notas = [1,2,3,4,5,6,7,8,9]


let notasBaixas= [];
for(let i in notas ){
    if(notas[i] <= 5){
        notasBaixas.push(notas[i])
        
    }
}

console.log(notasBaixas)
// com callback arrow

notasBaixas = notasBaixas.filter((notas) =>  notas < 7)
