const prompt = require("prompt-sync")({ sigint: true });

function edadPerro (a) {
    return 'la edad de tu perro es ' + a * 7;
}
a = prompt ('¿cuál es la edad de tu perro? ')
console.log (edadPerro(a))

function 