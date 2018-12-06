var alex = {
    nombre: 'alex',
    apellido: 'lifszyc',
    edad: 22,
    peso: 75
}

console.log(`al inicio del año ${alex.nombre} pesa ${alex.peso}kg`)

const incremento = 0.3
const dias_del_ano = 365

const aumentarpeso = (persona) => persona.peso += incremento
const adelgazar = persona => persona.peso -= incremento

const comemucho = ()=> Math.random() < 0.3
const realizadeporte = ()=> Math.random() < 0.4

const META = alex.peso - 3
var dias = 0

while (alex.peso > META) {

    if (comemucho()) {
        //aumentar
        aumentarpeso(alex)
    }
    if (realizadeporte()) {
        //adelgazar
        adelgazar(alex)
    }
    dias += 1    
}

console.log(`Pasaron ${dias} dias hasta que ${alex.nombre} delgazo 3kg`)


console.log(`al final del año ${alex.nombre} pesa ${alex.peso.toFixed(1)}kg`)