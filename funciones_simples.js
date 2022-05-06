const prompt = require("prompt-sync")({ sigint: true });

/*function test (x,y) {
    return x *2  // aca el return me saca de la función y ejecuta lo que tiene a la derecha y el código en bloque
    console.log (x) // esto no se imprime
    return x/2
}
test (10)
console.log (test(40))*/

//1. Crear una función que convierta pulgadas en centímetros.
//Recibe por parámetro pulgadas y retorna su equivalente en centímetros.
// 1 pul = 2.54cm

function pulgadasPorCentimetros(x){
    return x * 2.54
}
a = prompt ('ingresa el numero en pulgadas')
//console.log(pulgadasPorCentimetros(a));
//console.log('-------');

//2. Crear una función que recibe un string y lo convierte en una URL. Ej: “pepito” es devuelto como “http://www.pepito.com”
function stringxUrl(x){
    return 'http://www.' + x  + '.com'

}
a =prompt('ingresa tu nombre')
console.log (stringxUrl(a))
//console.log('-----');

//3. Crear una función que recibe un string y devuelve la misma frase pero con admiración.

function admiracion(){
return c + '!'
}
c =prompt('ingresa la frase')
//console.log(admiracion(c));
//console.log('-----');

//4. Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.
function edadDeTuPerro(x){
    return p * 7
}
p=prompt ('ingresa la edad de tu perro')
console.log('la edad de tu perro es');
console.log(edadDeTuPerro(p))
//console.log('------');


//5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro.
//PD: considerá que tu mes de trabajo tiene 40 horas.

a = prompt ('¿Cuál es tu sueldo mensual?')

function horaDeTrabajo (x){
return a / 40
}

//console.log('el valor de tu hora de trabajo es:');
//console.log(horaDeTrabajo(a))
//console.log('----')

//6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el IMC de una persona. Luego, ejecutar la función probando diferentes valores.
//Seleccionar alguna de estas funciones —o de manera opcional, todas— y escribirla como función expresada y función flecha.
//pesokl/ estatura en m2 como la estatura por lo general es en cm, divida la estacm/100 para obtener la esta en m


function otrocalculadorIMC (e,d){
    let f = e /100

return  d / (f * f)
}

e = prompt( 'ingresa tu altura')
d = prompt('ingresa tu peso en kilogramos')


//console.log(otrocalculadorIMC(e,d))