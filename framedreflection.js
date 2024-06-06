// 100th Kata
// You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

// 'Hello World'

// would give:


// Words in your solution should be left-aligned.


// STILL WORKING ON IT


function mirror(text){
    const newLength = text.length + 4;
    const borderLine = "*".repeat(newLength);
  const newText = text.split("").reverse().join("");
    const paddingLine = `*${newText}*`;
    
  return `${borderLine}\n${paddingLine}\n${borderLine}`
  }
