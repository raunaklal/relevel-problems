/* 
Problem - 6
Write a function that takes two parameters num and k and returns the value of Binomial
Coefficient
C(num, k)
*/

function comb(n, r) {
  if (r > n - r) r = n - r;
  if (r === 0) return 1;
  else {
    let val = 1,
      temp = 1;
    while (r > 0) {
      val *= n;
      temp *= r;
      n--;
      r--;
    }
    return val / temp;
  }
}
console.log(comb(6, 3));

function binomialCoefficient(num, k) {
  if (k > num) return 0;
  if (k == 0 || k == num) return 1;
  return binomialCoefficient(num - 1, k - 1) + binomialCoefficient(num - 1, k);
}
let num = 6,
  k = 3;
console.log(
  "Value of C(" + num + ", " + k + ") is " + binomialCoefficient(num, k)
);
