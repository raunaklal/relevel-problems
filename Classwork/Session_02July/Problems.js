// function reverseArray(array) {
//   let i = 0;
//   let j = array.length - 1;

//   while (i < j) {
//     let temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;

//     i++;
//     j--;
//   }
// }

// function reverse(arr) {
//   return arr.length < 2 ? arr : [arr.pop()].concat(reverse(arr));
// }

// let list = [10, 5, 7, 8, 9];
// console.log(list);
// document.getElementById("array").innerHTML = list;
// // reverseArray(list);
// // console.log(list);
// // document.getElementById("result").innerHTML = list;

// list = reverse(list);
// console.log(list);
// document.getElementById("result").innerHTML = list;

//[1,2,356,-12,-12,-34]
function shiftNegative(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < arr.length && j > 0 && i < j) {
    // console.log(arr[i],arr[j]);
    if (arr[i] >= 0) {
      i++;
    } else {
      // [arr[i], arr[j]] = [arr[j], arr[i]];
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j--;
      // console.log(arr,i,j);
    }
  }
  return arr;
}

document.getElementById("title").innerHTML = 'Shift Negative Elements';
list = [-5, 3, -4, 88, -9, -10, 21, 5, 6];
console.log(`Initial: \n${list}`);
document.getElementById("array").innerHTML = `Initial: </br>${list}`;
let ans = shiftNegative(list);
console.log(`Final: \n${ans}`);
document.getElementById("result").innerHTML = `Final:</br> ${ans}`;

