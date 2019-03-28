function persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

persona.prototype.saludar = function () {
  console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
}

persona.prototype.soyalto = function () {
  return this.altura > 1.8
}

var sacha = new persona('sacha', 'lifszyc', 1.72)
var berlin = new persona('b erlin', 'moz', 1.65)
var rio = new persona('rio', 'gaz', 1.89)
