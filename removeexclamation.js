// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


function removeExclamationMarks(s) {
    let newString = s.split("!").join("");
    return newString;
  }