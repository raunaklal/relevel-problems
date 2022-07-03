"use strict";
document.getElementById("title").innerHTML =
  "Second Highest Value in the Array";

let temp = [1,3,4,5];

temp.sort();
console.log(temp);
console.log(temp.at(-2));