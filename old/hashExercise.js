// dada una cadena de texto, diga cuantas veces se repite cada palabra
const str = "El perro corre rápido, pero el perro también es lento cuando el perro está cansado. A veces, el gato observa al perro correr, pero el gato no entiende por qué el perro siempre corre hacia el mismo lugar. El perro, sin embargo, no se detiene. El gato piensa que el perro es un poco extraño, pero el gato no dice nada porque al final el gato prefiere descansar mientras el perro corre."

function wordsCount(str){
  const wordsRepeated = new Map()
  const wordsArray = str.replace(/[.,]/g, '').toLowerCase().split(' ')
  
  for(let i=0; i < wordsArray.length; i++){
    let word = wordsArray[i]
    if(wordsRepeated.has(word)){
      let counter = wordsRepeated.get(word) + 1    
      wordsRepeated.set(word, counter)
      continue
    }  
    wordsRepeated.set(word, 1)
  }
  
  return wordsRepeated
}

wordsCount(str)