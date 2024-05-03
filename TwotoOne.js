// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


function longest(s1, s2) {
    let firstStr = [...new Set(s1.split(''))];
   let secondStr = [...new Set(s2.split(''))];
   
   for(let i= 0; i <secondStr.length ; i++) {
     firstStr.push(secondStr[i]);
   };
   
   let combinedStr = [...new Set(firstStr)];
   let sortedStr = combinedStr.sort().join('');
   return sortedStr;
 };