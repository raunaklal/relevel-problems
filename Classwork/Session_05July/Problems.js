//Write a program to print all the elements of 2d array, and multiply each element from 5

document.getElementById("title").innerHTML =
  "Write a program to print all the elements of 2d array, and multiply each element from 5";

let array2d = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

document.getElementById("array").innerHTML = "Input Array:" + array2d;
for (let i = 0; i < array2d.length; i++) {
  for (let j = 0; j < array2d[i].length; j++) {
    array2d[i][j] *= 5;
  }
}

console.log(array2d);
document.getElementById("result").innerHTML = "Input Array:" + array2d;