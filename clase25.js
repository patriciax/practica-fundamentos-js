class persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }
  saludar() {
    console.log(`hola me llamo ${this.nombre} ${this.apellido}`);
  }

  soyalto() {
    return this.altura > 1.8
  }
}



class desarrollador extends persona {
  constructor(nombre, apellido,altura) {
    super(nombre, apellido, altura)
  }
  saludar() {
    console.log(
      `hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`
    );
  }
}

// var sacha = new persona('sacha', 'lifszyc', 1.72)
// var berlin = new persona('b erlin', 'moz', 1.65)
// var rio = new persona('rio', 'gaz', 1.89)