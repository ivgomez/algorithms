var frequencySort = function(s) {
  const hashMap = new Map()
  let maxFreq = 0
  let result = ''
  
  for(const letter of s){
    hashMap.set(letter, (hashMap.get(letter)||0) + 1)
    maxFreq = Math.max(maxFreq, hashMap.get(letter))
  }

  const values = [...hashMap].sort((a, b) => b[1] - a[1])
  
  for(const [key, value] of values){
    for(let i = 0; i < value; i++){
      result += key
    }
  }
  return result
};

frequencySort("cccaaaaeed") // Output "aaaccceed"
frequencySort("tree") // Output "eert"
frequencySort("cccaaa") // Output "aaaccc"
frequencySort("Aabb") // Output "bbAa"

