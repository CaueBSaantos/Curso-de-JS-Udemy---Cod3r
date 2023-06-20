function carro (velocidadeMax = 200, delta = 10){
    let velocidadeAtual = 0

    this.acelerar = ()=>{
        if(velocidadeAtual + delta <= velocidadeMax){
            velocidadeAtual += delta 
        }else{
            velocidadeAtual = velocidadeMax
        }
    }

    this.getVelocidadeAtual= ()=>{
        return velocidadeAtual
    }
}

const uno = new carro 

uno.acelerar()
uno.acelerar()

console.log(uno.getVelocidadeAtual())


const uno2 = new carro (400,30)
uno2.acelerar()
uno2.acelerar()
uno2.acelerar()
uno2.acelerar()
uno2.acelerar()

console.log(uno2.getVelocidadeAtual())