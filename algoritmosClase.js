


function program() {
let multiplosDe3 = 0;
let multiplosDe5 = 0
let multiplosDeAmbos = 0
    for (let i = 1; i<= 100; i++) {
        
        if (i % 3 == 0 && i%5 !=0) {
        multiplosDe3[i] = console.log('Fizz');
        } else if ( i % 5 == 0 && i%3 !=0) {
        multiplosDe5[i] = console.log('buzz');
        } else if ( (i % 3 == 0) && (i % 5 == 0)){
            console.log('fizzbuzz');
        }else{
            console.log(i)

        }
    
    }
    return 0

    
}
//console.log(program());

// Dado los siguientes numeros:

let num1 = 43;
let num2 = 78;
let num3 = 14;

// Crea un algoritmo que te permita identificar
// el numero mayor. Utiliza condicionales como el
// if, else, o else if.

// Escribe tu código debajo de estas lineas,
// y observa los resultados por la consola.
// especificamente para este conjunto de datos
// deberias ver por consola el numero 78,
// adicional, cambia los valores de num1, num2 y num3
// para verificar que tu algoritmo funcione con
// cualquiera 3 valores.

let totalnum = [43, 78, 14]
let countMayor = [0]

function numMayor(){
    for (let i = 0; i < totalnum.length; i++) {
        if( totalnum[i] > countMayor){
            countMayor = totalnum[i]  
        }
        
    }
    return countMayor
}
//numMayor()
//console.log(numMayor ())

/*Escriban una función que reciba dos parámetros: un array y un índice.
La función deberá de mostrar por consola el valor del elemento según el índice dado. 
Por ejemplo, dada la siguiente array e índice, la función imprimirá '6'. 

let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; 
let index = 1;*/
