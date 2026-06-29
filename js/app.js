/*=========================================
        CONFIGURACIÓN
=========================================*/

// Más adelante solo cambiaremos esta línea

const API =
"https://script.google.com/macros/s/AKfycbz1Hqn-oiknBaxO2XJZlVzhYYOEPz5wkSYF0h_mP1w9LiXVui5FOHasWwCG_w2f1eeq/exec";


/*=========================================
        DATOS TEMPORALES
=========================================*/

let poemas = [

{

id:1,

titulo:"Breve ensayo de un nosotros",

imagen:"img/poemas/distancia.jpg",

descripcion:"No hubo historia, nipromesas que romper..."

},

{

id:2,

titulo:"Sincretismo de dos almas",

imagen:"img/poemas/sincretismo.png",

descripcion:"Tu y yo perdidos, Haciendo un sincretismo de dos almas..."

},

{

id:3,

titulo:"La Brecha",

imagen:"img/poemas/labrecha.png",

descripcion:"Entre mi pecho y tus montañas. Entre tus aguas y mi arena..."

},

{

id:4,

titulo:"Perdido en pensARTE: Ojos de miel",

imagen:"img/poemas/pensarte.png",

descripcion:"Y me pierdo en unos ojos miel que ya no me miran..."

},

{

id:5,

titulo:"Morir en tu piel",

imagen:"img/poemas/morirentupiel.png",

descripcion:"Quisiera ser la gota que nace con la lluvia..."

}

];


/*=========================================
            CARGAR MENU
=========================================*/

function cargarMenu(){

const lista=document.getElementById("lista-poesias");

lista.innerHTML="";

poemas.forEach(poema=>{

lista.innerHTML+=`

<li>

<a href="poema.html?id=${poema.id}">

${poema.titulo}

</a>

</li>

`;

});

}


/*=========================================
        BANNER PRINCIPAL
=========================================*/

function cargarBanner(){

const slider=document.getElementById("slider-poesias");

slider.innerHTML="";

poemas.forEach(poema=>{

slider.innerHTML+=`

<div class="card">

<img src="${poema.imagen}">

<div class="card-content">

<h3>

${poema.titulo}

</h3>

<p>

${poema.descripcion}

</p>

<a href="poema.html?id=${poema.id}">

Leer poesía →

</a>

</div>

</div>

`;

});

}


/*=========================================
        ULTIMAS
=========================================*/

function cargarUltimas(){

const contenedor=document.getElementById("ultimas-poesias");

contenedor.innerHTML="";

poemas.forEach(poema=>{

contenedor.innerHTML+=`

<div class="card">

<img src="${poema.imagen}">

<div class="card-content">

<h3>

${poema.titulo}

</h3>

<p>

${poema.descripcion}

</p>

<a href="poema.html?id=${poema.id}">

Leer →

</a>

</div>

</div>

`;

});

}


/*=========================================
        INTRO
=========================================*/

window.addEventListener("load",()=>{

setTimeout(()=>{

const intro=document.getElementById("intro");

intro.style.opacity="0";

intro.style.visibility="hidden";

},4500);

});


/*=========================================
        BOTON HERO
=========================================*/

document
.getElementById("explorar")
.addEventListener("click",()=>{

document
.getElementById("banner")
.scrollIntoView({

behavior:"smooth"

});

});


/*=========================================
        HEADER
=========================================*/

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>100){

header.style.background="rgba(0,0,0,.82)";

}

else{

header.style.background="rgba(0,0,0,.45)";

}

});


/*=========================================
        REVELAR SECCIONES
=========================================*/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{threshold:.20});


document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});


/*=========================================
        INICIAR
=========================================*/

cargarMenu();

cargarBanner();

cargarUltimas();

/*=========================
        MENU
==========================*/

const menu=document.getElementById("menu");

const boton=document.getElementById("menuToggle");

boton.addEventListener("click",()=>{

    menu.classList.toggle("active");

});