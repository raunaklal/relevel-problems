/* 
Given 3 numbers. You need to find the smallest of three numbers without using comparison
operators
Input -> 12,44,2
Output -> 2
*/

let c = 0;
let num = [12, 44, 2];
while (num[0] && num[1] && num[2]) {
  num[0]--;
  num[1]--;
  num[2]--;
  c++;
}
console.log(c);

c = 0;
function findSmallestWithoutComparisonOperator(num1, num2, num3) {
  while (num1 && num2 && num3) {
    num1--;
    num2--;
    num3--;
    c++;
  }
  return c;
}
console.log(findSmallestWithoutComparisonOperator(12, 44, 22));
