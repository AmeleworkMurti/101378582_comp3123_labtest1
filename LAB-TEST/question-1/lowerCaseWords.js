const lowerCaseWords = (mixedArray)=>{
    return new Promise ((resolve,rehject) =>{
        try{
            if(!Array.isArray(mixedArray)){
                reject("Input must be an array")
            }
const filterdArray = mixedArray.filter(item => typeof item ==="string").map(word =>word.toLowerCase());        
        
resolve(filterdArray);
        } catch(error){
            reject(error);
        }

    });
};

//input could be like this for example
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

//to run the function
lowerCaseWords(mixedArray)
.then(result => console.log(result))
.catch(error => console.error(error));