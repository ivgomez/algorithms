var sumOfUnique = function(nums) {
  const hasMap = new Map()
  let result = 0
  for(const num of nums) {
    hasMap.set(num, (hasMap.get(num) || 0) + 1)
  }
  hasMap.forEach((key, num)=>{
    if(key === 1){
      result += num
    }
  })
  return result
};

sumOfUnique([1,2,3,2]) // Output 4
sumOfUnique([1,1,1,1,1]) // Output 0
sumOfUnique([1,2,3,4,5]) // Output 15