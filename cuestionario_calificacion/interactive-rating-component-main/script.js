let lista_calificaciones = document.querySelectorAll(".btn-calificacion");
let btn_enviar = document.querySelector("#btn-enviar")
let calificacion = null;
let cuadrado_agradecimientos = document.querySelector("#contenedor-agradecimiento")
let cuadrado_puntuanos = document.querySelector("#contenedor-votacion")
let texto_calificacion = document.querySelector("#texto-calificacion")

btn_enviar.disabled = true;
console.log(btn_enviar);

lista_calificaciones.forEach((element, index) => {

    element.addEventListener("click", () => {
        calificacion = index + 1
        lista_calificaciones.forEach(element => {
            element.setAttribute("class", "btn-calificacion")
        });
        element.setAttribute("class", "btn-calificacion seleccionado")
        btn_enviar.disabled = false;
    })

});

btn_enviar.addEventListener("click", () => {
    if (btn_enviar.disabled != true){
        texto_calificacion.innerHTML = `You selected ${calificacion} of 5`
        cuadrado_agradecimientos.style.display = "flex"
        cuadrado_puntuanos.style.display = "none"
    }
})