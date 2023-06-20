function dobro (a){
    return a * 2
}

dobro = (a) => {
    return a * 2
}

dobro = a => {
    return a * 2
} // quando colocado o bloco, O RETURN TEM QUE SER COLOCADO

dobro = a => a * 2 // RETURN explicito 

function ola (){
    return "ola"
}

ola = () => "ola"
ola = _ => " ola"



console.log(dobro(2))
console.log(ola)