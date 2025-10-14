var getMissingNumber = function(nums, n){
  let acc = 0;

  for (let i = 0; i < nums.length; i++){
    acc += nums[i]
  }
  
  return ((n*(n+1))/2 ) - acc
}

getMissingNumber([0, 5, 3, 7, 9, 1, 2, 8, 6, 10], 10)
getMissingNumber([0, 2], 2)
getMissingNumber([0, 1, 2, 4, 3], 5)
getMissingNumber([12, 0, 4, 3, 7, 11, 9, 1, 5, 8, 6, 10], 12)