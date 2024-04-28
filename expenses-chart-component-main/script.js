let barras = document.querySelectorAll(".bar")


function buscar_mayor(lista){

  gastos = []
  
  //Obtenemos los gastos diarios y los almacenamos en una lista
  lista.forEach(day => {
    gastos.push(day.amount);
  });
  
  mayor = Math.max(...gastos)
  
  //Mediante  una regla de 3 calculamos el porcentaje de alto de cada barra
  lista.forEach((day, index) => {
    porcentaje = day.amount * 100 / mayor
    barras[index].style.height = porcentaje+"%"
  });

}

function solicitud(){

  axios.get('./data.json')
  .then(response => {
    console.log(response.data); 
    buscar_mayor(response.data)
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });

}



solicitud()