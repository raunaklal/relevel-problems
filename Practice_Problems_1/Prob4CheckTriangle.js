/* 
Problem - 4
Given the length of three line segments as a, b, and c., Find if they can form a triangle or not?
(Students are not expected to take any user input, solve the problem using hardcoded value)
 */

function isTriangle(a,b,c){
    if (
        a + b <= c ||
        b + c <= a ||
        a + c <= b
    )
        return false;
    else
        return true;
}

let a,b,c;
a = 7
b = 10
c = 5
console.log(isTriangle(a,b,c) ? 'Triangle' : 'Not Triangle')