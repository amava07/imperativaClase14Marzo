const prompt = require("prompt-sync")({ sigint: true });


/*let edad = -5

if ( edad >= 0 && edad < 18) {
    console.log ('No puede pasar al bar.')
} else if ( edad >= 18 && edad < 21) {
    console.log ('Puede pasar al bar, pero no puede tomar alcohol.')
} else if (edad < 0) {
    console.log ('Error, edad inválida. Por favor ingrese un número válido')
}
 else {
    console.log( 'Puede pasar al bar y tomar alcohol.' )
}*/

let edad = -5

if ( edad >= 0 && edad < 18) {
    console.log ('No puede pasar al bar.')
} else if ( edad >= 18 && edad < 21) {
    console.log ('Puede pasar al bar, pero no puede tomar alcohol.')
} else if ( edad == 21 ){
    console.log
}
else if (edad < 0) {
    console.log ('Error, edad inválida. Por favor ingrese un número válido')
}
 else {
    console.log( 'Puede pasar al bar y tomar alcohol.' )
}
