/* Busqueda Lineal*/


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let buscar = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) return array [i]
            
        }
    return null;
}
//console.log(buscar(array, 3 ));

/* busqueda binaria */
function busquedaBinaria(array, item) {
    let inicio = 0
    let fin = array.length - 1  //es el array que paso por parametro, no el que tengo declarado arriba
    while (inicio <= fin ){
        let indiceMedio = Math.floor((inicio + fin) / 2)
        let elementoAdivinar = array[indiceMedio]


        if (elementoAdivinar == item) {
            return indiceMedio
        }
        if (item > elementoAdivinar  ) {
            inicio  = indiceMedio + 1
            
        } else {
            fin = indiceMedio - 1
        }
    }
    return null
}
console.log(busquedaBinaria( array, 3));


// Ejercicio en Clase
/*let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// yo         5

// 6, 7, 8, 9, 10
//yo     8

// 6 , 7
//yo  6
// 7
// 6 ---->  inicio === fin
// null
/* busqueda lineal 
const buscar = (array, item) => {
    for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
        return i;
    }
    }
    return null;
};

  // console.log(buscar(array, 3));
  // console.log(buscar(array, 99));

/* busqueda binaria 
function busquedaBinaria(array, item) {
    let inicio = 0;
    let fin = array.length - 1;

    while (inicio <= fin) {
    let indiceMedio = Math.floor((inicio + fin) / 2);
    let elementoAdivinar = array[indiceMedio];

    if (elementoAdivinar === item) {
        return indiceMedio;
    }

    if (item > elementoAdivinar) {
        inicio = indiceMedio + 1;
    } else {
        fin = indiceMedio - 1;
    }
    }
    return null;
}

  // console.log(busquedaBinaria(array, 2));
  // console.log(busquedaBinaria(array, 10));
  // console.log(busquedaBinaria(array, 18));

let list = [12, 3, 5, 7, 1, 22, 47, 100];

function ordenar(array) {
    for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        }
    }
    }
}

ordenar(list);
console.log(list);
console.log(busquedaBinaria(list, 18));
console.log(busquedaBinaria(list, 47));*/