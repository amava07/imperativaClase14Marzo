const prompt = require("prompt-sync")({ sigint: true });

//1. Crear una función que convierta pulgadas en centímetros.
//Recibe por parámetro pulgadas y retorna su equivalente en centímetros.

/*const a = parseInt(prompt('Ingrese la cantidad de pulgadas:'))
function convertirPulgadasACentimetros(a) { //parametro
    const centimetros = a * 2.54
    return centimetros   
}
console.log(convertirPulgadasACentimetros(a)) //argumento*/

//Crear una función que recibe un string y lo convierte en una URL.
//Ej: “pepito” es devuelto como “http://www.pepito.com”

/*const stringUser = prompt('ingrese la palabra a convertir en url:')

const changetoUrl = function (stringUser){
return ('http://www.' + stringUser + '.com')
}

console.log(changetoUrl(stringUser)); */

//Crear una función que calcule la edad de los perros, considerando que 1 año
//para nosotros son 7 de ellos.

/*function edadDeTuPerro(x){
    return p * 7
}
p=prompt ('ingresa la edad de tu perro')
console.log('la edad de tu perro es');
console.log(edadDeTuPerro(p))
console.log('------')*/

//Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
//sueldo mensual como parámetro.
//PD: considerá que tu mes de trabajo tiene 40 horas.


/*function calculateSalary(a){
    return (a / 40)
}
console.log(calculateSalary(1000000))*/

/*  7. Crear una función que recibe un string en minúscula, lo convierta a mayúsculas
y lo retorne.
Investigá qué hace el método de strings .toUpperCase()*/

let c = prompt('ingresa el texto en minuscula: ')

function convertUppercase(c){
    newText = c.toUpperCase() 
return newText

}
console.log( convertUppercase(c) )

//Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese
//parámetro.
//Pista: te servirá revisar qué hace la palabra reservada typeof.

/*function returnDato(thing) {
    return typeof (thing)

    
}
console.log(returnDato())

/*Crear una función que le pasamos el radio de un círculo y nos devuelve la
circunferencia.
Pista: Investigá si el objeto Math tiene entre sus propiedades el número Pi.*/

function calculatecircun(radius) {
    circunference = 2 * radius * Math.PI
    return circunference
}
console.log( calculatecircun(4) );