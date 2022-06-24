/* 
Problem - 8
Given an integer n, write a function that returns the count of trailing zeroes in n!.
*/

function countTrailingZeros(num){
    if(n<0)
        return -1;
    let ans = 0;
    for (let i = 5; Math.floor(n/i) >= 1; i*=5)
        ans += Math.floor(n/i);
    return ans;
}

let n = 5;
console.log(`Count of trailing 0s in ${n} is ${countTrailingZeros(n)}`);
