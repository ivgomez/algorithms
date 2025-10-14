var findMaxLength = function(nums) {
  let maxLength = 0
  let count = -1
  const hashMap = new Map()
  hashMap.set(-1, 0)
  
  for(let right = 0; right < nums.length; right++){
    count += (nums[right] === 0 ? -1 : 1)  // Prefix sum. If array is [0, 1] it will be [0, 0, 1] and switching 0 by -1 => [-1, -2, 1]
    if(hashMap.has(count)){
      let left = hashMap.get(count)
      maxLength = Math.max(maxLength, right + 1 - left)
    } else {
      hashMap.set(count, right + 1)
    }
  }
  return maxLength
};

findMaxLength([0,1,0,0,1,0]) // 4
findMaxLength([0,1,0,0,1,0,1,1,1,1,0,0,0,1,1]) // Output 14
findMaxLength([0,1]) // Output 2
findMaxLength([0,1,0,0,1]) // Output 2
findMaxLength([0,1,1,1,1,1,0,0,0,1]) // Output 6
findMaxLength([0,1,1,1,0,0,0]) // Output 6
findMaxLength([1,0,0,1,1]) // Output 4


// Brute Force
/*var findMaxLength = function(nums) {
  let maxLength = 0
  let counter = 0
  
  for(let left = 0; left < nums.length; left++){
    let ones = 0
    let zeros = 0
    
    for(let right = left; right < nums.length; right++){
      if(nums[right] === 0){
        zeros++
      } 
      else {  
        ones++
      }
      
      if(ones === zeros){
        maxLength = Math.max(maxLength, ones + zeros)
      }
      counter++
    }
  }

  return maxLength
};*/