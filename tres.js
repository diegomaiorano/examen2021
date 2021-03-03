// Parcial Diego Maiorano 
//division: 1° G

/**debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% del pasaje que tiene mas de. 60 años , el precio final tiene un descuento del 25%, que solo mostramos si corresponde. */
function mostrar() {
	//declaro variables
	var nombre;
	var estadoCivil;
	var edad;
	var temperaturaCorporal;
	var sexo;
	var masDatos;
	var importeSinDescuento;
	var importeConDescuento;
	var edadSolteraJoven;
	var nombreSolteraJoven;
	//contadores
	var contadorJubiladosViudos = 0;
	var contadorPasajeros = 0;
	var contadorAncianos = 0;
	//flag
	var flag = 0;

	do {
		do {
			nombre = prompt("Ingrese su nombre:");
		} while (isNaN(nombre) == false);

		do {
			estadoCivil = prompt("Ingrese su estado civil (soltero-casado-viudo):");
		} while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo");

		do {
			edad = parseInt(prompt("Ingrese su edad (mayores de 17):"));
		} while (isNaN(edad) || edad < 17 || edad > 90);

		do {
			temperaturaCorporal = parseInt(prompt("Ingrese su temperatura corporal"));
		} while (isNaN(temperaturaCorporal) || temperaturaCorporal < 36 || temperaturaCorporal > 40);

		do {
			sexo = prompt("Ingrese su sexo (masculino-femenino):");
		} while (sexo != "masculino" && sexo != "femenino");

		contadorPasajeros++;

		if (edad > 60 && estadoCivil == "viudo") {
			contadorJubiladosViudos++;
		} else if (edad > 60) {
			contadorAncianos++;
		}

		if (estadoCivil == "soltero" && sexo == "femenino" && edad < edadSolteraJoven) {
			nombreSolteraJoven = nombre;
			edadSolteraJoven = edad;
		}else if (flag == 0 && estadoCivil == "soltero" && sexo == "femenino") {
			nombreSolteraJoven = nombre;
			edadSolteraJoven = edad;
			flag++;
		}

	} while (masDatos = confirm("Desea ingresar mas datos?"));

	importeSinDescuento = contadorPasajeros * 600;
	// mostramos los datos 
	document.write("El importe total sin descuento es :" + importeSinDescuento + "<br>");
	
		if (contadorAncianos != 0) {
			comparador = contadorAncianos * 100 / contadorPasajeros;
			if (comparador > 50) {
				descuento = 0.25;
				importeConDescuento = importeSinDescuento - (importeSinDescuento * 0.25);
				document.write("El importe con descuento es :" + importeConDescuento);
			}
		}
		if (flag != 0) {
			document.write("La persona del sexo femenino soltera mas joven, es :" + nombreSolteraJoven + " y su edad es:" + edadSolteraJoven + "<br>");
		}
	if (contadorJubiladosViudos != 0) {
		document.write("La cantidad de hombres viudos mayores a 60 años es :" + contadorJubiladosViudos + "<br>");
	}



} // cierre funcion