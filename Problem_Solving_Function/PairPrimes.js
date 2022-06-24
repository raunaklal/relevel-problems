// Problem 5
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

/* let num = 111;
let a = 2, b = num-a;
let flag = false;
while(a<b && a<num && b>2){
    if(isPrime(a) && isPrime(b)){
        console.log(a,b)
        flag = true;
        break
    }
    else{
        a++;
        b--;
    }
}
if(!flag)
    console.log('No answer') */