function checkForTarget(nums, target){
  let result = 0, left = 0, right = nums.length - 1
  
  while(left < right){
    result = nums[left] + nums[right]
    
    if(result === target) return true;
    
    if(result > target){
      right--
    } else
      left++
  }
  console.log(result)
  return false
}

checkForTarget([1, 2, 4, 6, 8, 9, 14, 15], 13)
checkForTarget([2, 4, 5, 8, 10, 14, 16], 11)