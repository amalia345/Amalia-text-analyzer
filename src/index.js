import analyzer from './analyzer.js';

const cajitaText = document.querySelector("textarea[name='user-input']")
const listaMetricas = document.querySelectorAll(".resultados li")
const eliminar = document.getElementById("reset-button")

const promedioSpan = document.getElementById("promedio") // no existe el id en HTML

cajitaText.addEventListener('keyup',analizar)
eliminar.addEventListener('click',refrescar)


function analizar() {
    let palabra1 = cajitaText.value
    listaMetricas[2].innerHTML=analyzer.getWordCount(palabra1)
    listaMetricas[0].innerHTML=analyzer.getCharacterCount(palabra1) 
    listaMetricas[1].innerHTML=analyzer.getCharacterCountExcludingSpaces(palabra1)
    promedioSpan.innerHTML=analyzer.getAverageWordLength(palabra1) // fallaba esta linea porque faltaba el id en el html 
    listaMetricas[3].innerHTML=analyzer.getNumberCount(palabra1)
    listaMetricas[4].innerHTML=analyzer.getNumberSum(palabra1)
}
function refrescar() {
    cajitaText.value=""
    listaMetricas[2].innerHTML='Palabras: 0'
    listaMetricas[0].innerHTML='Caracteres: 0'
    listaMetricas[1].innerHTML='Caracteres sin espacio: 0'
    promedioSpan.innerHTML='0'
    listaMetricas[3].innerHTML='Números: 0'
    listaMetricas[4].innerHTML='Suma números: 0'
}