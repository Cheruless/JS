const num1 = parseInt(prompt('Ingrese el primer numero'));
const num2 = parseInt(prompt('Ingrese el segundo numero'));



const condicion = (num1 + num2) <= 20;

if(condicion) {
  alert('La suma de ' +num1+ ' mas ' + num2+ ' es menor o igual que 20' );

}
else{
  respuesta = num1 + num2;
  alert('La suma de ' +num1+ ' mas ' +num2+ ' no es menor o igual que 20 porque es '+respuesta );

}


