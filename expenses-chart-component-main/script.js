let barras = document.querySelectorAll(".bar")
let fecha = new Date();
fecha = fecha.getUTCDay();
let toasts = document.querySelectorAll(".toast")
let texto_total = document.querySelector("#total-spending-month")

if (fecha == 0){
  fecha = 7
}



function obtener_dia(numero_dia){
  barras[numero_dia-1].style.backgroundColor="hsl(186, 34%, 60%)"
}

function buscar_mayor(lista){

  let gastos = []
  let total_gastos=0
  //Obtenemos los gastos diarios y los almacenamos en una lista
  lista.forEach(day => {
    gastos.push(day.amount);
    total_gastos += day.amount
  });
  
  mayor = Math.max(...gastos)
  
  //Mediante  una regla de 3 calculamos el porcentaje de alto de cada barra, Está al 70 por ciento para que no utilice todo el alto y no tape los toast
  lista.forEach((day, index) => {
    porcentaje = day.amount * 70 / mayor
    barras[index].style.height = porcentaje+"%"
    toasts[index].textContent = "$ " + day.amount
  });

  texto_total.innerHTML= total_gastos.toFixed(2)
}

function solicitud(){

  axios.get('./data.json')
  .then(response => {
    console.log(response.data); 
    buscar_mayor(response.data);
    obtener_dia(fecha);
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });

}
solicitud()

barras.forEach((barra, index) => {

  barra.addEventListener("mouseover", (e) =>{
    e.target.style.filter = "brightness(1.3)"
    console.log(index);
    toasts[index].style.display = "flex"

  })

  barra.addEventListener("mouseout", (e) =>{
    e.target.style.filter = "brightness(1)"
    toasts[index].style.display = "none"


  })

});