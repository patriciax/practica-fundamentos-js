const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')

class juego {
  constructor() {
    this.inicializar()
    this.generarsecuencia()
  }

  inicializar() {
    btnEmpezar.classList.add('hide')
  }

  generarsecuencia() {
    this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
    console.log(this.secuencia)
  }
}

function empezarjuego() {
  window.juego = new juego()
}