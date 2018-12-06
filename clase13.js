var alex = {
    nombre: 'alex',
    apellido: 'lifszyc',
    edad: 22,
    peso: 75
}

console.log(`al inicio del año ${alex.nombre} pesa ${alex.peso}kg`)

const incremento = 0.2
const aumentarpeso = (persona) => persona.peso += incremento
const adelgazar = persona => persona.peso -= incremento

for (var i = 1; i <= 365; i++) {
    var random = Math.random()     

    if (random < 0.25) {
        //aunmenta
        aumentarpeso(alex)

    } else if (random < 0.5) {
        //adelgazar
        adelgazar(alex)
    }
}
console.log(`al final del año ${alex.nombre} pesa ${alex.peso.toFixed(1)}kg`)