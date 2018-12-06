var sacha = {
  nombre: 'sacha',
  apellido: 'Lifszyc',
  edad: 28,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: true
}
var alex = {
  nombre: 'alex',
  apellido: 'gomez',
  edad: 13
}

function profesiones(persona) {
  console.log(`${persona.nombre} es:`)

  if (persona.ingeniero) {

    console.log('ingeniero')
  }
  if (persona.cocinero) {

    console.log('cocinero')
  }
  if (persona.cantante) {

    console.log('cantante')
  }
  if (persona.dj) {

    console.log('dj')
  }
  if (persona.guitarrista) {

    console.log('guitarrista')
  }
  if (persona.drone) {

    console.log('vuela drone')
  }

}
//profesiones(sacha)

const mayoria_edad = 18


function esmayor(persona){
  
  return persona.edad >= mayoria_ edad
}

function edad(persona) {

  if (esmayor(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}
