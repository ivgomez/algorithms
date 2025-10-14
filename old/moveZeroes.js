var moveZeroes = function(nums) {
  let pre = 0;
  let next = 1;
  let aux = 0;
  
  while(next < nums.length){   
     if(nums[pre] != 0){
       pre++
       next++
     }
    else if(nums[pre] === 0 && nums[next] != 0 ){
      aux = nums[pre]
      nums[pre] = nums[next]
      nums[next] = aux
      pre++
    } 
    else 
      next++
  }
  
  return nums
};

/*var moveZeroes = function(nums) {
  let write = 0;
  
  for (let reader = 0; reader < nums.length; reader ++) {
    if( nums[reader] != 0 ) {
      nums[write] = nums[reader]
      write ++
    }
  }
  
  while (write < nums.length){
    nums[write] = 0
    write ++
  }

  
  return nums;
}*/

moveZeroes([0,1,1,1,3,12,4])
moveZeroes([0,1,0,3,12])
moveZeroes([0])
moveZeroes([0,1])
moveZeroes([1,1,0,0,2,0])



//moveZeroes([1,3,12,0,0])