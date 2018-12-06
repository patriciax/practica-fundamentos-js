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

var personas = [alex , willian , andres , sharon , jesus]

for (var i= 0 ; i < personas.length; i++){

  var persona = personas [i]
  console.log(`${persona.nombre} mide ${persona.altura} mts`)

} 