 function numeroAleatorio (min, max){
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}

let n = 0

while (n != -1) // apenas parametro de  true or false
{
    n = numeroAleatorio(-1,10)
    console.log(`o numero sorteado foi: ${n}.`)

}
console.log('até a proxima')