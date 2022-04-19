const prompt = require("prompt-sync")({ sigint: true });

/* 1. Deberás escribir un objeto literal llamado estudiante que contenga las siguientes propiedades que deberás completar con tus datos:
nombre
apellido 
camada
esParcial (VERDADERO)*/

let estudiante = {
nombre : 'Angelica',
apellido : 'Arias',
camada : 2, 
esParcial : true,  
}

//console.log(estudiante);

/* 2. Crear una función que, pasado un número entero (la futura nota), nos devuelva la situación del alumno: 
NOTA < 4 : desaprobado
4 <= NOTA < 7 : debe rendir examen final 
NOTA >= 7 : promocionado.  
La función deberá retornar la condición final del alumno (solo retorna la palabra). 
Al momento de llamar a la función, deberás mostrar la siguiente frase: 
	“El alumno obtuvo una nota igual a [NOTA] por lo tanto su condición es [CONDICIÓN]”*/

function notaParcial(num){
    let condicion 
    if (num < 4) {
        condicion ='Desaprobado'
        }
        else if (num >= 4 && num < 7) {
            condicion = 'Debe Rendir Examén Final'
        }
        else if ( num >= 7){
            condicion = 'Promocionado!!'

        }
console.log('El alumno tuvo una nota igual a '+ num +' por lo tanto su condición es '+ condicion)
return condicion
}

//console.log(notaParcial(3));
//console.log(notaParcial(5));
//console.log(notaParcial(9));

/* 2. //Crea 1 array llamado clase. 
Crea 3 objetos literales con las propiedades nombres, apellidos y bimestre de 3 compañeros. 
Ej: Esteban Piazza 1 - Leandro Borrelli 1 - Martín Cejas 1
Agrega estos 3 objetos al array llamado clase.
Imprimir el array para ver que contenga esos objetos.
Crea una función que reciba el array clase como parámetro e incremente en 1 el número de bimestre de cada uno de los alumnos, llámala siguienteCursada. Debes utilizar una estructura de repetición. 
Deberás hacer el correcto llamado de la función mostrando el array clase antes y después de llamar a siguienteCursada.*/

clase = []

let estudiante1 = {
    nombre :'Angelica',
    apellido : 'Arias',
    bimestre : 1,
}

let estudiante2 ={
    nombre :'Natalia',
    apellido : 'Giraldo',
    bimestre : 1,
}

let estudiante3 = {
    nombre :'Luisa',
    apellido : 'Ortiz',
    bimestre : 1,


}
clase.push(estudiante1,estudiante2,estudiante3)
//console.log(clase);

function siguienteCursada(){
    for (let i = 0; i < clase.length; i++) {
        clase[i].bimestre++
        
    }
}
console.log(clase)
siguienteCursada()
console.log(clase)

/*Punto 3: Crear una función que apruebe o desapruebe alumnos en base a su asistencia y a su 
progreso completo en PlayGround (true, false). Para ello deberán:*/



function validarEstudiante(asitenciaEstudiante,playGround){
    const asitenciaMinima = 23
    if ( asitenciaEstudiante >= asitenciaMinima && playGround == true ) {
        return 'Aprobado!!'
    } 
    else { return 'Desaprobado'
    }

}
console.log(validarEstudiante(23,true));
console.log(validarEstudiante(23,false));
console.log(validarEstudiante(10,false));
console.log(validarEstudiante(30,true));