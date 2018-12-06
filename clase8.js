
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
//esto es igual a var nombre=persona.nombre
	console.log(nombre.toUpperCase())
} 

imprimirNombreEnMayuscula(sacha)
imprimirNombreEnMayuscula(patricia)
//imprimirNombreEnMayuscula({nombre: 'pepito'})
//imprimirNombreEnMayuscula({apellido: 'Alvarez'})


function cumple(persona){

	return {
		...persona,
		edad: persona.edad + 1
	}
}