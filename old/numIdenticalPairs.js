// var numIdenticalPairs = function(nums) {
//   const hasMap = new Map()
//   let result = 0
  
//   for(const num of nums){
//     hasMap.set(num, (hasMap.get(num) || 0) + 1)
//   }
  
//   hasMap.forEach((value, key) => {
//     if(value > 1){
//       result += (value*(value-1))/2
//     }
//   })
//   return result
// };

var numIdenticalPairs = function(nums) {
  const hasMap = new Map()
  let result = 0
  
  for(const num of nums){
    result += hasMap.get(num) || 0
    console.log(result)
    hasMap.set(num, (hasMap.get(num) || 0) + 1)
  }
  
  return result
};

// numIdenticalPairs([1,2,3,1,1,3]) // Output 4
numIdenticalPairs([1,1,1,1,1]) // Output 6
// numIdenticalPairs([1,2,3]) // Output 0