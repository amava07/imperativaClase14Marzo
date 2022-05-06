/*Revisa el siguiente archivo, identifica sus componentes, vamos a estar usándolos a lo largo de este ejercicio.  
a. ¿Qué tipo de dato contiene la variable ‘alumnos’?
R/ La variable 'alumnos' es un objeto literal que contiene tipos de dato 'String', números enteros positivos y un array vacio en la propiedad notas.
b. ¿Qué propiedades tiene la estructura definida en el archivo final.js?
R/ La estructura definida en el archivo final.js es un Objeto literal con propiedades: id, nombre, apellido, legajo y notas.*/


const alumnos = [
    {
    id: 0,
    nombre: "Leandro",
    apellido: "Borrelli",
    legajo: 20210308,
    notas: [],
    },
    {
    id: 1,
    nombre: "Esteban",
    apellido: "Piazza",
    legajo: 20210211,
    notas: [],
    },
    {
    id: 2,
    nombre: "Martin",
    apellido: "Cejas",
    legajo: 20210218,
    notas: [],
    },
    {
    id: 3,
    nombre: "Karina",
    apellido: "Borgna",
    legajo: 20210516,
    notas: [],
    },
    {
    id: 5,
    nombre: "Javier",
    apellido: "Riera",
    legajo: 20220125,
    notas: [],
    },
];

/*2. Crear una función que ordene la estructura definida en el archivo final.js según la propiedad legajo de forma ascendente. (*)*/

//console.log('Primer Console');
//console.table(alumnos);

function ordenLegajo(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            //console.log('Arrayj.lejago',array[ j ].legajo);
            if ( array[ j ].legajo > array[ j + 1 ].legajo ) {
                let temporal = array[ j ]
                array[ j ] = array[ j + 1 ]
                array[ j + 1 ] = temporal
                //console.log('Arrayj.lejago',array[ j ].legajo);
            }
            
        }
        
    }
    return array
}
//console.log('-Segundo Console- Después de la función-');
//console.table(ordenLegajo(alumnos));



//EJERCICIO 2:

/*Dado el objeto*/

let alumno = {
    id: 5,
    nombre: "Javier",
    apellido: "Riera",
    legajo: 20220125,
    notas: [10,9,8,7,9]
}

/*a.Crear un método que retorne el promedio de notas. (*)*/

//console.log('Primer Console');
//console.log(alumno);
function promNotas(array) {
    let suma = 0
    for (let i = 0; i < array.length; i++) {
        suma += array[i]
    
    }
    return suma/array.length
}
//console.log('Segundo Console');
//console.log(promNotas(alumno.notas));

/*Crear una función que ordene las notas del alumno de forma descendente. (*)*/

//console.log('Primer Console');
//console.log(alumno);
function ordenNotas(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if ( array[ j ] < array[ j + 1 ] ) {
                let temporal = array[ j ]
                array[ j ] = array[ j + 1 ]
                array[ j + 1 ] = temporal
                //console.log('Arrayj.lejago',array[ j ].legajo);
            }
            
        }
        
    }
    return array
}
//console.log('-Segundo Console- Después de la función-');
//console.table(ordenNotas(alumno.notas));



/* Ejercicio 3.

A.Crea una matriz de 3x3, cuadrada, con números enteros positivos en cada una de sus posiciones.
B.Crear una función que retorne la suma de todos los números dentro de la matriz que sean múltiplos de 3. 
C.Crear una función que retorne un valor booleano dependiendo si la suma de todos los valores de la matriz es par.
D.Crear una función que retorne la suma de las diagonales de la matriz.*/

let matrix3x3 = []
let arrayX = [1, 2, 3];
let arrayY = [4, 5, 6];
let arrayZ = [7, 8 ,9];

matrix3x3[0]= arrayX
matrix3x3[1]= arrayY
matrix3x3[2]= arrayZ

//console.table(matrix3x3);

function sumMatriz(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            console.log(array[i][j]);
            if (array[i][j] % 3 == 0) {
                sum += array[i][j]
            }
            
        }
        
    }
    return sum
}
console.log(sumMatriz(matrix3x3));

//El tiempo me jugo una mala pasada, hasta aqí alcancé. Gracias