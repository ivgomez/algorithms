var checkIfPangram = function(sentence) {
  let dictionary = new Set()
  for(const letter of sentence){
    if(!dictionary.has(letter)){
      dictionary.add(letter)
    }
  }
  return dictionary.size === 26
};


checkIfPangram("thequickbrownfoxjumpsoverthelazydog")