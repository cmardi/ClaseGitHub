//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll("#links  a");
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    link.className = "seleccionado";

var x = document.getElementById("nav");
x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

// Añadir el listener para el evento scroll
window.addEventListener('scroll', efectoHabilidades);

// Ejecutar efectoHabilidades al cargar la página por si algunos elementos están ya en el viewport
document.addEventListener('DOMContentLoaded', efectoHabilidades);

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    let skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("css").classList.add("barra-progreso2");
        document.getElementById("bootstrap").classList.add("barra-progreso3");
        document.getElementById("js").classList.add("barra-progreso4");
    }

}