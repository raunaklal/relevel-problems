//Write a program to print all the elements of 2d array, and multiply each element from 5

// document.getElementById("title").innerHTML =
//   "Write a program to print all the elements of 2d array, and multiply each element from 5";

let array2d = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// document.getElementById("array").innerHTML = "Input Array:" + array2d;
for (let i = 0; i < array2d.length; i++) {
  for (let j = 0; j < array2d[i].length; j++) {
    array2d[i][j] *= 5;
  }
}

// console.log(array2d);
// document.getElementById("result").innerHTML = "Input Array:" + array2d;

//-----------------------------------------------------------------------------
// We will be using the forEach loop for iterating the elements

// array2d.forEach((element) => {
//   console.log(element);
// });

// array2d.forEach((element) => {
//   element.forEach((ele) => {
//     console.log(ele);
//   });
// });

// array2d.forEach((element, mainIndex) => {
//   element.forEach((nestedElements, nestedIndex) => {
//     console.log(nestedElements, `Index is (${mainIndex},${nestedIndex})`);
//   });
// });

//--------------------------------------------------------------------------------------
//Spiral Matrix printing
let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
// let m = matrix.length;
// let n = matrix[0].length;
// let i = 0,
//   j = n - 1,
//   k = n - 1,
//   l = m - 1;
// let ctr = 0;
// // i += ctr;
// while (i < n) {
//   console.log(matrix[0][i]);
//   i++;
// }
// // ctr++;
// // j+=ctr;
// ctr = 0;
// while (j < m) {
//   console.log(matrix[ctr][j]);
//   ctr++;
// }

//-----------------------------------------------------------------------------------------------
//Explode Bombs Problem
/* 
let matrix = [
  [0, 0, 0],
  [0, -1, 0],
  [0, -1, 0],
];

// let finalMatrix = [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0],
// ];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[0].length; j++) {
    if (matrix[i][j] === -1) {
      if (i - 1 >= 0 && matrix[i - 1][j] !== -1) matrix[i - 1][j]++;
      if (j - 1 >= 0 && matrix[i][j - 1] !== -1) matrix[i][j - 1]++;
      if (i + 1 < matrix.length && matrix[i + 1][j] !== -1) matrix[i + 1][j]++;
      if (j + 1 < matrix[0].length && matrix[i][j + 1] !== -1)
        matrix[i][j + 1]++;
    }
  }
}
matrix.forEach((element) => {
  console.log(element);
});
 */
//---------------------------------------------------------------------------------------
//Transpose Matrix
/* 
let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let mat_T = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

for (let i = 0; i < mat.length; i++) {
  for (let j = 0; j < mat[0].length; j++) {
    mat_T[i][j] = mat[j][i];
  }
}
mat_T.forEach((element) => {
  console.log(element);
});
 */

function spiral(matrix) {
  const arr = [];

  while (matrix.length) {
    arr.push(
      ...matrix.shift(),
      ...matrix.map((a) => a.pop()),
      ...(matrix.pop() || []).reverse(),
      ...matrix.map((a) => a.shift()).reverse()
    );
  }
  console.log(arr);
  return arr;
}
matrix.forEach((ele) => {
  console.log(ele);
});
spiral(matrix);
