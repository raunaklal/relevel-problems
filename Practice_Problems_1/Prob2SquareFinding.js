/* 
Problem - 2
Write a program to find the square of given number from 0 to n.
 */

function findSquare(num){
    for (let i =0;i<=num;i++){
        console.log(`Square of ${i} is ${i*i}`);
    }
}

findSquare(15);