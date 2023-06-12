import analyzer from './analyzer.js';
console.log(analyzer)
const cajitaText = document.querySelector("textarea[name='user-input']")
const listaMetricas = document.querySelectorAll(".resultados li")
const eliminar = document.getElementById("reset-button")

cajitaText.addEventListener('keyup',analizar)
eliminar.addEventListener('click',refrescar)

function analizar() {
    let palabra1 = cajitaText.value
    listaMetricas[2].innerHTML=analyzer.getWordCount(palabra1)
    listaMetricas[0].innerHTML=analyzer.getCharacterCount(palabra1) //no mover este
    listaMetricas[1].innerHTML=analyzer.getCharacterCountExcludingSpaces(palabra1)
    listaMetricas[5].innerHTML=analyzer.getAverageWordLength(palabra1)
    listaMetricas[3].innerHTML=analyzer.getNumberCount(palabra1)
    listaMetricas[4].innerHTML=analyzer.getNumberSum(palabra1)
}
function refrescar() {
    cajitaText.value=" " // agarramos el text area y le metemos unstring vacio
    window.location.reload();// refresca la ventana
}