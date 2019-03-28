function persona(nombre, apellido,altura){
  this.nombre=nombre
  this.apellido= apellido
  this.altura = altura
  // return this
}

persona.prototype.saludar = function(){
  console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
}

persona.prototype.soyalto = ()

var sacha = new persona('sacha', 'lifszyc',1.72)
var berlin = new persona('berlin', 'moz', 1.65)
var rio = new persona('rio', 'gaz',1.89)
var tokio = new persona('tokio', 'jam',1.66)






// sacha.saludar()
/***************************SOY Alto . atributo altura y funcion soy alto si mide mas de 1.8m******************************** */

   