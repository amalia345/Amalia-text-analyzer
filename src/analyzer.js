const analyzer = {
  getWordCount: (text) => {// utilce split para crear una variable que separa con espacio (' ') para crear na lista de strings y darle.lenght
    const palabrasSeparadas = text.split(' ') //separa el string usando espacio como identificador 
    return  palabrasSeparadas.length;
  },
  getCharacterCount: (text) => {
    return  text.length
  },
  getCharacterCountExcludingSpaces: (text) => {
    const cadenaSinEspacios = text.replace(/[^\w]/gi, "")//Expresion regular w elimina signos y espacios, g agarra todas, i agarra minusculas y mayosculas
    return  cadenaSinEspacios.length
  },
  getAverageWordLength: (text) => {
    const palabras = text.split(" ");
    let totalLetras = 0;
    for (let i = 0; i < palabras.length; i++) {
      totalLetras += palabras[i].length;
    }
    const promedio = totalLetras / palabras.length;
    return parseFloat(promedio.toFixed(2));
  },
  getNumberCount: (text) => {
    const listaPalabras = text.split(' ');
    let cantidadNumeros = 0;
    for (let i = 0; i < listaPalabras.length; i++) {
      if (!isNaN(listaPalabras[i])) {
        cantidadNumeros++;
      }
    }
    return  cantidadNumeros;
  },
  getNumberSum: (text) => {
    const listaPalabras = text.split(' ');
    let suma = 0;
    for (let i = 0; i < listaPalabras.length; i++) {
      if (!isNaN(listaPalabras[i])) {
        suma = suma + parseFloat(listaPalabras[i])
      }
    }
    return suma;
  }
};
export default analyzer;