alert('Me levanto.');

let cantKilosQueYaComi = 0;
let cantKilosQueTengoQueComer = parseInt(prompt('Cuantos kg deseas comer hoy?'));

do{
  if(isNaN(cantKilosQueTengoQueComer)){
    alert('Eso no es un número, por favor repita');
    cantKilosQueTengoQueComer = parseInt(prompt('Cuantos kg deseas comer hoy?'));
  }
}while(isNaN(cantKilosQueTengoQueComer));


for(cantKilosQueYaComi = 0; cantKilosQueYaComi <= cantKilosQueTengoQueComer; cantKilosQueYaComi++){
  alert('Adentro un kilo.');
  alert('He comido '+cantKilosQueYaComi+' kilos.');
}

alert('a mimir');