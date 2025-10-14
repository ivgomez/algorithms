
/*var NumArray = function(nums) {
  this.nums = nums;
};

NumArray.prototype.sumRange = function(left, right) {
  let nums = this.nums;
  let result = 0
  for(let i = left; i <= right; i++) {
    result += nums[i]
  }
  return result
};
*/

var NumArray = function(nums) {
  this.nums = nums
  let sum = 0
  this.prefixSum = []
  for(let i = 0; i < nums.length; i++) {
    sum += nums[i]
    this.prefixSum[i] = sum
  }
};

NumArray.prototype.sumRange = function(left, right) {
  return this.prefixSum[right] - this.prefixSum[left] + this.nums[left]
};



/*
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
Output
[null, 1, -1, -3]
*/
numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3