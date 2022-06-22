/* 
Problem - 7
Given a number n, calculate n!
*/

function factorial(n){
    if (n==0 || n==1)
        return 1;
    else
        return n * factorial(n-1);
}

console.log(factorial(3))
console.log(factorial(5))