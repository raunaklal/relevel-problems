/* 
Given 2 numbers as input. You need to find if they have opposite signs or not.
Input -> +123, -12
Output -> true
*/

let a, b;

(a = 123), (b = -12);

function checkOpposite(a, b) {
  if (a + b < Math.abs(a - b)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkOpposite(a, b));
(a = 45), (b = 54);
console.log(checkOpposite(a, b));
