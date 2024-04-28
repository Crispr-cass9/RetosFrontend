let barras = document.querySelectorAll(".bar")

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
// mayor --> 100%
// valor -->  X

function buscar_mayor(lista){
  gastos = []
  lista.forEach(day => {
    gastos.push(day.amount);
  });
  mayor = Math.max(...gastos)
  
  lista.forEach((day, index) => {
    porcentaje = day.amount * 100 / mayor
    console.log("{$porcentaje}%");
    barras[index].style.height = porcentaje+"%"
  });

}

solicitud()