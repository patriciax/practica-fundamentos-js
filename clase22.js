function persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

persona.prototype.saludar = () => {
  console.log(`hola me llamo ${this.nombre} ${this.apellido}`);
};

persona.prototype.soyalto = () => this.altura > 1.8


var gabi = new persona("gabi", "luna", 1.72);
var alex = new persona("alex", "martinez", 1.65);
var sacha = new persona("sacha", "lifszyc", 1.89);


gabi.soyalto()
alex.soyalto()
sacha.soyalto()



