function isPalngram(word) {
    let j = word.length - 1
    for (let i = 0; i < (word.length - 1) / 2; i++) {
      if (word[i] !== word[j]) {
        return false
      }
      j--
    }
    return true
  }
  // o(n)

  function isPalngram(str){
      let alplabet = 'abcdefghijklnopqrstuvwxyz'
      let regex = /\s/g;
      let lowercase = str.toLowerCase.replace(regex, "")
      console.log(lowecase, "original", str)

      for(let i = o; i < alplabet.length; i++){
          if(lowercase.indexOf(alplabet[i]) === -1){
              return false
          }
      }
      return true
  }

  isPalngram("the dog took a walk")