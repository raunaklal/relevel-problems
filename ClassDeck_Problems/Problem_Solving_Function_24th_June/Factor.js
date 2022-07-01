/* 
Factor
Problem Statement:
Given a number A you are supposed to take the digits of that number, and find a permutation such
that 60 becomes a factor of that permutation. If there exists such a permutation then return 1 else 0.
Input - 2340
Output - 1

*/

let factorOf60 = function (num) {
  let sum = 0;
  let temp = num;
  let lastDigit = false,
    secondLastDigit = false;
  while (temp > 0) {
    let dig = temp % 10;
    // console.log(dig);
    if (!lastDigit && dig === 0) lastDigit = true;
    if (!secondLastDigit && dig % 2 === 0) secondLastDigit = true;
    sum += dig;
    temp = Math.floor(temp/10);
  }
  if (lastDigit && secondLastDigit && sum % 3 === 0) return 1;
  else return 0;
};

console.log(`${factorOf60(2340)}`);