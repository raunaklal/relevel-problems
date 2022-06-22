/* 
Problem - 1
Write a program to create a Mathematical calculation table from 0 to given number n.
 */

function mathTable(t, n){
    for(let i = 0; i<=n; i++){
        console.log(`${t} * ${i} = ${t*i}`)
    }
}

mathTable(5,10)