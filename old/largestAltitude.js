var largestAltitude = function(gain) {
  let highest = 0, sum = 0;
  
  for (let i = 0; i < gain.length; i++){
    sum += gain[i]
    highest = Math.max(highest, sum)
  }
  
  return highest
};

largestAltitude([-5,1,5,0,-7]) // Output 1
largestAltitude([-4,-3,-2,-1,4,3,2]) // Output 0