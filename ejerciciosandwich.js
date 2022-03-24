const prompt = require("prompt-sync")({ sigint: true });

let base = prompt('¿Qué base desea para el sandwich, pollo, carne o vegetariano?')
let pan = prompt ('¿Qué tipo de pan desea, blanco, negro o sin gluten?')
let queso = asignarBooleano(prompt('¿Desea adiccionar queso?'))
let tomate = asignarBooleano(prompt ('¿Desea adiccionar tomate?'))
let lechuga = asignarBooleano (prompt('¿Desea adiccionar lechuga?'))
let cebolla = asignarBooleano (prompt ('¿Desea adiccionar cebolla?'))
let mayonesa = asignarBooleano (prompt ('¿Desea adiccionar mayonesa?'))
let mostaza = asignarBooleano (prompt ('¿Desea adiccionar mostaza?')) 

function asignarBooleano(stringValue){
    if (stringValue == 'si'){
        return true;
    }else{
        return false;
    }
}

function sandwich (base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza){
    let total = 0
    if ( base == 'pollo'){
    total = 150
    } else if ( base == 'carne'){
        total = 200 
    } else if ( base == 'vegetariano'){
        total = 100
    } else {
        console.log('verifique la base')
    }

    if ( pan == 'blanco'){
        total += 50
    } else if ( pan== 'negro'){
        total += 60
    } else if ( pan == 'sin gluten'){
        total += 75
    }

    if (queso) {
        total += 20
    }
    if (tomate) {
        total += 15
    }
    if (lechuga){
        total += 10
    }
    if (cebolla){
        total += 15
    }
    if (mayonesa) {
        total += 5
    }
    if (mostaza) {
        total += 5
    }
    return total
}
console.log (sandwich(base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza))
