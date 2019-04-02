const celeste = document.getElementById("celeste");
const violeta = document.getElementById("violeta");
const naranja = document.getElementById("naranja");
const verde = document.getElementById("verde");
const btnEmpezar = document.getElementById("btnEmpezar");
const ultimo_nivel = 10;
class juego {
  constructor() {
    this.inicializar = this.inicializar.bind(this)
    this.inicializar();
    this.generarsecuencia();
    setTimeout(this.siguientenivel, 500);
  }

  inicializar() {
    this.siguientenivel = this.siguientenivel.bind(this);
    this.elegircolor = this.elegircolor.bind(this);
    this.togglebtnempezar()
    btnEmpezar.classList.add("hide");
    this.nivel = 1;
    this.colores = {
      celeste,
      violeta,
      naranja,
      verde
    };
  }
  
  togglebtnempezar(){
    if(btnempezar.classList.contains('hode')){
      btn.classList.remove('hide')
    }else{
      btnempezar.classList.add('hide')
    }
  }

  generarsecuencia() {
    this.secuencia = new Array(ultimo_nivel)
      .fill(0)
      .map((n) => Math.floor(Math.random() * 4));
  }
  siguientenivel() {
    this.subnivel = 0;
    this.iluminarsecuencia();
    this.agregareventosclick();
  }

  transformarnuamerocolor(numero) {
    switch (numero) {
      case 0:
        return "celeste";
      case 1:
        return "violeta";
      case 2:
        return "naranja";
      case 3:
        return "verde";
    }
  }
  transformarcoloranumero(color) {
    switch (color) {
      case "celeste":
        return 0;
      case "violeta":
        return 1;
      case "naranja":
        return 2;
      case "verde":
        return 3;
    }
  }

  iluminarsecuencia() {
    for (let i = 0; i < this.nivel; i++) {
      var color = this.transformarnuamerocolor(this.secuencia[i]);
      // this.iluminarcolor(color)
      setTimeout(() => this.iluminarcolor(color), 1000 * i);
    }
  }

  iluminarcolor(color) {
    this.colores[color].classList.add("ligth");
    setTimeout(() => this.apagarcolor(color), 350);
  }

  apagarcolor(color) {
    this.colores[color].classList.remove("ligth");
  }
  agregareventosclick() {
    this.colores.celeste.addEventListener("click", this.elegircolor);
    this.colores.verde.addEventListener("click", this.elegircolor);
    this.colores.violeta.addEventListener("click", this.elegircolor);
    this.colores.naranja.addEventListener("click", this.elegircolor);
  }
  eleminareventosclick() {
    this.colores.celeste.removeEventListener("click", this.elegircolor);
    this.colores.verde.removeEventListener("click", this.elegircolor);
    this.colores.violeta.removeEventListener("click", this.elegircolor);
    this.colores.naranja.removeEventListener("click", this.elegircolor);
  }

  elegircolor(ev) {
    const nombrecolor = ev.target.dataset.color;
    const numerocolor = this.transformarcoloranumero(nombrecolor);
    if (numerocolor === this.secuencia[this.subnivel]) {
      this.subnivel++;
      if (this.subnivel == this.nivel) {
        this.nivel++;
        this.eleminareventosclick();
        if (this.nivel == ultimo_nivel + 1) {
          //Gano
          this.ganoeljuego();
        } else {
          setTimeout(this.siguientenivel(), 1500);
        }
      }
    } else {
      this.perdioeljuego();
      //perdio
    }
  }
  ganoeljuego() {
    swal('platzi','felicitaciones , ganaste el juego', 'success')
    .then(inicializar)
  }
  perdioeljuego() {
    swal('platzi', 'lo lamentamos perdiste JAJA', 'ERROR');
    .then(() => {
      this.eleminareventosclick()
      this.inicializar()
    })
  }
}

function empezarjuego() {
  window.juego = new juego();
}
