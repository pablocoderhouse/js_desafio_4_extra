// consulta  del cliente? saber cuantas noches se puede alojar con x cantidad de dinero
let persona = Number(prompt("ingrese cantidad de personas"));
let cabana_economica = 2000; //boton para seleccionar cabaña economica
Efectivo_cliente = Number(prompt("ingrese cuanto efectivo tienen para alojarse"));

function dividir(Efectivo_cliente, persona, cabana_economica) {
noches = Efectivo_cliente / (persona * cabana_economica);
    alert(`tenes para alojarte ${Math.round( noches)} noches`);
}
dividir(Efectivo_cliente, persona, cabana_economica)
   