"use strict";
//Q1.-> We want to get second Highest Value in the Array
document.getElementById("title").innerHTML =
  "Second Highest Value in the Array";

let temp = [1, 3, 4, 5, 4, 3, 5];
document.getElementById("array").innerHTML = "Input Array:" + temp;
temp = temp.sort();
console.log(temp);
console.log(temp.at(-2));

let uniqueSortedArray = new Set(temp);
console.log(uniqueSortedArray);
console.log([...uniqueSortedArray]); // ... destructuring the object
uniqueSortedArray = [...uniqueSortedArray];
console.log(uniqueSortedArray.at(-2));

let ans;
if (uniqueSortedArray.length <= 1) ans = "None";
else ans = uniqueSortedArray.at(-2);

document.getElementById("result").innerHTML = `Answer: ${ans}`;

//Q2-> Write a function to return all the values in array which is divisible by 7
/**
 * Q - 2 write a function to
 * return all the values in array which is divisible by 7
 * eg - [32,34,56,21,49,11,34]
 * Ans = - [21,49,56]
 */
 document.getElementById("title2").innerHTML =
 "Divisible by 7";
let array = [32, 34, 56, 21, 49, 11, 34];
document.getElementById("array2").innerHTML = "Input Array:" + array;
function divBy7(arr) {
    return arr.filter((ele) => {
        return ele % 7 === 0;
      });
}
ans = divBy7([32,34,56,21,49,11,34])
// console.log(ans);
document.getElementById("result2").innerHTML = `Answer: ${ans}`;

/**
 * Q - 3 write a function to
 * return all the values in array which is divisible by n
 * eg - [32,34,56,21,49,11,34,30] 6
 * Ans = - [30]
 *
 * eg -2 -  [23,34,56,43,16,24,81,18] n = 9
 * o/p [81,18]
 */

/* 
1. Take an array and n as input.
2. We perform filter on the array,such that, element is divisible by n,
    i.e, ele%n===0. If its true we return the element
*/
document.getElementById("title3").innerHTML =
"Divisible by N";
function divByN(arr,n) {
    return arr.filter((ele) => {
        return ele % n === 0;
      });
}
array = [32,34,56,21,49,11,34,30]
document.getElementById("array3i").innerHTML = "Input Array:" + array;
let n  =6;
ans =divByN(array,6)
// console.log(ans);
document.getElementById("result3i").innerHTML = `Answer: ${ans}`;
array = [23,34,56,43,16,24,81,18]
document.getElementById("array3ii").innerHTML = "Input Array:" + array;
n  =9;
ans =divByN(array,n)
document.getElementById("result3ii").innerHTML = `Answer: ${ans}`;
// console.log(ans);

