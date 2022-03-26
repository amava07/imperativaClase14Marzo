/* Dios */

const alicia = [10, 80, 75];
const bob = [90, 20, 25];

function encontrarGanador(a, b) {
let puntosPrimerParticipante = 0;
let puntosSegundoParticipante = 0;

for (let i = 0; i < a.length; i++) {
    console.log('alicia',a[i]);
    console.log('bob',b[i]);
    if (a[i] > b[i]) {
        puntosPrimerParticipante++
    } 
    else if(a[i] < b[i] ){
        puntosSegundoParticipante++
    }
}
console.log('Puntos Alicia', puntosPrimerParticipante);
console.log('Puntos Bob', puntosSegundoParticipante)

if ( puntosPrimerParticipante > puntosSegundoParticipante )  {
    console.log( 'Ganó Alicia!!' );   
}
else { console.log('Ganó Bob!!' ); }

}
encontrarGanador(alicia, bob)
//console.log("El ganador es: " + encontrarGanador(a, b) + "
//participante");