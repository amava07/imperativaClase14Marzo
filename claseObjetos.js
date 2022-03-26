//Ejercicio:


let nombreCompannias = ['Apple','Amazon', 'Google', 'Microsoft','Walmart']
let valorCompannias = [ 355080, 350273, 263425, 184245, 111918]

function buscarNombre(){
for (let i = 0; i < nombreCompannias.length; i++) {
    console.log(nombreCompannias[i]);

    }
}
buscarNombre()
console.log('--Termina punto A--');


function buscarPorValor() {
    for (let i= 0; i < valorCompannias.length; i++) {
        console.log(valorCompannias[i])  ;
        
    }
}
buscarPorValor()
console.log('--Termina Punto B--');

/* ¿Se les ocurre algún tipo de dato que logremos representar ambos casos de forma 
más adecuada para poder tener él cada marca con su nombre
y correspondiente valor? ¿ por qué ?
R/Un objeto literal nos permite representar ambos casos de manera real y reuniendo los datos */

let compannias = [
{
    nombre : 'Apple',
    valor : 355080
},
{
    nombre : 'Amazon',
    valor : 350273
},
{
    nombre : 'Google',
    valor : 263425
},
{
    nombre : 'Microsoft',
    valor : 184245
},
{
    nombre : 'Walmart',
    valor : 111918
}
]

function buscarPormarca(texto){
    for (let i = 0; i < compannias.length; i++) {
        if (texto == compannias[i].nombre){
            return compannias[i]
        }
    }
    return undefined
    }
    console.log(buscarPormarca('Apple'));
    console.log('--Termina punto C (a)--');

    function incrementarValormarcas(){
        for (let i = 0; i < compannias.length; i++) {
            compannias[i].valor *= 1.01;
            
        }
    }
    console.log(compannias);
    incrementarValormarcas()
    console.log(compannias);
    console.log('Termina punto C(b)-----');

