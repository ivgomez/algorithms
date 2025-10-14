var missingNumber = function(nums) {
  let dictionary = new Set(nums)
  for (let i = 0; i <= nums.length; i++){
    if(!dictionary.has(i)){
      return i
    }
  }
};

missingNumber([3,0,1])
missingNumber([0,1])
missingNumber([9,6,4,2,3,5,7,0,1])