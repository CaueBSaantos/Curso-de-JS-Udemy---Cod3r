function tratarErrorELancar(error){
    //throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: error.nome,
        msg: error.menssage,
        date: new Date
    }
}

function nomeGritado(obj){
    try{
        console.log(obj.nome.toUpperCase()+'!!!')
    } catch(e){
        tratarErrorELancar(e)
    }finally {console.log('final')}
}

const obj = {name: 'Roberto'}

nomeGritado(obj)