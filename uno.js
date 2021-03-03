// Parcial Diego Maiorano 
//division: 1° G
function mostrar()
/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos */
{
	//declaro variables
	var nombreProducto;
	var tipoProducto;
	var precio;
	var cantUnidades;
	var marcaProducto;
	var tipoInflamable;
	var marcaMascaro;
	var tipoMasCaro;
	var precioMasCaro;

	//contadores y acumuladores
	var contadorAlcohol = 0;
	var contadorIAC = 0;
	var contadorQUAT = 0;
	var acumuladorAlcohol = 0;
	var acumuladorIac = 0;
	var acumuladorQuat = 0;
	var promedioAlcohol;
	var promedioIac;
	var promedioQuat;
	var aumuladorIgnifugo = 0;
	var acumuladorCombustible = 0;
	var acumuladorExplosivo = 0;
	var contadorIacBarato = 0;
	
	//flag
	var flag = 0;


	for (var i = 0; i < 3; i++) {
		//pido datos al usuario
		do {
			nombreProducto = prompt("Ingrese nombre del producto");
		} while (isNaN(nombreProducto) == false);

		do {
			tipoProducto = prompt("Ingrese tipo de producto (alcohol-iac-quat): ")
		} while (tipoProducto != "alcohol" && tipoProducto != "iac" && tipoProducto != "quat");

		do {
			precio = parseInt(prompt("Ingrese precio del producto (entre 100 y 300) :"));
		} while (isNaN(precio) || precio < 100 || precio > 300);

		do {
			cantUnidades = parseInt(prompt("Ingrese la cantidad de unidades (entre 1 y 1000):"));
		} while (isNaN(cantUnidades) || cantUnidades < 1 || cantUnidades > 1000);

		do {
			tipoInflamable = prompt("Ingrese que tipo de producto es: (ignifugo-combustible-explosivo)")
		} while (tipoInflamable != "ignifugo" && tipoInflamable != "combustible" && tipoInflamable != "explosivo");

		do {
			marcaProducto = prompt("Ingrese marca del producto");
		} while (isNaN(marcaProducto) == false);

		switch (tipoProducto) {
			case "alcohol":
				contadorAlcohol++;
				acumuladorAlcohol = acumuladorAlcohol + cantUnidades;
				break;
			case "iac":
				contadorIAC++;
				acumuladorIac = acumuladorIac + cantUnidades;
				if (precio >= 200) {
					contadorIacBarato++;
				}

				break;
			case "quat":
				contadorQUAT++;
				acumuladorQuat = acumuladorQuat + cantUnidades;
				break;
		}

		switch (tipoInflamable) {
			case "combustible":
				acumuladorCombustible = acumuladorCombustible + cantUnidades;
				break;
			case "explosivo":
				acumuladorExplosivo = acumuladorExplosivo + cantUnidades;
				break;
			case "ignifugo":
				aumuladorIgnifugo = aumuladorIgnifugo + cantUnidades;
				break;
		}

		if (flag == 0) {
			tipoMasCaro = tipoProducto;
			marcaMascaro = marcaProducto;
			precioMasCaro = precio;
			flag++;
		} else if (precio > precioMasCaro) {
			tipoMasCaro = tipoProducto;
			marcaMascaro = marcaProducto;
			precioMasCaro = precio;
		}
	} // cierre del for


		//muestro en html aparte
	document.write("La cantidad de unidades IAC con precio menor a 201 es :" + contadorIacBarato + "<br>");
	document.write("Del mas caro de los produtos, la marca es :" + marcaMascaro + " y el tipo es :" + tipoMasCaro);

	if (aumuladorIgnifugo > acumuladorCombustible && aumuladorIgnifugo > acumuladorExplosivo) {
		document.write("El tipo de inflamable con mas unidades en total de la compra es : Ignifugo <br>");
	} else if (acumuladorCombustible > aumuladorIgnifugo && acumuladorCombustible > acumuladorExplosivo) {
		document.write("El tipo de inflamable con mas unidades en total de la compra es : Combustible <br>");
	} else if (acumuladorExplosivo > acumuladorCombustible && acumuladorExplosivo > aumuladorIgnifugo) {
		document.write("El tipo de inflamable con mas unidades en total de la compra es : Explosivo <br>");
	}

	if (contadorAlcohol != 0) {
		promedioAlcohol = acumuladorAlcohol / contadorAlcohol;
		document.write("El promedio de cantidad del producto del tipo Alcohol es :" + promedioAlcohol + "<br>");
	} else if (contadorIAC != 0) {
		promedioIac = acumuladorIac / contadorIAC;
		document.write("El promedio de cantidad del producto del tipo Iac es :" + promedioIac + "<br>");
	} else if (contadorQUAT != 0) {
		promedioQuat = acumuladorQuat / contadorQUAT;
		document.write("El promedio de cantidad del producto del tipo Quat es :" + promedioQuat + "<br>");
	}
	
}//fin de la funtion