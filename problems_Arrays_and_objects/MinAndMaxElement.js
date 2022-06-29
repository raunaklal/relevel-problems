/* 
Problem – Given an array of numbers. Your task is to find the minimum and maximum element. For example –
Input – [2,3,15,6]
Output –
Minimum element - 1
Maximum element - 15
*/

let numArray = [2, 3, 15, 6];

let max = (min = numArray[0]);

for (let i = 1; i < numArray.length; i++) {
  if (max < numArray[i]) max = numArray[i];
  if (min > numArray[i]) min = numArray[i];
}
console.log(max, min);
document.getElementById("array").innerHTML = `Array: ${numArray}`;
document.getElementById("print").innerHTML = `Max: ${max} </br>Min: ${min}`;



// function show(stateArray) {
//   return stateArray.map((element, index) => {
//     return `${index} -  ${element}`;
//   });
// }

