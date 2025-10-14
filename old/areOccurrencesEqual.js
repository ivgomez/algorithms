var areOccurrencesEqual = function(s) {
  let count = new Map()
  for (const letter of s) {
    count.set(letter, count.get(letter) + 1 || 1) 
  }
  console.log(count.values())
  const dict = new Set(count.values())
  return dict.size === 1
}


areOccurrencesEqual('abacbc')