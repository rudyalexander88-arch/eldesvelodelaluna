/* DATOS TEMPORALES*/

const poemas = [

    {
        id: 1,
        titulo: "Breve ensayo de un nosotros",
        imagen: "img/poemas/distancia.jpg",
        descripcion: "No hubo historia, ni promesas que romper..."
    },

    {
        id: 2,
        titulo: "Sincretismo de dos almas",
        imagen: "img/poemas/sincretismo.png",
        descripcion: "Tú y yo perdidos, haciendo un sincretismo de dos almas..."
    },

    {
        id: 3,
        titulo: "La Brecha",
        imagen: "img/poemas/labrecha.png",
        descripcion: "Entre mi pecho y tus montañas. Entre tus aguas y mi arena..."
    },

    {
        id: 4,
        titulo: "Perdido en pensARTE: Ojos de miel",
        imagen: "img/poemas/pensarte.png",
        descripcion: "Y me pierdo en unos ojos miel que ya no me miran..."
    },

    {
        id: 5,
        titulo: "Morir en tu piel",
        imagen: "img/poemas/morirentupiel.png",
        descripcion: "Quisiera ser la gota que nace con la lluvia..."
    }

];


/* OBTENER ID DEL POEMA*/

const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const indice = poemas.findIndex(p => p.id === id);

if (indice === -1) {

    window.location.href = "index.html";

}

const poema = poemas[indice];


/* MOSTRAR POEMA*/

document.getElementById("tituloPoema").textContent = poema.titulo;

const imagen = document.getElementById("imagenPoema");

imagen.src = poema.imagen;

imagen.alt = poema.titulo;

document.getElementById("fondo").style.backgroundImage =
`url('${poema.imagen}')`;


/*BOTÓN ANTERIOR*/

const btnAnterior = document.getElementById("anterior");

if (indice > 0) {

    btnAnterior.onclick = () => {

        window.location.href =
        `poema.html?id=${poemas[indice - 1].id}`;

    };

} else {

    btnAnterior.disabled = true;

}


/* BOTÓN SIGUIENTE*/

const btnSiguiente = document.getElementById("siguiente");

if (indice < poemas.length - 1) {

    btnSiguiente.onclick = () => {

        window.location.href =
        `poema.html?id=${poemas[indice + 1].id}`;

    };

} else {

    btnSiguiente.disabled = true;

}


/* NAVEGACIÓN CON TECLADO*/

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowLeft" && indice > 0) {

        window.location.href =
        `poema.html?id=${poemas[indice - 1].id}`;

    }

    if (e.key === "ArrowRight" && indice < poemas.length - 1) {

        window.location.href =
        `poema.html?id=${poemas[indice + 1].id}`;

    }

});