//Añadir imagen a ImagenContenedor
window.onload = function() {
    var contenedorRecetas = document.getElementById("contenedorRecetas");
    var misRecetas = JSON.parse(localStorage.getItem("misRecetas"));
    console.log(misRecetas);

    for (let numero of misRecetas) {
        var imagen = document.createElement("img");
        imagen.src = "../../imagenes/receta" + numero + ".jpg";
        contenedorRecetas.appendChild(imagen);

        var botonBorrar = document.createElement("button");
        botonBorrar.textContent = "Borrar";
        
        botonBorrar.addEventListener("click", function() {
            var indice = misRecetas.indexOf(numero);
            console.log(indice)
            if (indice > -1) {
                misRecetas.splice(indice, 1);
            }

            localStorage.setItem("misRecetas", JSON.stringify(misRecetas));
            contenedorRecetas.removeChild(imagen);
            contenedorRecetas.removeChild(botonBorrar);
            location.reload();

        });

        contenedorRecetas.appendChild(botonBorrar);

        imagen.addEventListener("click", function() {
            window.location.href = "../recetas-popu/receta" + numero + "/index.html";
        });
    }
}