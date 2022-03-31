misMascotas = [ 
{ 
    nombre : 'Teo',
    raza : 'criollo',
    edad : '10',
    sonido : 'guau, guau',
    emitirSonido: function (){
        return this.sonido + this.sonido
    }

},
{
    nombre : 'Mango',
    raza : 'husky',
    edad : '3',
    sonido : 'aw, aw',
    emitirSonido: function (){
        return this.sonido + this.sonido
    }


},
{
    nombre : 'bigotes',
    raza : 'B y N',
    edad : '4',
    sonido : 'miau',
    emitirSonido: function (){
        return this.sonido + this.sonido
    } 
}
]; 

//console.log(misMascotas[1])

function aumentarEdad (arrayMascotas){
    for (let i = 0; i < arrayMascotas.length; i++) {
    arrayMascotas[i].edad++
        //arrayMascotas[i].edad = arrayMascotas[i].edad + 1
        
        
    }
}
//aumentarEdad(misMascotas)
//console.log(misMascotas);

function aumentarEdad2 (arrayMascotas){
    for (let i = 0; i < arrayMascotas.length; i++) {
    if(arrayMascotas[i]< 6){
        arrayMascotas[i].edad++
    }else if (arrayMascotas[i].edad >= 6 && arrayMascotas[i].edad <= 10 ){
        arrayMascotas[i].edad = arrayMascotas[i].edad + 2;
    }else if (arrayMascotas[i].edad > 10 ){

    }
    }
}
aumentarEdad2(misMascotas)
console.log(misMascotas);