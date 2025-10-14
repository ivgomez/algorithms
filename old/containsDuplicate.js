var containsDuplicate = function(nums) {
  const hashMap = new Map()
  
  for(const num of nums){
    if(hashMap.has(num)){
      return true
    }
    hashMap.set(num, (hashMap.get(num) || 0) + 1)
  }
  return false
};

containsDuplicate([1,2,3,1]) // true
containsDuplicate([1,2,3,4]) // Output: false
containsDuplicate([1,1,1,3,3,4,3,2,4,2]) // Output: true