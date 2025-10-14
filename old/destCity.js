var destCity = function(paths) {
  const hashMap = new Map()
  let noOrigin = ''
  
  for (const [origin, destiny] of paths) {
    hashMap.set(origin, destiny)
  }
  hashMap.forEach((val, key) => {
    if(!hashMap.has(val)){
      noOrigin = val
    }
  })
  return noOrigin
};

destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]) // Output 'Sao Paulo'
destCity([["B","C"],["D","B"],["C","A"]]) // Output 'A'
destCity([["A","Z"]]) // Output 'Z'
destCity([["jMgaf WaWA","iinynVdmBz"],[" QCrEFBcAw","wRPRHznLWS"],["iinynVdmBz","OoLjlLFzjz"],["OoLjlLFzjz"," QCrEFBcAw"],["IhxjNbDeXk","jMgaf WaWA"],["jmuAYy vgz","IhxjNbDeXk"]]) // Output 'wRPRHznLWS' 

/*var destCity = function(paths) {
  const hashMap = new Map()
  
  for (const [origin, destiny] of paths) {
    hashMap.set(origin, destiny)
  }

   for (const [origin, destiny] of paths) {
    if(!hashMap.has(destiny)){
      return destiny
    }
  }
};*/