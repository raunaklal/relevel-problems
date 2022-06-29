/* 
Sum of Prime
Problem Statement:
Given a number A which is an even integer, you need to print two prime numbers whose sum will be
equal to A.
Constraint: A>2
Input - 4
Output - 2,2
*/

function isPrime(num){
    if(num<=1)
        return false;
    for(let i = 2; i<=Math.sqrt(num);i++){
        if(num%i === 0)
            return false;
    }
    return true;
}

function pairPrimes(N){
    for(let a = 2; a < N; a++){
        let b = N - a;
        if(isPrime(a) && isPrime(b))
            return [a,b];
    }
    return 'No Output';
}

console.log(pairPrimes(15));
console.log(pairPrimes(4));
console.log(pairPrimes(17));