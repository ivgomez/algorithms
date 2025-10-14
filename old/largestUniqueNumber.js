var largestUniqueNumber = function(nums) {
  const hashMap = new Map()
  let answer = -1
  for(const num of nums){
    hashMap.set(num, (hashMap.get(num) ?? 0) + 1)
  }
  for(const [key, val] of hashMap){
    if(val === 1){
      answer = Math.max(answer, key)
    }
  }
  return answer
};


largestUniqueNumber([5,7,3,9,4,9,8,3,1]) // Output 8
largestUniqueNumber([9,9,8,8]) // Output -1