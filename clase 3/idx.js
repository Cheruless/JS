alert('Bienvenido. Por favor selecciona')

let horasMin = 20;
let horasAlert = 22;

let nombreTrabajador = prompt('Ingrese el nombre del trabajador');
let idTrabajador;

while( !isNaN(nombreTrabajador) ){
    alert(nombreTrabajador+' no es un nombre válido.');
    nombreTrabajador = prompt('Por favor ingrese correctamente el nombre del trabajador.');
}

do{
  idTrabajador = parseInt(prompt('Ingrese el ID de '+nombreTrabajador+'.'));
  if( isNaN(idTrabajador) ){
    alert(idTrabajador+' no es un ID correcto.');
  }
}while( isNaN(idTrabajador) );

