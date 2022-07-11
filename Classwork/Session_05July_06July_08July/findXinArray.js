/* 
Problem - 4
Given a 2D array where the value of any row element is greater than the previous row. Our task is to find if element x is present in
the array
Input:
A=[ [2, 14, 15, 16],
    [7, 18, 20, 22],
    [8, 21, 23, 24],
    [10, 26, 27, 28] ]
Output:
*/

let array = [
  [2, 14, 15, 16],
  [7, 18, 20, 22],
  [8, 21, 23, 24],
  [10, 26, 27, 28],
];

const findMaxInRow = (matrix = []) => {
  for (let i = 0; i < matrix.length; i++) {
    const MAX_VALUE_LIST = [];
    for (let j = 1; j < matrix[i].length; j++) {
      if (guessNumber === matrix[j][i]) {
        return [j, i];
      }
      //  check with his solution
      //  if(MAX_VALUE < matrix[j][i]){
      //         MAX_VALUE = matrix[j][i];
      //   }
    }
  }
  return true;
};
console.log(findXinArray(array, 21));
