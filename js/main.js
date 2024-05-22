
//https://www.youtube.com/watch?v=I3stKiPIb-w

document.addEventListener("input", e => {
  const buscadorInput = document.getElementById("buscador_input");
  const listaArticulos = document.getElementById("listaArticulos");

  if (e.target === buscadorInput) {
    listaArticulos.style.display = buscadorInput.value.trim() === "" 
        ? "none" 
        : "block";
  }
});

document.addEventListener("keyup", e => {
    if (e.target.matches("#buscador_input")) {

        const searchTerm = e.target.value.trim().toLowerCase();

        document.querySelectorAll(".articulo").forEach(elemento => {
            const articleText = elemento.textContent.trim().toLowerCase();
            
            if (articleText.startsWith(searchTerm)) {
                elemento.classList.remove("filtro");
            } else {
                elemento.classList.add("filtro");
            }
        });
    }
});

let misRecetas = JSON.parse(localStorage.getItem("misRecetas")) || [];

function guardarImagen(numero) {
    if (misRecetas.includes(numero)) {
        alert("Ya tienes esa receta guardada");
    }
    else {
        misRecetas.push(numero);
        localStorage.setItem("misRecetas", JSON.stringify(misRecetas));
        alert("Receta guardada correctamente")
        console.log(misRecetas);
    }
}

// Borrar escrito en formulario
function botonEnviar() {
    alert("Formulario enviado correctamente");
    document.getElementById('formulario').reset();
}
