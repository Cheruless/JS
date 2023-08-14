alert('Bienvenido Gerente. Por favor ingrese los datos del trabajador manualmente porque la empresa no ha pagado la cuenta de la luz en las oficinas y se perdieron todos los datos porque el gato se durmió en el teclado.')

// FUNCIONES

function verificarNombre() {
  nombre = prompt('Ingrese el nombre del trabajador');

  while (!isNaN(nombre)) {
    alert(nombre + ' no es un nombre válido.');
    nombre = prompt('Por favor ingrese correctamente el nombre del trabajador.');
  }

  return nombre;
}

function verificarID(nombre) {

  do {
    id = parseInt(prompt('Ingrese el RUT o Pasaporte de ' + nombre + ' sin dígito verificador.'));
    if (isNaN(id) || id < 0) {
      alert('No es un ID correcto.');
    }
  } while (isNaN(id) || id < 0);

  return id;
}

function verificarHoras(nombre, id) {
  do {
    horas = parseInt(prompt('Ingrese las horas trabajadas por el operario ' + nombre + ' ' + id + '.'));
    if (isNaN(horas) || horas < 0) {
      alert('Ingrese una cantidad de horas correctas.');
    }
  } while (isNaN(horas) || horas < 0);

  return horas;
}

function sueldoFinal(nombre, horas, horaPagada, horasMIN, horasMAX) {
  let i;
  let j = 0;
  let sueldo = 0;
  let gratitud = 852;

  if (horas < horasMIN) {
    sueldo = horas * horaPagada;
  }
  else {
    for (i = 0; i < horas; i++) {
      if (i < horasMAX) {
        sueldo += horaPagada + gratitud;
      }
      else {
        j++;
      }
    }
  }
  if(j!=0){
    alert('¡¡EL TRABAJADOR '+nombre+' SE HA EXCEDIDO POR UN TOTAL DE * '+j+' HORAS. *!!!\n LAS CUALES NO SERÁN PAGADAS PORQUE NO PAGAMOS HORAS EXTRAS ○|￣|_');
  }

  return sueldo;
}


// MAIN

const horasMin = 80;
const horasMax = 88;

let nombreTrabajador = verificarNombre();
let idTrabajador = verificarID(nombreTrabajador);
let horasTrabajadas = verificarHoras(nombreTrabajador, idTrabajador);
let contratoPorHora = 2700;

const remuneracion = sueldoFinal(nombreTrabajador, horasTrabajadas, contratoPorHora, horasMin, horasMax);


if( horasTrabajadas == 0 || remuneracion > 0 ){
  alert('El trabajador será remunerado con el increíble monto de $'+remuneracion);
}


