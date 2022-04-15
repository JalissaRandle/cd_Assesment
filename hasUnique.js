function hasuniquechars (str){
    let letters = {}

    for (let i = 0; i < str.length; i++){
        if(letters[str[i]] = 1){
            return false
        }else{
            letter[str[i]] = 1
        }   console.log(letter)
    }
    return true
}

console.log(hasuniquechars('monday'))
//o(n)