// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.


function isPalindrome(x) {
    const lowerX = x.toLowerCase()
    const newStr = lowerX.split("").reverse().join("")
    if(lowerX !== newStr) {
      return false;
    } else {
      return true;
    }
    // your code here
  }

  