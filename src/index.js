import analyzer from './analyzer.js'; // introduzco el objeto analyzer desde el archivo analyzer.js
//Nunca cambiará con const
const cajitaText = document.querySelector("textarea[name='user-input']") 
const eliminar = document.getElementById("reset-button")

const caracterSpan = document.getElementById("caracter")
const caracterSinSpan = document.getElementById("caracterSin") 
const palabrasSpan = document.getElementById("palabras") 
const numerosSpan = document.getElementById("numeros") 
const sumaSpan = document.getElementById("suma") 
const promedioSpan = document.getElementById("promedio") 

cajitaText.addEventListener('keyup',analizar) //Cada que se presione una tecla dentro de cajatex llamamos a la funcion analizar 
eliminar.addEventListener('click',refrescar)//Cada que se de un clik en el boton eliminar llamamos a la funcion refrescar 

function analizar() {//Let puede cambiar, const nunca va a cambiar
  const palabra1 = cajitaText.value //Palabra 1 es la variable donde guardamos el valor de lo que escribe el usiuario
  palabrasSpan.innerHTML=analyzer.getWordCount(palabra1)//Inserta en html el resultado de la funcion
  caracterSpan.innerHTML=analyzer.getCharacterCount(palabra1) 
  caracterSinSpan.innerHTML=analyzer.getCharacterCountExcludingSpaces(palabra1)
  promedioSpan.innerHTML=analyzer.getAverageWordLength(palabra1) // fallaba esta linea porque faltaba el id en el html 
  numerosSpan.innerHTML=analyzer.getNumberCount(palabra1)
  sumaSpan.innerHTML=analyzer.getNumberSum(palabra1)
}
function refrescar() {
  cajitaText.value=""
  palabrasSpan.innerHTML='0'
  caracterSpan.innerHTML='0'
  caracterSinSpan.innerHTML='0'
  promedioSpan.innerHTML='0'
  numerosSpan.innerHTML='0'
  sumaSpan.innerHTML='0'
}