/*var findWinners = function(matches) {
    
  let winner = new Set()
  let loser = new Map()
  let loserResult = []
  let winnerResult = []
  for(const match of matches){
    winner.add(match[0])
    loser.set(match[1], (loser.get(match[1]) ?? 0) + 1)
  }
  
  winner.forEach((key) => {
    if(loser.has(key)){
      winner.delete(key)
    }else
      winnerResult.push(key)
  })
  
  loser.forEach((_, key) => {
    if(loser.get(key) > 1){
      loser.delete(key)
    }else
      loserResult.push(key)
  })
  
  return [winnerResult.sort((a,b) => a - b), loserResult.sort((a,b) => a - b)]
};*/

var findWinners = function(matches){
  let result = [[],[]]
  let counterArray = Array(1001).fill(-1)
  
  for(const match of matches){
    const winner = match[0], loser = match[1]
    if(counterArray[winner] === -1){
      counterArray[winner] = 0
    } 
    if(counterArray[loser] === -1){
      counterArray[loser] = 1
    } else {
      counterArray[loser] += 1
    }
  }
  
  for(let i = 0; i < counterArray.length; i++){
    if(counterArray[i] === 0){
      result[0].push(i)
    }
    if(counterArray[i] === 1){
      result[1].push(i)
    }
  }
  return result
}

findWinners([[2,3],[1,3],[5,4],[6,4]])
findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]])
findWinners([[2,3],[1,3],[5,4],[6,4]])


/*
var findWinners = function(matches) {
  let winner = new Map()
  let loser = new Map()
  let loserResult = []
  let winnerResult = []
  for(const match of matches){
    for (let players = 0; players < match.length; players++){
     if (players === 0){
      winner.set(match[players], (winner.get(match[players]) ?? 0) + 1)
     }
     else 
      loser.set(match[players], (loser.get(match[players]) ?? 0) + 1)
    }
  }
  for(const [key, val] of winner){
    if(loser.has(key)){
      winner.delete(key)
    }else
      winnerResult.push(key)
  }
  
  for(const [key, val] of loser){
    if(loser.get(key) > 1){
      loser.delete(key)
    }else
      loserResult.push(key)
  }

  return [winnerResult.sort((a,b) => a - b), loserResult.sort().sort((a,b) => a - b)]
};
*/