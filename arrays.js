const prompt = require("prompt-sync")({ sigint: true });

//Arrays
/*let grupo = [ 'Angelica','Natalia','Luisa']
let edades = [ 35, 30, 32]
let valoresDeVerdad = [true, false, true]
let variados = ['Angelica',35, true, false, edades]



//Un dato concreto dentro de un array
//console.log(edades)

// ¿Arrays dentro de Arrays?
console.log(variados[4][1])
console.log(variados.length)*/

/*let nombresDeCafe = ['amarti','amor perfecto', 'arangos', 'don honorio','azahar', 'cóndor']

nombresDeCafe.push('okafe','BCC')
nombresDeCafe.push('quindio')
nombresDeCafe.push('arangos')

 //nombresDeCafe.shift()
 //nombresDeCafe.shift()
 //nombresDeCafe.unshift('amarti')

let posicionArangos = nombresDeCafe.lastIndexOf('arangos')
console.log(nombresDeCafe)
console.log(nombresDeCafe.length)
console.log(posicionArangos)*/

/*let estudiantes = [
    {
    nombre: 'Alvaro',
    promedio : 9,
    curso : 'Android',
    },
    {
    nombre: 'Daniel',
    promedio : 6,
    curso : 'Full Stack',
    },
    {
    nombre: 'Alexis',
    promedio : 3,
    curso : 'iOS',
    },
]

estudiantes.push(['nombre:Juan','promedio:5','curso:IOS'],['nombre: Miguel','promedio:2', 'curso:Android']);
console.log(estudiantes)*/

/*let sentimiento = 'estoy muy feliz'
console.log(sentimiento.length)
console.log(sentimiento.indexOf('muy'))

let otroSentimiento = 'me gusta JS'
console.log(otroSentimiento.slice(3,8));*/

/*function reemplazoFastFast (a,b,c){
    return a.replace (b,c)

}  
console.log(reemplazoFastFast ('Este texto es mala onda','mala','buena'))
console.log('Hola mundo'.indexOf('Hola'))




function menciona(a,b){
    return a.includes(b)
}

console.log("resultado indexOf: ")
console.log(menciona("Hola mundo","Hola"))*/

/*const elements = [ 'fire', 'air', 'water', 'earth', 'love'] 

let rtaFinal = ''
const separator = '--'
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator
}
const rta = elements.join('--')

console.log('for',rtaFinal)
console.log('join',rta);

const title = 'Curso de Manipulaciòn de Arrays'

const urlFinal = title.split(' ').join('-').toLowerCase()
console.log(urlFinal)*/

//ejercicio:
/*const notas = 0
function totalNotas(a,b,c) {
    notas = (a + b + c )/ 3
    return notas
}
console.log(totalNotas(5,5,5));*/

/*Para este ejercicio contamos con un objeto literal deportista ya definido, que tiene los siguientes atributos: nombre, energia, experiencia.

Queremos poder pedirle al deportista que entrene. Para esto, nuestro trabajo va a ser completar la función entrenarHoras.

La función entrenarHoras tiene las siguientes tres características:

Recibe por parámetro la cantidad de horas.
Resta a su energía (this.energia) la cantidad de horas x 5.
Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.*/

/*const deportista = {
    nombre : 'aimar',
    energia : 100,
    experiencia : 10,
    entrenarHoras : function(a){
    this.energia = this.energia - (a * 5)
    this.experiencia = this.experiencia + (a * 2)

    }
}
deportista.entrenarHoras(5)
console.log('energia',deportista.energia)
console.log('experiencia',deportista.experiencia);
console.log('------fin ejercicio--------');*/

/* Desde un banco nos contactan para crear una aplicación que pueda facilitar el manejo
de información y las acciones que el mismo necesita. Nuestro tech leader nos facilita la
forma de representar a los usuarios (cuentas bancarias). Cada una de estas cuentas
tiene la siguiente información:
● N.º de cuenta (solo números).
● Tipo de cuenta (cuenta corriente en pesos o caja de ahorro en
pesos).
● Saldo en pesos (solo la cantidad).
● Titular de la cuenta (nombre completo).
Teniendo en cuenta esta información, se nos pide que hagamos lo siguiente:*/

//la lista de clientes.
/*let arrayCuentas = [
    {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
    },
    {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
    },
    {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
    },
    {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
    },
    {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
    },
];
  // podes continuar tu codigo a partir de aca!


let banco = {
    clientes : arrayCuentas,
    consultarCliente : function (nombre) {
        return this.clientes.find(a => a.titularCuenta== nombre)
        
    }
        
    }
console.log(banco.consultarCliente('Jacki Shurmer'));

    //console.log("cliente 0", arrayCuentas.find(a => a.titularCuenta=='Ramon Connell'))
    //console.log(banco.clientes);*/

/*Se ingresa por teclado un número natural de hasta 2 cifras, si
tiene una cifra que muestre lo mínimo que le falta para ser un
número de 2 cifras; de lo contrario, que muestre lo mínimo que
le falta para ser un número de 3 cifras. Considerar que el
usuario ingresa números de hasta dos cifras.*/

/*let number = parseInt(prompt('ingresa un numero de dos cifras máximo:  '))

function howMuch (number) {

    if (number <= 9) {
        return 10 - number   
    } else{ 
        return 100 - number

    }
}
    console.log( howMuch(number) );
    console.log ('---')*/

//Ejercicio Banco
/* //la lista de clientes.*/

let arrayCuentas = [
	{
		nroCuenta: 5486273622,
		tipoDeCuenta: "Cuenta Corriente",
		saldoEnPesos: 27771,
		titularCuenta: "Abigael Natte",
	},
	{
		nroCuenta: 1183971869,
		tipoDeCuenta: "Caja de Ahorro",
		saldoEnPesos: 8675,
		titularCuenta: "Ramon Connell",
	},
	{
		nroCuenta: 9582019689,
		tipoDeCuenta: "Caja de Ahorro",
		saldoEnPesos: 27363,
		titularCuenta: "Jarret Lafuente",
	},
	{
		nroCuenta: 1761924656,
		tipoDeCuenta: "Cuenta Corriente",
		saldoEnPesos: 32415,
		titularCuenta: "Ansel Ardley",
	},
	{
		nroCuenta: 7401971607,
		tipoDeCuenta: "Cuenta Unica",
		saldoEnPesos: 18789,
		titularCuenta: "Jacki Shurmer",
	},
];

//Objeto Literal

let banco = {
	clientes: arrayCuentas,
	consultarCliente: function (nombre) {
		for (let i = 0; i < this.clientes.length; i++) {
			if (nombre == this.clientes[i].titularCuenta) {
				return this.clientes[i];
			}
		}
	},
	deposito: function (titularCuenta, depositoNuevo) {
		for (let i = 0; i < this.clientes.length; i++) {
			if (titularCuenta == this.clientes[i].titularCuenta) {
				banco.clientes[i].saldoEnPesos += depositoNuevo;
				console.log(
					"Depósito realizado, su nuevo saldo es: ",
					banco.clientes[i].saldoEnPesos
				);
			}
		}
	},
	extraccion: function (titularCuenta, montoExtraer) {
		for (let i = 0; i < this.clientes.length; i++) {
			if (titularCuenta == this.clientes[i].titularCuenta) {
				let saldoTemporal = this.clientes[i].saldoEnPesos - montoExtraer;
				if (saldoTemporal < 0) {
					console.log("Fondos Insuficientes");
				} else {
					this.clientes[i].saldoEnPesos = saldoTemporal;
					console.log(
						"Extracción realizada correctamente, su nuevo saldo es:" +
							this.clientes[i].saldoEnPesos
					);
				}
			}
		}
	},
};

//banco.deposito("Ramon Connell", 10000 )
banco.extraccion("Jacki Shurmer", 500);

// con el método .find
/*consultarCliente: function(nombre) { 
        return this.clientes.find(a => a.titularCuenta ==nombre)      
    }
}
console.log(banco.consultarCliente('Jacki Shurmer'));*/

//console.log(banco.consultarCliente("Jacki Shurmer"));
//console.log('--Termina punto--');

//console.log('Depósito realizado, su nuevo saldo es'(totalDeposito));
