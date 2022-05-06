
let bubbleSort = [190, 1200, 1, 2,3,4,55,1000,6,800]

for (let i = 0; i < bubbleSort.length; i++) {
    for (let j = 0; j < bubbleSort.length -1; j++) {
        if (bubbleSort[j] > bubbleSort [j+1]) {
            let posTemp = bubbleSort[j]
            bubbleSort[j] = bubbleSort[j + 1]
            bubbleSort[j + 1] = posTemp
        }
        
    }
    
}
//console.log(bubbleSort);

//ejercicio 01 BubbleSort: Concurso de Fotografia

let likesForPicture = [30, 102, 300, 250, 50, 87, 36, 94, 42, 15, 288, 25, 54, 69, 70 ]

function orderLikes(array) {
    for (let i = 0; i < array.length; i++) {
        for (let  j = 0; j < array.length - 1; j++) {
        if(array[j] < array[j+1]) {
            let ordertemp = array[j]
            array[j] = array[j+1]
            array[j+1] = ordertemp
        }

    }
    
}
return array
}
console.log('Highest number of likes picture is: ', orderLikes(likesForPicture));


const arrayCuentas2 = [
{
    titular: "Arlene Barr",
    estaHabilitada: false,
    saldo: 3253.4,
    edadTitular: 33,
    tipoCuenta: "sueldo"
},
{
    titular: "Roslyn Torres",
    estaHabilitada: false,
    saldo: 3229.45,
    edadTitular: 27,
    tipoCuenta: "sueldo"
},
{
    titular: "Cleo Lopez",
    estaHabilitada: true,
    saldo: 1360.19,
    edadTitular: 34,
    tipoCuenta: "corriente"
},
{
    titular: "Daniel Malone",
    estaHabilitada: false,
    saldo: 3627.12,
    edadTitular: 30,
    tipoCuenta: "sueldo"
},
{
    titular: "Ethel Leon",
    estaHabilitada: true,
    saldo: 1616.52,
    edadTitular: 34,
    tipoCuenta: "sueldo"
},
{
    titular: "Harding Mitchell",
    estaHabilitada: true
}
];

/* 2. El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
objeto temperatura donde registra día —valor numérico del día—, mes —valor
numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
día. Las temperaturas —objeto temperatura— están cargados en un array.
a) Ordenar por temperatura mínima de menor a mayor.
b) Ordenar por temperatura máxima de mayor a menor.*/


let objectTemp = [
    { dia : 13,
    mes : 'Abril',
    tempMax : 38,
    tepmMin : 20
    },
    {   
    dia : 14,
    mes : 'Abril',
    tempMax : 34,
    temMin : 26 
    },
    {
    dia : 15,
    mes : 'Abril',
    tempMax : 35,
    temMin : 18
    },
    {
        dia : 16,
    mes : 'Abril',
    tempMax : 15,
    temMin : 8,
    }

]


let orderTempMin = (array) => {
    for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
        if (array[j].temMin > array[j + 1].temMin) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        }
    }
    }
    return array;
};
//console.log(orderTempMin(objectTemp));


//b) Ordenar por temperatura máxima de mayor a menor.
let orderTempMax = (array) => {
    for (let i = 0; i < array.length; i++) {
    for (let j = 0; j > array.length - 1; j++) {
        if (array[j].tempMax < array[j + 1].tempMax) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        }
    }
    }
    return array;
};
console.table(orderTempMax(objectTemp));

/*3.  A partir del siguiente array de Objetos Literales se solicita realizar lo siguiente:*/
let arrayCuentas = [
    {
    titular: "Arlene Barr",
    estaHabilitada: false,
    saldo: 3253.4,
    edadTitular: 33,
    tipoCuenta: "sueldo"
    },
    {
    titular: "Roslyn Torres",
    estaHabilitada: false,
    saldo: 3229.45,
    edadTitular: 27,
    tipoCuenta: "sueldo"
    },
    {
    titular: "Cleo Lopez",
    estaHabilitada: true,
    saldo: 1360.19,
    edadTitular: 34,
    tipoCuenta: "corriente"
    },
    {
    titular: "Daniel Malone",
    estaHabilitada: false,
    saldo: 3627.12,
    edadTitular: 30,
    tipoCuenta: "sueldo"
    },
    {
    titular: "Ethel Leon",
    estaHabilitada: true,
    saldo: 1616.52,
    edadTitular: 34,
    tipoCuenta: "sueldo"
    },
    {
    titular: "Harding Mitchell",
    estaHabilitada: true
    }
]


/*b. Desarrollar una función que ordene internamente de forma ascendente 
según la edad del titular de cada cuenta, la misma deberá retornar él array ordenado*/

function ordenAscEdad() {
    for (let i = 0; i < arrayCuentas.length; i++) {
    for (let j = 0; j < arrayCuentas.length - 1; j++) {
        if (arrayCuentas[j].edadTitular > arrayCuentas[j + 1].edadTitular) {
        let saldoTemp = arrayCuentas[j];
        arrayCuentas[j] = arrayCuentas[j + 1];
        arrayCuentas[j + 1] = saldoTemp;
        }
    }
    }
    return arrayCuentas;
}
//console.log(ordenAscEdad(arrayCuentas));

//suma diagonales 
//5x5
const crearMatriz = (n,m) =>{
    let aux = 5;
    let matriz = []
    for (let i= 0; i < n; i++){
        let fila = []
        for (let j = 0; j < m; j++){
            fila.push(aux)
            aux++
        }
        matriz.push(fila)
    }
    return matriz;
}
console.table(crearMatriz(5,5))

function sumDiagonales(matriz) {
    let sumaDiagonal1 = 0
    for (let i = 0; i < matriz.length; i++){ 
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            
            }
    }
    
}

/*function sumarDiagonal(matrizP){
    let sumaDiagona1 = 0;
    let sumaDiagona2 = 0;
    
    for (let i = 0; i < matrizP.length; i++) {
      //console.log(matrizP[i][i]);// elementos de la diagonal 1  
    sumaDiagona1 = sumaDiagona1 + matrizP[i][i];  
      //console.log(matrizP[i][(matriz.length - 1) - i]);// elementos de la diagonal 2
    sumaDiagona2 = sumaDiagona2 + (matrizP[i][(matriz.length - 1) - i]);     
    }
    return [sumaDiagona1 , sumaDiagona2];
}
// console.log('Suma diagonal');
console.log(sumarDiagonal(matriz));*/

let edades = [33, 27, 34, 30, 34, 25]

function ordenarArray(array){
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
        if( array[j] > array[j + 1]){
            let temp = array[j]
            array[j] = array [j +1]
            array [ j+ 1] = temp
        }
        
    }
    
}
return array
}
//console.log(ordenarArray(edades));

/*3.  A partir del siguiente array de Objetos Literales se solicita realizar lo siguiente:*/
let arrayCuentas4 = [
    {
    titular: "Arlene Barr",
    estaHabilitada: false,
    saldo: 3253.4,
    edadTitular: 33,
    tipoCuenta: "sueldo"
    },
    {
    titular: "Roslyn Torres",
    estaHabilitada: false,
    saldo: 3229.45,
    edadTitular: 27,
    tipoCuenta: "sueldo"
    },
    {
    titular: "Cleo Lopez",
    estaHabilitada: true,
    saldo: 1360.19,
    edadTitular: 34,
    tipoCuenta: "corriente"
    },
    {
    titular: "Daniel Malone",
    estaHabilitada: false,
    saldo: 3627.12,
    edadTitular: 30,
    tipoCuenta: "sueldo"
    },
    {
    titular: "Ethel Leon",
    estaHabilitada: true,
    saldo: 1616.52,
    edadTitular: 34,
    tipoCuenta: "sueldo"
    },
    {
    titular: "Harding Mitchell",
    estaHabilitada: true
    }
]


/*b. Desarrollar una función que ordene internamente de forma ascendente 
según la edad del titular de cada cuenta, la misma deberá retornar él array ordenado*/

function ordenarEdad(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].edadTitular < array[ j + 1].edadTitular) {
                let tempEdad = array[j]
                array[j] = array [j+ 1]
                array [j + 1] = tempEdad
            }
            
        }
    
    } 
    return array
}
console.table(ordenarEdad(arrayCuentas4));