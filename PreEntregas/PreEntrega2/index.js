class Trabajador {
  constructor(nombre, id, horasTrabajo) {
    this._nombre = nombre;
    this._id = parseInt(id);
    this._horas = parseInt(horasTrabajo);
  }

  sueldoFinal(horaPagada, horasMIN, horasMAX) {
    let i;
    let j = 0;
    let sueldo = 0;
    let gratitud = 852;

    if (this._horas < horasMIN) {
      sueldo = this._horas * horaPagada;
    }
    else {
      for (i = 0; i < this._horas; i++) {
        if (i < horasMAX) {
          sueldo += horaPagada + gratitud;
        }
        else {
          j++;
        }
      }
    }
    if (j != 0) {
      alert('¡¡EL TRABAJADOR ' + this._nombre + ' SE HA EXCEDIDO POR UN TOTAL DE * ' + j + ' HORAS. *!!!\n LAS CUALES NO SERÁN PAGADAS PORQUE NO PAGAMOS HORAS EXTRAS ○|￣|_');
    }

    return sueldo;
  }
}

// -------------------PreEntrega 1

function verificarNombre() {
  nombre = prompt('Ingrese el nombre del trabajador');

  while (!isNaN(nombre)) {
    console.log(nombre + ' no es un nombre válido.');
    nombre = prompt('Por favor ingrese correctamente el nombre del trabajador.');
  }

  return nombre.toUpperCase();
}

function verificarID(nombre) {
  do {
    id = parseInt(prompt('Ingrese el RUT o Pasaporte de ' + nombre + ' sin dígito verificador.'));
    if (isNaN(id) || id < 0) {
      console.log('No es un ID correcto.');
    }
  } while (isNaN(id) || id < 0);

  return id;
}


function verificarHoras(nombre, id) {
  do {
    horas = parseInt(prompt('Ingrese las horas trabajadas por el operario ' + nombre + ' ' + id + '.'));
    if (isNaN(horas) || horas < 0) {
      console.log('Ingrese una cantidad de horas correctas.');
    }
  } while (isNaN(horas) || horas < 0);

  return horas;
}

// ------------------- FIN PreEntrega 1

function agregarTrabajador() {
  let nombreTrabajador = verificarNombre();
  let id = verificarID(nombreTrabajador);
  return new Trabajador(nombreTrabajador, id, verificarHoras(nombreTrabajador, id));
}




//

const trabajadoresEmpresa = [];
const cantNuevos = 3;
let cont = 1;

const pagaPorHora = 2700;
const horasMin = 80;
const horasMax = 88;

alert('Usted es el responsable de agregar los nuevos ' + cantNuevos + ' nuevos integrantes de la empresa.');

do {
  alert('Agregue al trabajador NUMERO ' + cont);
  trabajadoresEmpresa.push(agregarTrabajador());
  cont++;
} while (trabajadoresEmpresa.length < cantNuevos)


console.log(trabajadoresEmpresa);

for (const trabajador of trabajadoresEmpresa) {
  console.log();
  console.log(trabajador._nombre);
  console.log(trabajador._id);
  console.log(trabajador._horas);
  console.log(trabajador.sueldoFinal(pagaPorHora, horasMin, horasMax))
}

forin

