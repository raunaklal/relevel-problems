/* 
Problem - 5
Write a function that takes two numbers x and y and calculates x^y
 */

/* function xPowy(x,y){
    let ans = 1;
    for(let i = 0; i < y; i++){
        ans *= x;
    }
    return ans;
} */

function xPowy(x,y){
    if(y===0)
        return 1;
    else if (y===1)
        return x;
    else{
        let a = x*x;
        if(y%2===0)
            return xPowy(a,Math.floor(y/2));
        else
            return x * xPowy(a,Math.floor(y/2));
    }
}

let x = 4;
let y = 4;
console.log(xPowy(x, y));
x = 2, y = 7;
console.log(xPowy(x, y));

// console.log(2**10);