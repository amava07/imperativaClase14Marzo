/*1. Crear un array llamado misMascotas

2. Dentro de este array crearemos un objeto para cada mascota. Cada objeto deberá tener: 
nombre
raza
edad 
sonido
un método que nos retorne ese sonido 2 veces
Cuando esté listo, verificar en consola

3. Deberemos crear una función que se llame aumentarEdad que aumente la edad de cada animal en 1.
*/

let misMascotas = [
	{
		nombre: "Teo",
		raza: "criollo",
		edad: 7,
		sonido: "guau, guau",
		ladrar: function () {
			return this.sonido + " " + this.sonido;
		},
	},
	{
		nombre: "Cyborg",
		raza: "Lobo Siberiano",
		edad: 20,
		sonido: "guau, guau",
		ladrar: function () {
			return this.sonido + " " + this.sonido;
		},
	},
	{
		nombre: "Isis",
		raza: "criollo",
		edad: 4,
		sonido: "miau, miau",
		maullar: function () {
			return this.sonido + " " + this.sonido;
		},
	},
	{
		nombre: "Zeus",
		raza: "snauzer",
		edad: 6,
		sonido: "guau, guau",
		ladrar: function () {
			return this.sonido + " " + this.sonido;
		},
	},
];

function aumentarEdad(misMascotas) {
	//arrayMascotas
	for (let i = 0; i < misMascotas.length; i++) {
		misMascotas[i].edad++;
	}
}

//console.log(misMascotas[2].maullar())
//aumentarEdad(misMascotas)
//console.log(misMascotas);

/*Ahora debemos crear otra función, que se llame  aumentarEdad2, que va a hacer un trabajo más fino:
Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad*/

function aumentarEdad2(misMascotas) {
	//arrayMascotas
	console.log("hola mundo", misMascotas);
	for (let i = 0; i < misMascotas.length; i++) {
		if (misMascotas[i].edad < 6) {
			misMascotas[i].edad++;
		} else if (misMascotas[i].edad >= 6 && misMascotas[i].edad <= 10) {
			misMascotas[i].edad = misMascotas[i].edad + 2;
		} else if (misMascotas[i].edad > 10) {
			let mascotasMayor10;
			mascotasMayor10 = misMascotas[i].edad / 2;
			return misMascotas[i].edad + mascotasMayor10;
		}
	}
}
//console.log(misMascotas);
//console.log(aumentarEdad2(misMascotas))

/*Ahora crearemos una función que va a generar un identificador (ID) en cada objeto, 
que será secuencial y que empezará en 1.*/

function indentificador() {
	for (let i = 0; i < misMascotas.length; i++) {
		misMascotas[i].id = i + 1;
	}
}
//indentificador(misMascotas)
//console.log(misMascotas);

/*A partir de el siguiente array de edades nos solicitan realizar lo siguiente:
Obtener en un nuevo array las edades menores a 18.*/

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

let menoresDe18 = [];
for (let i = 0; i < edades.length; i++) {
	if (edades[i] < 18) {
		menoresDe18.push(edades[i]);
	}
}
//console.log(menoresDe18);

//Obtener en un nuevo array las edades mayor o igual a 18.
let mayoresDe18 = [];
for (let i = 0; i < edades.length; i++) {
	if (edades[i] >= 18) {
		mayoresDe18.push(edades[i]);
	}
}
//console.log(mayoresDe18);

//Obtener el menor.
let menorNum = edades[0];
for (let i = 0; i < edades.length; i++) {
	if (edades[i] < menorNum) {
		menorNum = edades[i];
	}
}
//console.log(menorNum);
//Obtener el mayor.
let mayorNum = edades[0];
for (let i = 0; i < edades.length; i++) {
	if (edades[i] >= mayorNum) {
		mayorNum = edades[i];
	}
}
//console.log(mayorNum);

//Obtener el promedio de edades.
let promedioEdades;
let sum = 0;
for (let i = 0; i < edades.length; i++) {
	promedioEdades = (sum += edades[i]) / edades.length;
}
//console.log(promedioEdades);

//Incrementar en 1 todas las edades.
for (let i = 0; i < edades.length; i++) {
	edades[i]++;
}
//console.log(edades);

//Tenemos como base un array de cuentas bancarias, donde a cada una la
//representamos con un objeto literal. A partir de este array trabajaremos
//sobre los siguientes enunciados, resolviendo de la forma que nos parezca más adecuada

const arrayCuentas = [
	{
		titular: "Arlene Barr",
		estaHabilitada: false,
		saldo: "$3,253.40",
		edadTitular: 33,
		tipoCuenta: "sueldo",
	},
	{
		titular: "Roslyn Torres",
		estaHabilitada: false,
		saldo: "$3,229.45",
		edadTitular: 27,
		tipoCuenta: "sueldo",
	},
	{
		titular: "Cleo Lopez",
		estaHabilitada: true,
		saldo: "$1,360.19",
		edadTitular: 34,
		tipoCuenta: "corriente",
	},
	{
		titular: "Daniel Malone",
		estaHabilitada: false,
		saldo: "$3,627.12",
		edadTitular: 30,
		tipoCuenta: "sueldo",
	},
	{
		titular: "Ethel Leon",
		estaHabilitada: true,
		saldo: "$1,616.52",
		edadTitular: 34,
		tipoCuenta: "sueldo",
	},
	{
		titular: "Harding Mitchell",
		estaHabilitada: true,
		saldo: "$1,408.68",
		edadTitular: 25,
		tipoCuenta: "corriente",
	},
];

//Obtener un nuevo array de cuentas cuyas edades sean menores a 30.

function menoresDe30() {
	let newArrayMenor30 = [];
	for (let i = 0; i < arrayCuentas.length; i++) {
		if (arrayCuentas[i].edadTitular < 30) {
			newArrayMenor30.push(arrayCuentas[i].edadTitular);
		}
	}
	return newArrayMenor30;
}
//menoresDe30()
//console.log(menoresDe30())

//Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.

function mayorIgualDe30() {
	let newArrayMayorigual30 = [];
	for (let i = 0; i < arrayCuentas.length; i++) {
		if (arrayCuentas[i].edadTitular >= 30) {
			newArrayMayorigual30.push(arrayCuentas[i].edadTitular);
		}
	}
	return newArrayMayorigual30;
}

//console.log(mayorIgualDe30())

//Obtener un nuevo array de cuentas cuyas edades sean igual a 30.

function igualA30() {
	let newArrayigualA30 = [];
	for (let i = 0; i < arrayCuentas.length; i++) {
		if (arrayCuentas[i].edadTitular == 30) {
			newArrayigualA30.push(arrayCuentas[i].edadTitular);
		}
	}
	return newArrayigualA30;
}

//console.log(igualA30())

//Obtener la cuenta con el titular de la misma más joven.
//let menor = arrayCuentas[0]

let menor = arrayCuentas[0].edadTitular;
function edadMenor() {
	for (let i = 0; i < arrayCuentas.length; i++) {
		if (arrayCuentas[i].edadTitular < menor) {
			menor = arrayCuentas[i].edadTitular;
			cuenta = arrayCuentas[i];
		}
	}
	return cuenta;
}
//console.log(edadMenor())

//let menor =
function edadMenor() {
	for (let i = 0; i < arrayCuentas.length; i++) {
		if (arrayCuentas[i].edadTitular < arrayCuentas[0].edadTitular) {
			//menor = arrayCuentas[i].edadTitular
			cuenta = arrayCuentas[i];
		}
	}
	return cuenta;
}
//console.log(edadMenor())

//Obtener un nuevo array por cada tipo de cuenta.



function tipoDeCuenta() {
	let arrayCuentaSueldo = []
	let arrayCuentaCorriente =[]
	for (let i = 0; i < arrayCuentas.length; i++) {
		if (arrayCuentas[i].tipoCuenta == 'sueldo') {
			arrayCuentaSueldo.push(arrayCuentas[i])
		} else { arrayCuentaCorriente.push(arrayCuentas[i])
		}
	}

return [arrayCuentaSueldo,arrayCuentaCorriente]

	//console.log(tipoDeCuenta());
	//return arrayCuentaSueldo
}
let [a,b] = tipoDeCuenta()
console.log(a);

//Obtener un nuevo array con las cuentas habilitadas.
function cuentaHabilitada() {
	let arrayCuentaHabilitada = []
	let arrayCuentaNoHabilitada =[]
	for (let i = 0; i < arrayCuentas.length; i++) {
		if (arrayCuentas[i].estaHabilitada == 'true') {
			arrayCuentaHabilitada.push(arrayCuentas[i])
		} 
		//else { arrayCuentaNoHabilitada.push(arrayCuentas[i])
		//}
	}

	return arrayCuentaHabilitada
//return [arrayCuentaHabilitada,arrayCuentaNoHabilitada]

}
console.log(cuentaHabilitada());
