// Parcial Diego Maiorano 
//division: 1° G
/*
Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.

*/
function mostrar(){
  //declaro variables
  var nombre;
  var cursada;
  var cantidadMaterias;
  var sexo;
  var notaPromedio;
  var edad;
  var mejorPromedioFoNB;
  var nombreJoven;
  var edadMasJoven;
  var nombreMejorPromedio;
  var mayorCantidadMaterias;
  var edadMayorCantidadMaterias;
  var nombreMayorCantidadMaterias;
  var continuar;

  //acumuladores y contadores
  var acumuladorNotaMasculina = 0;
  var acumuladorNotaFemenina = 0;
  var acumuladorNotaNobinario = 0;
  var contadorMasculino = 0;
  var contadorFemenino = 0;
  var contadorNobinario = 0;
  var promedio;

  //flag
  var flag1 = 0;
  var flag2 = 0;
  var flag3 = 0;

  do {
    do {
      nombre = prompt("Ingrese nombre");
    } while (isNaN(nombre) == false);

    do {
      cursada = prompt("Ingrese el tipo de cursada (libre-presencial-remota)");
    } while (cursada != "libre" && cursada != "presencial" && cursada != "remota");

    do {
      cantidadMaterias = parseInt(prompt("Ingrese la cantidad de materias"));
    } while (isNaN(cantidadMaterias) || cantidadMaterias < 0 || cantidadMaterias > 8);

    do {
      sexo = prompt("Ingrese el sexo (femenino-masculino-no binario)");
    } while (sexo != "femenino" && sexo != "masculino" && sexo != "no binario");

    do {
      notaPromedio = parseInt(prompt("Ingrese la nota entre 0 y 10"));
    } while (isNaN(notaPromedio) || notaPromedio < 0 || notaPromedio > 10);

    do {
      edad = parseInt(prompt("Ingrese la edad del alumnx"));
    } while (isNaN(edad) || edad < 18 || edad > 50);

    switch (sexo) {
      case "masculino":
        contadorMasculino++;
        acumuladorNotaMasculina = acumuladorNotaMasculina + notaPromedio;
        break;
      case "no binario":
        contadorNobinario++;
        acumuladorNotaNobinario = acumuladorNotaNobinario + notaPromedio;
        break;
      case "femenino":
        contadorFemenino++;
        acumuladorNotaFemenina = acumuladorNotaFemenina + notaPromedio;
        break;
    }

    if (flag1 == 0 && sexo != "masculino") {
      flag1++;
      mejorPromedioFoNB = notaPromedio;
      nombreMejorPromedio = nombre;
    } else if (notaPromedio > mejorPromedioFoNB && sexo != "masculino") {
      mejorPromedioFoNB = notaPromedio;
      nombreMejorPromedio = nombre;
    }

    if (flag2 == 0 && cursada == "libre") {
      flag2++;
      nombreJoven = nombre;
      edadMasJoven = edad;
    } else if (edad < edadMasJoven && cursada == "libre") {
      nombreJoven = nombre;
      edadMasJoven = edad;
    }

    if (flag3 == 0 && cursada != "remota") {
      flag3++;
      edadMayorCantidadMaterias = edad;
      nombreMayorCantidadMaterias = nombre;
      mayorCantidadMaterias = cantidadMaterias;
    } else if (cantidadMaterias > mayorCantidadMaterias && cursada != "remota") {
      edadMayorCantidadMaterias = edad;
      nombreMayorCantidadMaterias = nombre;
      mayorCantidadMaterias = cantidadMaterias;
    }
  } while (continuar = confirm("Desea ingresar continuar ingresando datos?"));
  //imprimo datos en un nuevo html
  document.write("Nombre del mejor promedio que no es masculino :" + nombreMejorPromedio + "<br>");
  document.write("nombre alumno mas joven de los que dan libre es :" + nombreJoven + "<br>");
  document.write("nombre del alumno que cursa mas materias que no sea en forma remota, edad :" + edadMayorCantidadMaterias + " nombre :" + nombreMayorCantidadMaterias);


  if (contadorFemenino != 0) {
    promedio = acumuladorNotaFemenina / contadorFemenino;
    document.write("El promedio por nota del sexo femenino es :" + promedio + "<br>");
  } else if (contadorMasculino != 0) {
    promedio = acumuladorNotaMasculina / contadorMasculino;
    document.write("El promedio por nota del sexo masculino es :" + promedio + "<br>");
  } else if (contadorNobinario != 0) {
    promedio = acumuladorNotaNobinario / contadorNobinario;
    document.write("El promedio por nota del sexo no binario es :" + promedio + "<br>");
  }



  /*a) El nombre del mejor promedio que no sea masculino
    b) El nombre del mas joven de los alumnos entre los que la dan libre
    c) El promedio de nota por sexo
    d) La edad y nombre del que cursa mas materias que no sean en forma remota
    */
}// cierre de la funcion mostrar