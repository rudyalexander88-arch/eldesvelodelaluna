const formulario = document.getElementById("registroForm");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Registro completado correctamente. (Versión Demo)");

    formulario.reset();

});