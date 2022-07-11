/* 
Problem - 5
Given a 2D array. Our task is to find the maximum element of each row
Input:
A=[ [2, 14, 15, 16],
    [7, 18, 20, 22],
    [8, 21, 23, 24],
    [10, 26, 27, 28] ]
Output:
16
22
24
28
*/

let array = [
    [2, 14, 15, 16],
    [7, 18, 20, 22],
    [8, 21, 23, 24],
    [10, 26, 27, 28],
  ];
  
  const findXinArray = (matrix = [], guessNumber = null) => {
    for (let i = 0; i < matrix.length; i++) {
      let MAX_VALUE = matrix[i][0];
      for (let j = 1; j < matrix[i].length; j++) {
        if(MAX_VALUE<matrix[i][j]){
          
        }
        //  check with his solution
        //  if(MAX_VALUE < matrix[j][i]){
                // MAX_VALUE = matrix[j][i];
        //   }
      }
    }
    return true;
  };
  console.log(findXinArray(array, 21));
  