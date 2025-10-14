var uniqueOccurrences = function(arr) {
  const hashMap = new Map()
  const ocurrences = new Set()
  let result = true
  for(const num of arr){
    hashMap.set(num, (hashMap.get(num) || 0) + 1)
  }
  if(hashMap.size === 1){
    return true
  }
  hashMap.forEach((value, key) => {
    if(ocurrences.has(value)){  
      result = false
    }
    ocurrences.add(value)
  })
  return result
};

uniqueOccurrences([1,2,2,1,1,3]) // Output true
uniqueOccurrences([1,2]) // Output false
uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]) // Output true
uniqueOccurrences([2,2]) // Output true
uniqueOccurrences([3,5,-2,-3,-6,-6]) // Output false
uniqueOccurrences([3,5,-2,-3,-6,-6]) // Output false

// var uniqueOccurrences = function(arr) {
//   const map = new Map();  
//   for(let i=0; i < arr.length; i++) {
//     map.set(arr[i], (map.get(arr[i]) || 0) + 1)    
//   }
  
//   const set = new Set();
  
//   for(const item of map){
//     if(set.has(item[1])){
//       return false
//     }
//     set.add(item[1])
//   }
//   return true
// };
 