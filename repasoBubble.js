/*1.Escribir una función que reciba un array de elementos e indique si se
encuentran ordenados de menor a mayor o no.*/
/*La función debe retornar un booleano: true si el array esta ordenado, false, si no.
 */

let pruebaA = [4, 3, 1, 7, 9, 0, 4, 2];
let pruebaB = [1, 2, 3, 4, 5, 6, 7, 8];

function estaOrdenado(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i]>array[i + 1]) {
            return false;
        }
        
    }
    return true;
}

function bubbleArray(array,ordenado) {
    if (ordenado === false) {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - 1; j++) {
                if (array[j] > array[j + 1]) {
                    let temp  = array[j]
                    array[j] = array[j + 1]
                    array[j + 1] = temp
                    
                }
                
            }
        }
    console.log(array)    
    } else { 
        console.log('esta ordenado');
    } 
}
bubbleArray(pruebaA,estaOrdenado(pruebaA))
bubbleArray(pruebaB,estaOrdenado(pruebaB))

// Comprueba tu función con los 2 arrays en dos llamadas independientes


/*2.Escribir una función que reciba un array con nombres, y para cada nombre
imprima el mensaje Estimado (nombre) , vote por mí.*/
let nombres = ["Lucas", "Martin", "Lucrecia", "Gabriela", "Mina", "Javier"];