var sacha = {
	nombre: 'sacha',
	apellido: 'lifszyc',
	edad: 28

}//delimitar un objeto
var patricia = {
	nombre: 'patricia',
	apellido: 'alvarez',
	edad: 21

}//delimitar un objeto

function imprimirNombreEnMayuscula({nombre}){

	console.log(nombre.toUpperCase())
}

imprimirNombreEnMayuscula(sacha)
imprimirNombreEnMayuscula(patricia)
imprimirNombreEnMayuscula({nombre: 'pepito'})