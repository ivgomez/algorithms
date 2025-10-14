var isPathCrossing = function(path) {
  const hashMap = new Set(["0,0"])
  let x = 0, y = 0;
  
  for(const point of path){
    switch(point){
      case 'N':
        y++
        break;
      case 'S':
        y--
        break;
      case 'E':
        x++
        break;
      case 'W':
        x--
        break;
    }
    
    if(hashMap.has(`${y},${x}`)){
      return true
    }
    hashMap.add(`${y},${x}`)
  }
  return false
};

isPathCrossing('SN') // Output: true
isPathCrossing('NESW') // Output: true
isPathCrossing('NES') // Output: false
isPathCrossing('SS') // Output: false
isPathCrossing('NNESSSW') // Output: false