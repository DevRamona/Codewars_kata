// Write a function in JavaScript that takes an array of strings combined with numbers as input and returns a new array containing the original string and the extracted numeric values from those strings.

// ```jsx
// const input = ["Hello123", "World456", "49", "Another789"];
// const output = extractWordsAndNumbers(input);

// // console.log(output);
// output: [  "Hello",123, "World", 456, 49, "Another", 789] // Expected output
// ```


const input = ["Hello123", "World456", "49", "Another789"];

const newFunc = (input) => {
    const outputArr = []
    for(const el of input) {
        let words = "";
        let numbers = "";
        for(let i = 0; i < el.length; i++) {
            const a = el[i];
            if(isNaN(a)) {
            words += a;
            } else {
                numbers += a;
            }
        }
        outputArr.push(words, parseInt(numbers ))
    }
    return outputArr;
};

console.log(newFunc(input))