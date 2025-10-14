const getAverages2 = function(nums, k){
  const result = [];
  let left = 0
  let right = 0;
  
  for(let i = 1; i < nums.length; i++){
    nums[i] += nums[i-1]
    left = i - k;
    right = i + k;
    
    if(left < 0 || right > nums.length - 1){
       result.push(-1)
     } else {
       let avg = (right - left) + 1
       let newItem = Math.floor((nums[right] - nums[left] + nums[left]) / avg)
       console.log('left',left, 'right', right, 'avg',avg, 'newItem', newItem, '|')
       result.push(newItem)
     }
   }
  
  return `[${nums}]  <->  [${result}]` 
}

 const getAverages = function(nums, k) {
  
   const result = [];
   let left = 0
   let right = 0;
  
   for(let i = 1; i < nums.length; i++){
     nums[i] += nums[i-1]
   }
   
   for(let i = 0; i < nums.length; i++){
     
     left = i - k;
     right = i + k
     
     if(left < 0 || right > nums.length - 1){
       result.push(-1)
     } else {
       console.log("left", left, 'right', right, "|")
       result.push(Math.floor((nums[right]) / (right + left) + 1
   
      
   return  result
 }
 
 
 
 //getAverages2([7,4,3,9,1,8,5,2,6], 3)
 getAverages([7,4,3,9,1,8,5,2,6], 3)