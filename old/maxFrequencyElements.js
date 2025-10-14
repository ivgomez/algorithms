var maxFrequencyElements = function(nums) {
  const hashMap = new Map()
  let maxValue = 0
  let result = 0
  for(num of nums){
    hashMap.set(num, (hashMap.get(num) || 0) + 1)
    maxValue = Math.max(maxValue, hashMap.get(num)) 
  }
  hashMap.forEach((value, key) => {
    if(value === maxValue){
      result += value
    } 
  })
  return result
};

maxFrequencyElements([1,2,2,3,1,4]) // Output 4
maxFrequencyElements([1,2,3,4,5]) // Output 5
maxFrequencyElements([10,12,11,9,6,19,11]) // Output 2
maxFrequencyElements([19,19,19,20,19,8,19]) // Output 5
maxFrequencyElements([17,17,2,12,20,17,12]) // Output 3