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

function esMayor(fechaNacimientoTrabajador) {
  const fechaActual = new Date();
  const fechaNacimiento = new Date(fechaNacimientoTrabajador);

  const diferenciaEnMilisegundos = fechaActual - fechaNacimiento;

  /* 
  1000 multiplica por 1000 para convertir milisegundos en segundos.
  60 multiplica por 60 para convertir segundos en minutos.
  60 multiplica por 60 nuevamente para convertir minutos en horas.
  24 multiplica por 24 para convertir horas en días.
  365 multiplica por 365 para convertir días en años.
  */

  const edad = diferenciaEnMilisegundos / (1000 * 60 * 60 * 24 * 365);

  return edad >= 18;
}
// ------------------- FIN PreEntrega 1

class Usuario {
  constructor(usuario, password, date) {
    this._usuario = usuario;
    this._password = password;
    this._birth = date;
  }
}

const gerente = new Usuario("Jose", "1234", "1992-04-13");

const divDatos = document.querySelector('#datos');
const formLogin = document.querySelector('#formLogin');
const inUser = document.querySelector('#inUser');
const inPassword = document.querySelector('#inPassword');

const divListaUsuarios = document.querySelector('#listaUsuarios');
const inDate = document.querySelector('#inDate');

const usuariosJSON = '[{"_usuario":"Exequiel","_password":"pass123.","_birth":"2001-06-25"},{"_usuario":"Constanza","_password":"repollo999.","_birth":"2001-12-26"},{"_usuario":"Pedro","_password":"bNjdjsDJs98_","_birth":"2004-12-12"},{"_usuario":"Luna","_password":"woofwoof","_birth":"0101-01-01"}]';
const usuarios = JSON.parse(usuariosJSON);

let formRegistroTrabajador = null;



formLogin.onsubmit = e => {
  e.preventDefault();

  if (inUser.value === gerente._usuario && inPassword.value === gerente._password) {
    formLogin.remove();

    formRegistroTrabajador = document.createElement("form");
    formRegistroTrabajador.id = "formRegistroTrabajador";

    const inputNombre = document.createElement("input");
    inputNombre.id = "inUser";
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre";

    const inputPassword = document.createElement("input");
    inputPassword.id = "inPassword";
    inputPassword.type = "password";
    inputPassword.placeholder = "Contraseña";

    const inputDate = document.createElement("input");
    inputDate.id = "inDate";
    inputDate.type = "date";
    inputDate.placeholder = "Fecha de Nacimiento";

    const inputSubmit = document.createElement("input");
    inputSubmit.type = "submit";
    inputSubmit.value = "Iniciar sesión";

    formRegistroTrabajador.appendChild(inputNombre);
    formRegistroTrabajador.appendChild(inputPassword);
    formRegistroTrabajador.appendChild(inputDate);
    formRegistroTrabajador.appendChild(inputSubmit);
    
    formRegistroTrabajador.onsubmit = e => {
      e.preventDefault();
    
      const inDate = document.querySelector('#inDate').value;
      const inUserValue = document.querySelector('#inUser').value;
      const inPasswordValue = document.querySelector('#inPassword').value;
    
      if (esMayor(inDate)) {
        const usuario = new Usuario(inUserValue, inPasswordValue, inDate);
        guardarUsuario(usuario)
      }
      else
        alert("El trabajador ingresado es menor de edad.");
    }

    divDatos.appendChild(formRegistroTrabajador);
  } else {
    alert('Credenciales incorrectas. Por favor, inténtalo nuevamente.');
  }
}



function guardarUsuario(usuario) {
  usuarios.push(usuario);
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  console.log(usuarios);
  mostrarUsuarios();
}

function mostrarUsuarios() {
  if (usuarios.length > 0) {
    let listaUsuariosHTML = '<ul>';
    for (const usuario of usuarios) {
      listaUsuariosHTML += `<li> ${usuario._usuario}</li>`;
    }
    divListaUsuarios.innerHTML = listaUsuariosHTML + '</ul>'
  }
}

const trabajadoresEmpresa = [];
const cantNuevos = 3;
let cont = 1;

const pagaPorHora = 2700;
const horasMin = 80;
const horasMax = 88;

// alert('Usted es el responsable de agregar los nuevos ' + cantNuevos + ' nuevos integrantes de la empresa.');

// do {
//   alert('Agregue al trabajador NUMERO ' + cont);
trabajadoresEmpresa.push(agregarTrabajador());
//   cont++;
// } while (trabajadoresEmpresa.length < cantNuevos)


console.log(trabajadoresEmpresa);

for (const trabajador of trabajadoresEmpresa) {
  console.log();
  console.log(trabajador._nombre);
  console.log(trabajador._id);
  console.log(trabajador._horas);
  console.log(trabajador.sueldoFinal(pagaPorHora, horasMin, horasMax))
}