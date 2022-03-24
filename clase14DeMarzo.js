const prompt = require("prompt-sync")({ sigint: true });


/*let edad = -5

if ( edad >= 0 && edad < 18) {
    console.log ('No puede pasar al bar.')
} else if ( edad >= 18 && edad < 21) {
    console.log ('Puede pasar al bar, pero no puede tomar alcohol.')
} else if (edad < 0) {
    console.log ('Error, edad inválida. Por favor ingrese un número válido')
}else {
    console.log( 'Puede pasar al bar y tomar alcohol.' )
}*/

let edad = 19
function numeroImpar (x){
    if (x % 2!=0){
        console.log('Sabias que tú edad es impar?')
    } else {
        console.log('Sabias que tú edad es par')
    }
}


if ( edad >= 0 && edad < 18) {
    console.log ('No puede pasar al bar')
    numeroImpar(edad)    

} else if ( edad >= 18 && edad < 21) {
    console.log ('Puede pasar al bar, pero no puede tomar alcohol.')
    numeroImpar(edad)

} else if ( edad == 21 ){
    console.log('Bienvenid@ llegaste a la mayoria de edad')
    numeroImpar(edad)
}
else if (edad < 0) {
    console.log ('Error, edad inválida. Por favor ingrese un número válido')
} else {
    console.log( 'Puede pasar al bar y tomar alcohol.' )
}

//Ejercicio 2//
function totalAPagar(vehiculo, litrosConsumidos){
    if (vehiculo = coche){ litrosConsumidos = 86

    }
}
