// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.


function diamond(n) {
    if (n <= 0 || n % 2 === 0) {
      return null; 
    }
  
    let diamondStr = '';
    const midPoint = Math.floor(n / 2);
  
    for (let i = 0; i < n; i++) {
      const lineLength = Math.abs(midPoint - i);
      const asterisks = '*'.repeat(n - 2 * lineLength);
      const spaces = ' '.repeat(lineLength);
      diamondStr += spaces + asterisks + '\n';
    }
  
    return diamondStr;
  }