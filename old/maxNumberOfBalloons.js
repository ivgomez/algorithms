var maxNumberOfBalloons = function(text) {
  const word = 'balloon'
  const hashMap = new Map()
  const output = 0
  let minSingleLetter = Infinity
  let minDoubleLetterRequired = 0
  for (const letter of text){
    if(word.includes(letter))
    hashMap.set(letter, (hashMap.get(letter) ?? 0) + 1)
  }
  if(hashMap.size === 5){
    for(const [key, value] of hashMap ){     
      if(key != 'l' && key != 'o'){
        minSingleLetter = Math.min(minSingleLetter, value)
      }
    }
    let totalO = hashMap.get('l') >= 2 ? hashMap.get('l') : 0
    let totalL = hashMap.get('o') >= 2 ? hashMap.get('o') : 0
    minDoubleLetterRequired = Math.floor((totalO < totalL ? totalO : totalL) / 2)
  }
  return minDoubleLetterRequired <= minSingleLetter ? minDoubleLetterRequired : minSingleLetter
};

maxNumberOfBalloons("leetcode") // Output 0
maxNumberOfBalloons("balllllllllllloooooooooon") // Output 1
maxNumberOfBalloons("ballon") // Output 0
maxNumberOfBalloons('balloonballooonn') // Output 2
maxNumberOfBalloons("nlaebolko") // Output 1
maxNumberOfBalloons("loonbalxballpoon") // Output 2
maxNumberOfBalloons('balon') // Output 0
maxNumberOfBalloons("nllbblooon") // Output 0 
maxNumberOfBalloons("krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw") // Output 10 