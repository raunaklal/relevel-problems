/* 
Power of a Number
Problem Statement:
Given two numbers A and B, You are supposed to find A to power B without using any built -in
function.
Input - num=10, power=2
Output - 100
*/

function xPowy(x, y) {
  if (y === 0) return 1;
  else if (y === 1) return x;
  else {
    let a = x * x;
    if (y % 2 === 0) return xPowy(a, Math.floor(y / 2));
    else return x * xPowy(a, Math.floor(y / 2));
  }
}

let x = 10;
let y = 4;
console.log(xPowy(x, y));
(x = 2), (y = 7);
console.log(xPowy(x, y));
