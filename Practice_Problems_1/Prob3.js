/* 
Problem - 3
Given `n` pieces of sweet, help Peter and John divide it among themselves such that both get an
equal number of sweets. Note that the sweet can not be broken into sub-pieces. You have to tell if it
is possible to make such distribution or not based upon n number of pieces. I.e., possible outputs:
`yes` or `no.`
*/

function check(n){
    return (
        n < 2 ? false : (n%2===0 ? true :false)
    )
}
console.log(check(7)?'YES' : 'NO');
console.log(check(74)?'YES' : 'NO');
console.log(check(0)?'YES' : 'NO');
console.log(check(1)?'YES' : 'NO');