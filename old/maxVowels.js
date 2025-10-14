var maxVowels = function(s, k) {
  let left = 0, result = 0, total = 0;
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
  
  for ( let right = 0; right < s.length; right++) {
    
    if ( vowels.has(s[right]) ) {
      result += 1
    }
    
    if( right >= k) {
      if ( vowels.has(s[left]) ) {
        result -= 1
      }
      left ++
    }
    total = Math.max(total, result)
  }
  
  return total
};

maxVowels("abciiidef", 3) // Output: 3
maxVowels("aeiou", 2) // Output: 2
maxVowels("leetcode", 3) // Output: 2
maxVowels("a", 1) // Output: 1
maxVowels("ibpbhixfiouhdljnjfflpapptrxgcomvnb", 33) // Output: 7