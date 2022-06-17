//o(n)
function findLongestWord(array) {
    var longestWord = "";
  
    array.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word
      }
    });
  
    return longestWord
}

let word = findLongestWord(['billy', 'song', 'settings'])
