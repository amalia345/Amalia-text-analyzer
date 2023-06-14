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
    let palabras = text.split(" ");
    let totalLetras = 0;
    for (let i = 0; i < palabras.length; i++) {
      totalLetras += palabras[i].length;
    }
    let promedio = totalLetras / palabras.length;
    return promedio.toFixed(2);
  },
  getNumberCount: (text) => {
    let listaPalabras = text.split(' ');
    let cantidadNumeros = 0;
    for (let i = 0; i < listaPalabras.length; i++) {
      if (!isNaN(listaPalabras[i])) {
        cantidadNumeros++;
      }
    }
    return "Números: " + cantidadNumeros;
  },
  getNumberSum: (text) => {
    const listaPalabras = text.split(' ');
    let suma = 0;
    for (let i = 0; i < listaPalabras.length; i++) {
      if (!isNaN(listaPalabras[i])) {
        suma = suma + parseFloat(listaPalabras[i])
      }
    }
    return "Suma números: " + suma;
  }
};
export default analyzer;