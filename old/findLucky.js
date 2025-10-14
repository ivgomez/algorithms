var findLucky = function(arr) {
  const hashMap = new Map()
  let result = -1
  for(const num of arr){
    hashMap.set(num, (hashMap.get(num) || 0) + 1 )
  }
  hashMap.forEach((value, key) => {
    if(value === key){
      result = Math.max(result, value)
    }
  })
  return result
};

findLucky([2,2,3,4]) // Output 2
findLucky([1,2,2,3,3,3]) // Output 3
findLucky([2,2,2,3,3]) // Output -1