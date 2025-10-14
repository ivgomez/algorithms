var canConstruct = function(ransomNote, magazine) {
  const hashMap = new Map() 
  for(const letter of ransomNote){
    hashMap.set(letter, (hashMap.get(letter) || 0) + 1)
  }
   for(const letter of magazine){
     if(hashMap.has(letter)){
        hashMap.set(letter, (hashMap.get(letter) || 0) - 1)
        if(hashMap.get(letter) === 0)
          hashMap.delete(letter)
     }
  }
  return hashMap.size === 0
};

canConstruct("a","b") // Output: false
canConstruct("aa","ab") // Output: false
canConstruct("aa","aab") // Output: true
canConstruct("secret","secter") // Output: true