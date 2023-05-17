// Operadores Relacionais

console.log('01)','1' == 1) // compara valor e não o time
console.log('02)','1'=== 1) // estreitamente igual ?
console.log('03)','3' != 3) // diferente ?
console.log('04)','3' !== 3) // estreitamente diferente ?

console.log('05)', 3 < 2) // menor
console.log('06)', 3 > 2) // maior
console.log('07)', 3 <= 2) // menor igual
console.log('08)', 3 >= 2) // maior igual

// comparando data
const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime()== d2.getTime())


//comparando null/ undefined
console.log('12)', undefined == null)
console.log('13)', undefined === null)
