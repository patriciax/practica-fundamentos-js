var sacha = {
  nombre: 'sacha',
  apellido: 'Lifszyc',
  edad: 28,
  ingeniero: true,
  cocinero:false,
  cantante:false,
  dj: false,
  guitarrista:false,
  drone:true
}

function profesiones(persona){
  console.log(`${persona.nombre} es:` )

  if(persona.ingeniero){

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

profesiones(sacha)