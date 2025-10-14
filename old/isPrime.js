//[...Array(10)].map((_, index)=> index)

function fnEsPrimo(num=1){
  if (num<=1) return false 
  let esPrimo= true;
  
  for(let i=2; i<=9; i ++){
    if(num % i === 0 && num !== i) {
      esPrimo = false
      break
    }
  }
  
  return esPrimo
}

fnEsPrimo(121)

Math.sqrt(11);
