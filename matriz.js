// Ejercicio previo Clase

let arrayMatriz = []
let arrayX=["x0","x1","x2"]
let arrayY=["y0","y1","y2"]
arrayMatriz[0] = arrayX
arrayMatriz[1] = arrayY
//console.table(arrayMatriz[1][1])
//console.table( arrayMatriz[1][0])

//console.log( arrayMatriz.length )
for (let i = 0; i < arrayMatriz.length; i++) {
    //console.log( arrayMatriz[i]  ) ;
    
}

//primera columna:
for (let i = 0; i < arrayMatriz.length; i++) {
    //console.log(arrayMatriz[i][0]);
    
}
//primera fila:
for (let i= 0; i< arrayMatriz.length; i++) {
    console.log(arrayMatriz[0][i]);
    
}
//Bucle que recorre el primer array 
for (let i= 0; i < arrayMatriz.length; i++) {
    //recorre el array que esta en la posición i 
    for (let j = 0; j < arrayMatriz[i].length; j++) {
    //console.log(arrayMatriz[i][j]);
        
    }
    
}

/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */
 let matriz5x5 = [];
 let arrayC = [1, 2, 3, 4, 5];
 let arrayD = [6, 7, 8, 9, 10];
 
 matriz5x5[0] = arrayC;
 matriz5x5[1] = arrayD;
 //console.table(matriz5x5[0].length);

 //console.table(matriz5x5);
 /**
  * Luego, escribe un algoritmo para sumar todos
  * los numeros en la matriz.
  */

 function SumMatriz5X5(){
    let sum =0
    for (let i = 0; i < matriz5x5.length; i++) {
        for(let j = 0; j <matriz5x5[0].length; j++){
        sum += matriz5x5[i][j]  
        }
    }
//console.log(sum)
}

//SumMatriz5X5()

 //
let namesCoffe = []
let coffeMedellin =['Amarti','Azahar','Don Juan','Arangos']
let coffeOtros = ['Amor Perfecto', 'Catación Pública','OKA','Cóndor']
namesCoffe[0] = coffeMedellin
namesCoffe[1] = coffeOtros
console.table(namesCoffe)

function ventaRetail(coffe) {
    for (let i= 0; i < namesCoffe.length; i++) {
        for (let j = 0; j < namesCoffe[i].length; j++) {
            if (  coffe   == namesCoffe[i][j] ){
                return coffe
            }


        }
    
    
    }
}
//console.table(ventaRetail('Amor Perfecto'))
//console.table(ventaRetail('Azahar'))

/*Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. Es decir fila 0, 
semana 1, fila 1, semana 2, etc. Columna 0, dia 1, columna 1, dia 2, etcétera.*/

let matrizWeek =[]
let week1 = [1,2,3,4,5,6,7]
let week2= [8,9,10,11,12,13,14]
let week3 = [15,16,17,100,19,20,21]
let week4 = [22,23,24,25,26,27,28]

matrizWeek[0] =  week1
matrizWeek[1] =  week2
matrizWeek[2] =  week3
matrizWeek[3] =  week4

console.table(matrizWeek)



/*a)  Lo que nos solicitan es dar el total de gastos en una semana. 
Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar 
la fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0.*/


function perWeek(week) {
totalXWeek = 0    
for (let i = 0; i < matrizWeek[week-1].length; i++) {
totalXWeek += matrizWeek[week-1][i]
 
}
    return totalXWeek
}
//console.log(perWeek(2))
//console.log(perWeek(4));
//console.log('total de la semana',totalXWeek);
//console.log('matrizWeek[week-1].length',matrizWeek[week-1].length)

/*b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total 
de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, 
ya que las columnas también comienzan en 0.*/

function perDay(findDay){
    day = 0
for (let i= 0; i < matrizWeek.length; i++) {
    console.log('soy yo');
    if (findDay == matrizWeek[i][findDay] ){
    
    }
 return findDay
    
}

}
console.log(perDay(100));

/*c) Por último, es necesario tener el total de gastos realizados en el mes.*/
function expensesPerMonth() {
    let sumExpenses=0
    for (let i = 0; i<matrizWeek.length; i++) {
        for (let j = 0; j <matrizWeek[i].length; j++) {
            sumExpenses += matrizWeek[i][j]
            
        }
        return sumExpenses
        
    }
}
console.log('Prueba',expensesPerMonth()); 

/*function SumMatriz5X5(){
    let sum =0
    for (let i = 0; i < matriz5x5.length; i++) {
        for(let j = 0; j <matriz5x5[0].length; j++){
        sum += matriz5x5[i][j]  
        }
    }
//console.log(sum)
}

//SumMatriz5X5()*/

let expensesPerMonth2 = [
    [1135,2500,900,1600,2800,3650,1100],
    [1750,1890,1900,1300,898,1750,2800],
    [1700,1150,1690,1900,1770,4500,2560],
    [800,1250,1430,2100,1980,1270,950]
]
//console.log(expensesPerMonth2[1]);

function sumWeek2(week2) {
    let acomulador = 0
    for (let i = 0; i < expensesPerMonth2.length; i++) {
        acomulador = acomulador + expensesPerMonth2[week2-1][i]
        
    }
}
// RETO: Escribir un progranma que nos diga el número más grande de un arreglo.
// Número mayor.

let numMayorReto = [10,11,12,13,14,15,20,30]


let numMayor = numMayorReto[0]
for (let i = 0; i < numMayorReto.length; i++) {
    if ( numMayor = numMayor < numMayorReto[i]) {
        numMayor = numMayorReto[i]
    }
}
//console.log(numMayor);


