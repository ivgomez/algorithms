var reverseOnlyLetters = function(s:string) {
  const arr = s.split('')
  let left = 0, right = arr.length - 1, aux = '';
  
  function isLetter(letter: string){
     const code = letter.charCodeAt(0)
     return (code >= 65 && code <= 90) || (code >= 97 && code <= 122)      
  }
  
  while(left < right){
    if(!isLetter(arr[right])){
      right--
    } 
    
    if(!isLetter(arr[left])){
      left++
    } 
    
    if(isLetter(arr[right]) && isLetter(arr[left])) {
      aux = arr[right]
      arr[right] = arr[left]
      arr[left] = aux
    
      left++
      right--
    } 
  }
  
  return arr.join('');
};

reverseOnlyLetters('7_28]')

/*
Example 1:

Input: s = "ab-cd"
Output: "dc-ba"
Example 2:

Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
Example 3:

Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"

*/

/*function reverseWordsInPlace(s) {
    let arr = s.split('');
  // Convertimos string en array mutable
    let n = arr.length;

    function reverse(start, end) {
        while (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    let start = 0;
    for (let i = 0; i <= n; i++) {
        if (i === n || arr[i] === ' ') { 
            reverse(start, i - 1);
            start = i + 1;
        }
    }

    return arr.join(''); // Convertimos de nuevo a string
}

console.log(reverseWordsInPlace("Let's take LeetCode contest"));*/


/*var reverseWords = function(s){
  let wordArray = s.split(' ')
  let result = []
  
  for (let i = 0; i < wordArray.length; i++) {
    let right = wordArray[i].length - 1;
    let aux = '';
    while(right >= 0){
      result.push(wordArray[i][right])
      right --
    }
    
    if(wordArray[i] != wordArray[wordArray[i.length - 1]]) 
    result.push(' ')
    
  }
  
  return result.join('')
}*/

//reverseWords("Let's take LeetCode contest")

/*var reverseWords2 = function(s) {
  
  let arr = s.split(' ')
  let result = []
  
  for(let w of arr) {
    let right = w.length - 1
    let acc = ''
    while(right >= 0){
      result.push(w[right])
      right--
    }
    if(w !== arr[arr.length - 1])
    result.push(' ')
  }
  
  return result.join('')
}*/



//reverseWords2("Mr Ding")







