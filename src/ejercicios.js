let invitados = [
  "Lucas",
  "Matias",
  "Jose",
  "Pedro",
  "Martina",
  "Marcelo",
  "Esteban",
  "Marcela",
  "Martin"
];
//****Cantidad de invitados ****//
console.log(`Cantidad total de invitados ${invitados.length}`);
//****Ultimo invitado ****//
console.log(`Ultimo invitado de la lista ${invitados[invitados.length - 1]}`);
//****Agregar invitado ****//
const newInvitado = invitados.push("Pedro");
console.log(`Nueva lista de invitados ${invitados}`);
//****Quitar invitado {Marcela}****//
const deleteInvitado = invitados.splice(7, 1);
console.log(`Lista de invitados que confirmaron ${invitados}`);
//****modificar un array ****//
let numero = 1;
let newArray = [];
let orden;
invitados.forEach((invitado) => {
  orden = `${invitado}, Orden ${numero}`;
  numero++;
  newArray.push(orden);
});
console.log(newArray);
//****Consumo de invitados ****//
//**Lucas=3,Esteban o jose=1, los demas 4 platos */
const totalPlatos = invitados.reduce((acum, current) => {
  if (current === "Lucas") {
    return acum + 3;
  } else if (current === "Esteban" || current === "Jose") {
    return acum + 1;
  } else {
    return acum + 4;
  }
}, 0);

console.log(totalPlatos);

//****Ordenar Alfabeticamente ****//
const acomodacion = invitados.sort();
console.log(acomodacion);
