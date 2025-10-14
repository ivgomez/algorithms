var maximumUniqueSubarray = function(nums) {
  const hasMap = new Map()
  let prefixSum = 0, left = 0, result = 0
  
  for(let right = 0; right < nums.length; right++){
    
    prefixSum += nums[right]
    hasMap.set(nums[right], (hasMap.get(nums[right]) || 0) + 1)
    
    while(hasMap.get(nums[right]) > 1){
      hasMap.set(nums[left], (hasMap.get(nums[left]) || 0) - 1)
      prefixSum -= nums[left]
      left++
    }
    
    result = Math.max(result, prefixSum)
  }
  return result
};

maximumUniqueSubarray([4,2,4,5,6]) // Output 17
maximumUniqueSubarray([5,2,1,2,5,2,1,2,5]) // Output 8
maximumUniqueSubarray([10000,1,10000,1,1,1,1,1,1]) // Output 10001
maximumUniqueSubarray([3, 2, 1, 2]) // Output 6
maximumUniqueSubarray([187,470,25,436,538,809,441,167,477,110,275,133,666,345,411,459,490,266,987,965,429,166,809,340,467,318,125,165,809,610,31,585,970,306,42,189,169,743,78,810,70,382,367,490,787,670,476,278,775,673,299,19,893,817,971,458,409,886,434]) // Output 16911

/*
var maximumUniqueSubarray = function(nums) {
  const hasMap = new Set()
  let prefixSum = 0, left = 0, result = 0
  
  for(let right = 0; right < nums.length; right++){
     while(hasMap.has(nums[right])){
      hasMap.delete(nums[left])
      prefixSum -= nums[left]
      left++
    }
    
    prefixSum += nums[right]
    hasMap.add(nums[right])
    result = Math.max(result, prefixSum)
  }
  return result
};
*/

