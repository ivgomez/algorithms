var numSubarraysWithSum = function(nums, goal) {
  const hasMap = new Map([[0,1]])
  let answer = 0, sum = 0
  
  for(const num of nums){
    sum += num
    answer += hasMap.get(sum - goal) || 0
    hasMap.set(sum, (hasMap.get(sum) || 0) + 1)
  }
  return answer
};

numSubarraysWithSum([1,0,1,0,1],2) // Output 4
numSubarraysWithSum([0,0,0,0,0],0) // Output 15