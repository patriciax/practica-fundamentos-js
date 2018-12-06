function persona(nombre, apellido, altura){
  this.nombre=nombre
  this.apellido= apellido
  this.altura = altura
  return this
}

persona.prototype.saludar = function(){
  console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
}




var erik = new persona('gab', 'luna')
var alex = new persona('alex', 'martinez')

/***************************SOY Alto . atributo altura y funcion soy alto si mide mas de 1.8m******************************** */

