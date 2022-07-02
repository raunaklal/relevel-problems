//BubbleSort
/* 
@description
*/

function swap(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
}

// let a = 1,
//   b = 4;
// console.log(a, b);
// swap(a, b);
// console.log(a, b);

function BubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        array[j] = array[j] + array[j + 1];
        array[j + 1] = array[j] - array[j + 1];
        array[j] = array[j] - array[j + 1];
      }
    }
  }
}

let arr = [5, 4, 6, 3, 1, 2];
console.log(arr);
BubbleSort(arr);
console.log(arr);
