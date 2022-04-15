// const findLongest = ['"hey", "jalissa"]


function longestStringForLoop(arr) {
  let word = "";
  for (let i = 0; i < arr.length; i++) {
    if (word.length < arr[i].length) {
      word = arr[i];
    }
  }
  return word;
}

 
console.log(longestStringForLoop(['jalissa', 'cookie', 'hello']).length);

//o(n)