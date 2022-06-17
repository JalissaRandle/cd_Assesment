function hasUniqueChars(str) {
    for (let i = 0; i < str.length - 1; i++) {
        for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j]) {
            console.log('false')
        }
        }
    }
    console.log('true');
}

hasUniqueChars('boo')

// O(n^2) 