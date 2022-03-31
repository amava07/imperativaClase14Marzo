const prompt = require("prompt-sync")({ sigint: true });
/*Deberás crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
En caso de que el número de la iteración sumado con el número pasado por parámetro sea par, mostrará en la consola: “El número X es par”*/
function loopDePares(a){
    for (let i = 0; i <= 100; i++) {
        const suma = a + i
        if(suma % 2 == 0 ){
            console.log('El número' + suma + ' es par')
        }else{
            console.log(i);
        }
        
    }

}
//loopDePares(20);

/*Deberás crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra, 
y haga un loop de 0 a 100 mostrando en la consola cada número del loop. Luego, modificar el código 
para que, en caso de que ese número sumado con el número pasado por parámetro sea impar,
muestre en la consola la palabra pasada por parámetro.*/

function loopDeImpares(num,palabra){
    for (let i = 0; i <= 100; i++) {
        console.log(i)
    const suma = num + i

    if (suma % 2 != 0 ){
        console.log(palabra)
    }

        
    }
}
//loopDeImpares(20,'impar')

/*Deberás crear una función llamada sumatoria que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, 
incluso ese mismo. Ejemplo:sumatoria(3) debe retornar 6 porque hace (1+2+3)*/

function sumatoria(numero){
    resultado = 0
    for (let i = 0; i < numero; i++) {
    resultado = resultado + i;
        }
        return resultado
    }
//console.log(sumatoria(10));

/*Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro y 
que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado. Ejemplo:
nuevoArreglo(5) debe retornar [1,2,3,4,5]
nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]*/

function nuevoArreglo(num){
    const elementos = []
    for (let i = 1;   i <= num ;  i++) {
        elementos[i-1] = i 
        
    }
    return elementos
}
//console.log(nuevoArreglo(4))

/*Deberás crear una función llamada split que reciba un string y simule el comportamiento de la función original. Si no estás seguro de cómo funciona, 
Google puede ayudarte. Importante: no podés usar el String.split(). Ejemplo:
split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
split(“chau”) debe retornar [“c”,”h”,”a”,”u”]*/

function split(texto){
    const arrayString = []
    for (let i of texto){
        arrayString.push(i)
    }
    console.log(arrayString)

}
split('hola')

/*Deberás crear una función llamada arrayHandler que reciba dos arreglos de igual largo como parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”. Ejemplo:
arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar:*/

function arrayHandler (array1,array2){
    for (let i = 0; i < array1.length; i++) {
        console.log ('soy ${array1[i]' + 'y yo soy ' + array2[i]);
        
    }
}
arrayHandler([1,2,3,4],['h','o','l','a']);

//punto conversor a cameleCase

function toCamelCase (text){
    let newArr = ' '
    newArr = text.replace(/-/g,' ');
    return newArr
}
console.log(toCamelCase('el-guerrero-silencioso'))

