const analyzer = {
  getWordCount: (text) => {// utilce split para crear una variable que separa con espacio (' ') para crear un arreglo de strings y darle.lenght
    let palabrasSeparadas = text.split(' ') //separa el string usando espacio como identificador 
    return "Palabras :" + palabrasSeparadas.length;
  },
  getCharacterCount: (text) => {
    return "Caracteres: " + text.length
  },
  getCharacterCountExcludingSpaces: (text) => {
    let cadenaSinEspacios = text.replace(/[^\w]/gi, "")//Expresion regular w elimina caracteres especiales y espacios, g de agarra todas, i agarra minusculas y mayosculas
    return "Caracteres sin espacios: " + cadenaSinEspacios.length
  },
  getAverageWordLength: (text) => {
    // return (text.replace(/[^\w]/gi, "").length / text.split(' ').length).toFixed(2)
    let palabras = text.split(" ");
    let totalLetras = 0;
    for (var i = 0; i < palabras.length; i++) {
      totalLetras += palabras[i].length;
    }
    var promedio = totalLetras / palabras.length;
    return promedio.toFixed(2);

  },

  getNumberCount: (text) => { 
      let listaPalabras = text.split(' '); // separamos en substrings
      let cantidadNumeros = 0; //contador metemos la cantidad de numeros que hay en la lista
      for (let i = 0; i < listaPalabras.length; i++) { // ciclo que revisa cada elemnto de la lista de palabras
        if (!isNaN(listaPalabras[i]) ){ //parseamos todos los elemntos y checamos cuales si fueron un numero y cuales NAN
          cantidadNumeros++; // si no e snan aumentmaos el contador de  numeros
        }
      }
      return "Números: " + cantidadNumeros;
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    let listaDeNumeros = text.match(/\b\d+(?:\.\d+)?\b/g); 
    let suma = 0;
    if (listaDeNumeros) {
      for (let i = 0; i < listaDeNumeros.length; i++) {
        suma += parseFloat(listaDeNumeros[i]);
      }
    }
    return "Suma números: " + suma ;
  },
};

export default analyzer;
