var getCommon = function(nums1, nums2) {
  let rightA = 0, rightB = 0, result = Infinity;
  
  while(rightA < nums1.length && rightB < nums2.length){
    
    if(nums1[rightA] === nums2[rightB]){
      result = Math.min(result, nums1[rightA])
      break;
    } 
    else if(nums1[rightA] < nums2[rightB]){
      rightA++
    }else {
      rightB++
    }
  }
  
  return result === Infinity ? -1 : result
};


getCommon([1,2,3],[2,4])
getCommon([1,2,3,6],[2,3,4,5])
getCommon([3, 6, 9],[2,4,5])
getCommon([9],[2,4,5])
getCommon([1],[1,4,5])