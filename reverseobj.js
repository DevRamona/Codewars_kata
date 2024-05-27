// Write a function that takes an object as input and returns a new object with all the key-value pairs reversed (keys become values and values become keys)
 
// output: {"1": 'aa', "3": 'bf', "5": 'cq'} // 


const newObj = obj => {
    reverseObj = {};
    for(const [key, value] of Object.entries(obj)) {
        reverseObj[value] = key
    }
    return reverseObj;
}
const originalObj = {aa: "1", bf: "3", cq: "5"};
 const reversedObj = newObj(originalObj);
 console.log(reverseObj); 