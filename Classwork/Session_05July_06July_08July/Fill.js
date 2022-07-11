// /*
// Advance way to declare Matrix
// */

// let m = 5;
// let n = 5;

// // let arr = Array.from(Array(m), (x) => {
// //   return Array(n);
// // });

// // console.log(arr.length,arr[0].length);

// let arr = Array.from(Array(m), (x) => {
//   console.log(x);
// });

// let stringName = "Raunak";
// let arr2 = Array.from(stringName);
// console.log(arr2);

// let twoD = Array([1, 2, 3], [2, 3, 4], [6, 7, 8]);
// console.log(twoD);

// let twoDArray = Array(4)
//   .fill()
//   .map(() => Array(4));
// console.log(twoDArray);

//-----------------------------------------------------

//Fill
const fixedSizeArray = Array(5);
// console.log(fixedSizeArray);
// let sameValueArray = fixedSizeArray.fill(100);
// console.log(sameValueArray);
// fixedSizeArray.fill(100, 2);
fixedSizeArray.fill(100, 2, 4);
console.log(fixedSizeArray);

//From
//Used for creating array instance from another array
const R = 3,
  C = 4;
const value = 100;

let twoDArray = Array.from(Array(R), () => Array(C).fill(value));
console.log(twoDArray);
