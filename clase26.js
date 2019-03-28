class persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }
  saludar(fn) {
       var {
         nombre,
         apellido
       } = this
    console.log(`hola me llamo ${nombre} ${apellido}`)
    if (fn) {
       fn(this.nombre,this.apellido)
    }
  }

  soyalto() {
    return this.altura > 1.8
  }
}



class desarrollador extends persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura)
  }
  saludar(fn) {
    var{nombre, apellido} = this
    console.log(
      `hola me llamo ${nombre} ${apellido} y soy desarrollador`
    )
      if (fn) {
        fn(nombre, apellido,true )
      }
  }
}

function respondersaludo(nombre,apellido, esdev){
  console.log(`buen dia ${nombre} ${apellido}`)

  if (esdev) {
      console.log(`ah miara no sabia que eras dev`)
  }
}

var sacha = new persona('sacha', 'lifszyc', 1.72)
var berlin = new persona('b erlin', 'moz', 1.65)
var rio = new desarrollador('rio', 'gaz', 1.89)

sacha.saludar()
berlin.saludar(respondersaludo)
rio.saludar(respondersaludo)