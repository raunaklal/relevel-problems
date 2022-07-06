/* 
Problem - 2
Given a 2D array of size MxN, you need to display N integers which
denotes the column wise addition of the 2D array
Input:
M=4,N=3
3,4,5
3,4,2
2,3,4
4,4,4
Output:
12,15,15
*/

let array = [
  [3, 4, 5],
  [3, 4, 2],
  [2, 3, 4],
  [4, 4, 4],
];
let ans = Array(array[0].length);
for (let i = 0; i < array[0].length; i++) {
  ans[i] = 0;
  for (let j = 0; j < array.length; j++) {
    ans[i] += array[j][i];
  }
}
console.log(ans);

let arraySum = array.reduce((arr1, arr2) =>
  arr1.map((sum, id) => sum + arr2[id])
);
console.log(arraySum);