var equalSubstring = function(s, t, maxCost) {
  let left = 0, cost = 0, result = 0;
  
  for (let right = 0; right < s.length; right ++) {
    cost += Math.abs(s.charCodeAt(right) - t.charCodeAt(right))

    if(cost <= maxCost){
      result = Math.max(result, right - left + 1);
    } 
    
    if(cost > maxCost){
      cost -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left))
      left ++
    }
     
  }
  
  return result;
};


equalSubstring('abcd','bcdf',3) // Output 3
equalSubstring('abcd','cdef',3) // Output 1
equalSubstring('abcd','acde',0) // Output 1

//'abcd'.charCodeAt()