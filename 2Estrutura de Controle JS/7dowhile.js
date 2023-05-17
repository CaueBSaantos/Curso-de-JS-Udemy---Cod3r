function numAleatrio (min, max)
{ const n = Math.random() * (max - min) + min
    return Math.floor(n)
}

let nu = 0;

do{
    nu = numAleatrio(-1,10)
    console.log(`numero gerado foi: ${nu}`)
} while( nu != -1)

console.log('ate a prox')