import analyzer from './analyzer.js'; // Objeto analuzer
//Nunca cambiará con const
const cajitaText = document.querySelector("textarea[name='user-input']") 
const listaMetricas = document.querySelectorAll(".resultados li") // const es una variable
const eliminar = document.getElementById("reset-button")

const caracterSpan = document.getElementById("caracter")
const caracterSinSpan = document.getElementById("caracterSin") 
const palabrasSpan = document.getElementById("palabras") 
const numerosSpan = document.getElementById("numeros") 
const sumaSpan = document.getElementById("suma") 
const promedioSpan = document.getElementById("promedio") 

cajitaText.addEventListener('keyup',analizar) //LLama a la funcion
eliminar.addEventListener('click',refrescar)


function analizar() {
  const palabra1 = cajitaText.value //Let puede cambiar
  palabrasSpan.innerHTML=analyzer.getWordCount(palabra1)
  caracterSpan.innerHTML=analyzer.getCharacterCount(palabra1) 
  caracterSinSpan.innerHTML=analyzer.getCharacterCountExcludingSpaces(palabra1)
  promedioSpan.innerHTML=analyzer.getAverageWordLength(palabra1) // fallaba esta linea porque faltaba el id en el html 
  numerosSpan.innerHTML=analyzer.getNumberCount(palabra1)
  sumaSpan.innerHTML=analyzer.getNumberSum(palabra1)
}
function refrescar() {
  cajitaText.value=""
  listaMetricas[2].innerHTML='Palabras: 0' // Insertar a html 
  listaMetricas[0].innerHTML='Caracteres: 0'
  listaMetricas[1].innerHTML='Caracteres sin espacio: 0'
  promedioSpan.innerHTML='0'
  listaMetricas[3].innerHTML='Números: 0'
  listaMetricas[4].innerHTML='Suma números: 0'
}