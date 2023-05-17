const s = []

for(let i = 0; i < 10; i++){
    s.push(function(){
        console.log(i)
    })
}

s[2]()
s[8]()
