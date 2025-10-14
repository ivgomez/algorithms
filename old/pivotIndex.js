/*var pivotIndex = function(nums) {
  let sum = [nums[0]];
  let length = nums.length;
  let right = length - 1;
  let left = 0, leftSum = 0, result = -1, operation = 0;
  
  for(let i = 1; i < length; i++){
    sum.push(sum[i-1] + nums[i]);
  }
  while(left <= right){
    operation = sum[right] - sum[left]
    if(operation === leftSum){
      result = left
      break
    }
    leftSum = sum[left]
    left ++
  }
  return result
};*/

var pivotIndex = function(nums) {
  let sum = 0, left = 0
  let leftSum = 0, operation = 0;

  for (let i = 0; i < nums.length; i++ ) {
    sum += nums[i]
  }
  
  while(left < nums.length){
    leftSum += nums[left]
    operation = sum - leftSum
    if(leftSum - nums[left] === operation){
     return left
    }
    left ++
  }
  
  return -1
}

pivotIndex([1,7,3,6,5,6]) // Output: 3
pivotIndex([1,2,3]) // Output: -1
pivotIndex([2,1,-1]) //Output: 0
pivotIndex([-1,-1,-1,1,1,-1]) // Output: -1
pivotIndex([-1,-1,0,0,-1,-1]) // Output: 2
pivotIndex([-1,-1,0,1,1,0]) // Output: 5