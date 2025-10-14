/*const minStartValue = function(nums) {
    
    for(let i = 1; i < nums.length; i++){
        nums[i] += nums[i - 1];
    }

  let min = 1;
  for (let i = 0; i < nums.length; i++ ){
      min = Math.min(nums[i], min)
  }
  return min < 1 ? -min + 1 : min
};
minStartValue([-3,2,-3,4,2])
minStartValue([1, 2])
minStartValue([1, -2, -3])
minStartValue([2,3,5,-5,-1])
const s = 'abc', t = 'ahgbjckl'
const strForReverse = ['h', 'e', 'l', 'l', 'o']
const nonDecreasingArray = [-7,-3,2,3,11]
const maxSubArray = [1, 1]
const k = 3
const maxAvgArray = [3,3,4,3,0], maxAvgArrayK = 3
const longestOnesArray = [1,1,1,0,0,0,1,1,1,1,0], longestOnesK = 2;
const arrayToSplit = [10, 4, -8, 7];*/

//isSubsequence(s, t)
//reverseString(strForReverse)
//squaresSortedB(nonDecreasingArray)
//maxSubarrayLength(maxSubArray, k)
//findMaxAverage(maxAvgArray, maxAvgArrayK)
//longestOnes(longestOnesArray, longestOnesK)
//waysToSplitArray(arrayToSplit)

/*function waysToSplitArray(nums){
  const prefix = [nums[0]];
  
  for (let i = 1; i < nums.length; i++){
    prefix.push(nums[i] + prefix[i - 1])
  }
  
  let ans = 0
  
  for(let i = 0; i < prefix.length - 1; i++){
    let left_side = prefix[i];
    let right_side = prefix[prefix.length - 1] - prefix[i]
    
    if(left_side >= right_side){
      ans += 1
    }
  }
  
  return ans
}

function longestOnes(nums, k){
  let count = 0, left = 0, ans = 0;
  
  for(let i = 0; i < nums.length; i++){
    if(nums[i] == '0'){
      count += 1
    }
    
    while( count > longestOnesK ){
      if(nums[left] == '0'){
        count -= 1
      }
      left++
    }
    ans = Math.max(ans, i - left + 1)
  }
  
  return ans
}

function findMaxAverage(nums, k){
  
  if(nums.length === 1) return nums
  
  let sum = 0, ans = 0;
  
  for(let i = 0; i < k; i++){
    sum += nums[i]
  }
  ans = sum/k
  
  for(let i = k; i < nums.length; i++){
    sum += nums[i] - nums[i - k];
    ans = Math.max(ans, sum/k)
  }
  
  return ans
}

function maxSubarrayLength(nums, k) {
    let left = 0;
    let curr = 0;
    let answer = 0;

    for (let right = 0; right < nums.length; right++) {
        curr += nums[right];

        while (curr > k) {
            curr -= nums[left];
            left++;
        }

        answer = Math.max(answer, right - left + 1);
    }

    return answer;
}

function squaresSortedA(nums: number[]){
  let left = 0, right = nums.length - 1;
  let numAux;
  
  while(left < right){
    if(Math.abs(nums[left]) < Math.abs(nums[right])){
      nums[right] = nums[right] * nums[right]
    } else {
      numAux = nums[left]
      nums[left] = nums[right]
      nums[right] = numAux * numAux
    }
    right -= 1
  }
   nums[left] =  nums[left] *  nums[left]
  return nums
}

function squaresSortedB(nums: number[]){
  let left = 0, right = nums.length - 1;
  
  const arrAux = []
  let square;
  
  for (let i = nums.length - 1; i >= 0; i--){
    if(Math.abs(nums[left]) < Math.abs(nums[right])){
      square = nums[right]
      right -= 1
    } else {
      square = nums[left]
      left += 1
    }
    arrAux[i] = square * square
  }
  
  return arrAux
}

function isSubsequence(s, t){
  let left = 0
  let right = 0;
  
  while(left < s.length && right < t.length){
    
    if(s[left] === t[right]){
      left += 1
    }
    right += 1
  }
  
  return left === s.length 
  
}

function reverseString(s){
  let left = 0, right = s.length - 1
  let aux;
  
  while(left < right){
    aux = s[left]
    s[left] = s[right]
    s[right] = aux
     
    left += 1
    right -= 1
  }
  
  return s

}
*/
