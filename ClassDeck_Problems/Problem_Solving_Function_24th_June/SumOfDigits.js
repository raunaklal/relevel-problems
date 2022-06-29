/* 
Sum of Digits
Problem Statement:
Given a positive number you need to write a program to find the sum of the inner digits of that
number.
Input - 2124
Output - 3
*/

function getInnerDigitSum(num) {
  let sum = 0;
  let rem = 0;
  let temp = Math.floor(num / 10);
  while (temp > 0) {
    rem = temp % 10;
    sum += rem;
    temp = Math.floor(temp / 10);
  }
  return sum - rem;
}

console.log(getInnerDigitSum(1));
console.log(getInnerDigitSum(12));
console.log(getInnerDigitSum(121));
console.log(getInnerDigitSum(2124));

/* 
//Solution provided in the Class Deck
function getCount(n) {
  var count = 0;

  while (n != 0) {
    count = count + 1;
    n = n / 10;
  }

  return count;
}

function getDigitSum(num) {
  var sum = 0;
  if (getCount(num) < 3) {
    return -1;
  }

  num = Math.floor(num / 10);
  sum = sum + num % 10;

  while (Math.floor(num / 100) != 0) {
    num = Math.floor(num / 10);
    sum = sum + num % 10;
  }
  return sum;
}

var n = 222314;
console.log(getDigitSum(n));
*/