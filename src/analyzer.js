const analyzer = {  
  getWordCount: (text) => {// utilce split para crear una variable que separa con espacio (' ') para crear un arreglo de strings y darle.lenght
    let palabrasSeparadas = text.split(' ') //separa el string usando espacio como identificador 
    return "Palabras :" + palabrasSeparadas.length;
  },
  getCharacterCount: (text) => {
    return "Caracteres: " + text.length
  },
  getCharacterCountExcludingSpaces: (text) => {
    let cadenaSinEspacios = text.replace(/[^\w]/gi,"")//Expresion regular w elimina caracteres especiales y espacios, g de agarra todas, i agarra minusculas y mayosculas
    return "Caracteres sin espacios: " + cadenaSinEspacios.length
  },
  getAverageWordLength: (text) => {    
    return  "Promedio Longitud: " + text.replace(/[^\w]/gi,"").length / text.split(' ').length

  },
  getNumberCount: (text) => {
    let listaPalabras = text.split(' ')
    let listaNumeros = [];
    for (let i = 0; i < listaPalabras.length; i++) {
      if (listaPalabras[i].match(/[0-9]+/g)) { // SI el elemento i tiene un numero
        listaNumeros.push(parseInt(listaPalabras[i]))// conviertelo a numero con parseint y guardalo en Listadepalabras
      } else {
        console.log('no es numero');
      }
      
    }
    return "Números: " + listaNumeros.length;
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    let listaPalabras = text.split(' ')
    let listaNumeros = [];

    listaPalabras.forEach(element => {
      if (element.match(/[0-9]+/g)) { // SI el elemento i tiene un numero
        listaNumeros.push(parseInt(element))// conviertelo a numero con parseint y guardalo en Listadepalabras
      }
    });

    let suma=0;

    listaNumeros.forEach(element => {
      suma+=element
    });
    return "Suma números: " + suma;
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
