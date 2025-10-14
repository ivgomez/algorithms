var lengthOfLongestSubstring = function(s) {
  let left = 0
  let result = 0
  const hashMap = new Map()
  for(let right = 0; right < s.length; right++){
    
    hashMap.set(s[right], (hashMap.get(s[right]) || 0) + 1)
    
    while(hashMap.get(s[right]) > 1 ){
      hashMap.set(s[left], (hashMap.get(s[left]) - 1))
      if (hashMap.get(s[left]) === 0) {
          hashMap.delete(s[left]);
      }
      left++
    }
    result = Math.max(result, hashMap.size)
  }
  
  return result
};


lengthOfLongestSubstring("abcabcbbb") // Output 3
//lengthOfLongestSubstring("bbbbb") // Output 1