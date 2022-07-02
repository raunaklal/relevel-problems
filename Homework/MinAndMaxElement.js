/* 
Problem – Given an array of numbers. Your task is to find the minimum and maximum 
element. For example –
Input – [2,3,15,6]
Output –
Minimum element - 1
Maximum element - 15
*/

let numArray = [2, 3, 15, 6, 7, 16, 8];

function min_max(arr) {
  let max = (min = arr[0]);

  /* // Using for loop
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
    if (min > arr[i]) min = arr[i];
  } */

  //Using forEach loop
  arr.forEach((ele, i, arr) => {
    if (max < arr[i]) max = arr[i];
    if (min > arr[i]) min = arr[i];
  });

  return { min, max };
}

let ans = min_max(numArray);
console.log(ans);
document.getElementById("array").innerHTML = `Array: ${numArray}`;
document.getElementById(
  "print"
).innerHTML = `Max: ${ans.max} </br>Min: ${ans.min}`;
