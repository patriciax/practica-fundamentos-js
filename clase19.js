var alex = {
  nombre: 'alex',
  apellido: 'gomez',
  altura: 1.72
}

var willian = {
  nombre: 'willian',
  apellido: 'gomez',
  altura: 1.86
}

var andres = {
  nombre: 'andres',
  apellido: 'gomez',
  altura: 1.85
}

var sharon = {
  nombre: 'sharon',
  apellido: 'gomez',
  altura: 1.56
}

var jesus = {
  nombre: 'jesus',
  apellido: 'gomez',
  altura: 1.72
}

//const esalta = (persona) => persona.altura > 1.8
const esalta = ({
  altura
}) => altura > 1.8

var personas = [alex, willian, andres, sharon, jesus]

var personasaltas = personas.filter(esalta)

//otra forma
/*
var personasaltas = personas.filter(function(persona) {
  return persona.altura > 1.8
  
})
*/

console.log(personasaltas)

//***************** */ filtrado de perosnas bajas******************************************/

const esbaja = (persona) => persona.altura < 1.8

var personasbaja = personas.filter(esbaja)

console.log(personasbaja)

/**********************Convertr altura a centimetros*********************************** */
const pasar_altura_a_cms = (persona) =>{

  // persona.altura = persona.altura * 100
 
  return {   //nuevo objeto
    ...persona, 
    altura: persona.altura * 100
  }
}

var personascms = personas.map(pasar_altura_a_cms)

console.log(personascms)