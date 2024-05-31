// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

// Example
// scrollingText("codewars") should return:

// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]



function scrollingText(text){
    const newText = text.toUpperCase();
    const newArr = [];
    for(let i = 0; i <text.length; i++) {
      const rotateText = newText.slice(i) + newText.slice(0,i);
       newArr.push(rotateText);
    }
   
    return newArr;
  }