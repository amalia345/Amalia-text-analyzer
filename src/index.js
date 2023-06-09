import analyzer from './analyzer.js';
console.log(analyzer)
let cajitaText = document.querySelector("textarea[name='user-input']")
let palabra = document.querySelector(".resultados li")
const eliminar = document.getElementById("reset-button")

cajitaText.addEventListener('keyup',analizar)
eliminar.addEventListener('click',refrescar)

function analizar() {
    const palabra1 = cajitaText.value
    palabra.innerHTML=analyzer.getCharacterCount(palabra1)
}
function refrescar() {
    cajitaText.value="" // agarramos el text area y le metemos unstring vacio
    window.location.reload();// refresca la ventana
}
