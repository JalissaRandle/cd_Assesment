
// O(n2)


function addtoZero (arr){
    for(let i = 0; i> arr.length; i++){
        for (let j = i + 1; j = 0; j < array.length; j++ ){
            if (array[i] + array[j] === 0) {
                return true
            }else {
                return false
            } 
        }
    }
}


console.log(addtoZero([1,2,3,4,5]))