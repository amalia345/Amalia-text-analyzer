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
    return (text.replace(/[^\w]/gi, "").length / text.split(' ').length).toFixed(2)
  },

  getNumberCount: (text) => {
    let listaPalabras = text.split(' ')
    let listaNumeros = [];
    for (let i = 0; i < listaPalabras.length; i++) {
      let numeroPars = parseInt(listaPalabras[i])
      if (!isNaN(numeroPars)) { // SI el elemento i tiene un numero
        listaNumeros.push(numeroPars)// conviertelo a numero con parseint y guardalo en Listadepalabras
      } else {
        console.log('no es numero');
      }
    }
    return "Números: " + listaNumeros.length;
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    console.log(text)
    let listaPalabras = text.split(' ')
    let listaNumeros = [];

    listaPalabras.forEach(palabra => { //ciclo for/
      if (!isNaN(palabra)) { // SI el elemento i tiene un numero
        listaNumeros.push(parseFloat(palabra))// conviertelo a numero con parseint y guardalo en Listadepalabras
      }// push es guardaar en unalista
    });

    let suma = 0;

    listaNumeros.forEach(numero => {
      suma += numero
    });
    return "Suma números: " + suma;
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
