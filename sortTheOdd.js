// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


function sortArray(array) {
    const sortedArr = [];
    
    for(num of array) {
      if(num % 2 !== 0) {
        sortedArr.push(num);
      }
      
    }
    sortedArr.sort((a, b) => a - b);
    
    let a = 0;
    for(let i = 0; i < array.length; i++) {
      if(array[i] % 2 !== 0) {
        array[i] = sortedArr[a];
        a++;
      }
    }
    return array;
  };


  function longest(s1, s2) {
    let firstStr = [...new Set(s1.split(''))];
   let secondStr = [...new Set(s2.split(''))];
   
   for(let i= 0; i <secondStr.length ; i++) {
     firstStr.push([secondStr]);
   }
   
   let combinedStr = [...new Set(firstStr)];
   let sortedStr = combinedStr.sort().join('');
   return sortedStr;
 }