var maxSubarrayLength = function(nums, k) {
  const hashMap = new Map()
  let left = -1
  let maxLength = 0
  
  for(let right = 0; right < nums.length; right++){
    hashMap.set(nums[right], (hashMap.get(nums[right])||0) + 1)
    while(hashMap.get(nums[right]) > k){
      hashMap.set(nums[left], hashMap.get(nums[left]) - 1)
      left++
    }
    maxLength = Math.max(maxLength, right - left)
  }
  return maxLength
};

maxSubarrayLength([1,2,3,1,2,3,1,2], 2) // Output 6
maxSubarrayLength([1,2,1,2,1,2,1,2], 1) // Output 2
maxSubarrayLength([5,5,5,5,5,5,5], 4) // Output 4