/* 
Problem – Given an array denoting the cost of stock on different days. 
Your task is to find the maximum profit which can be earned after buying 
or selling the stock on that particular day. For example –
Input – {100, 180, 260, 310, 40, 535, 695}
Output – 865 (Buy stock on Day 0 and sell it on Day 3 and again buy on 
Day 4 and sell on Day 6)
*/

let input = [100, 180, 260, 310, 40, 535, 695];
document.getElementById("array").innerHTML = `Cost of Stocks: [${input}]`;


//Naive approach - Incomplete

let profit = 0;
for(let i = 0; i<input.length;i++){
    for(let j = i+1;j<input.length;j++){
        profit = Math.max(input[j]-input[i],profit);
        console.log(input[j],input[i],profit);
    }
}

document.getElementById("print").innerHTML = `Profit: ${profit}`;