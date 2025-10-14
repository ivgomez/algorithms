var numJewelsInStones = function(jewels, stones) {
  let hashMap = new Set()
  let result = 0
  for (const jewel of jewels){
    hashMap.add(jewel)
  }
  for (const stone of stones){
    if(hashMap.has(stone))
      result += 1
  }
  return result
};

numJewelsInStones("aA", "aAAbbbb") // Output 3
numJewelsInStones("z", "ZZ") // Output 0