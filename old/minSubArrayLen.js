var minSubArrayLen = function(target, nums) {
  let left = 0;
  let result = 0;
  let total = Infinity;
  
  for( let right = 0; right < nums.length; right ++ ){
    result += nums[right]
    while(result >= target){
      result -= nums[left];
      total = Math.min(total, ((right - left) + 1));
      left ++
    }    
  }

  return total === Infinity ? 0 : total
};

minSubArrayLen(7, [2,3,1,2,4,3]) // Output: 2
minSubArrayLen(11, [1,2,3,4,5]) // Output: 3
minSubArrayLen(11, [1,1,1,1,1,1,1,1]) // Output: 0
minSubArrayLen(15, [5,1,3,5,10,7,4,9,2,8]) // // Output: 2