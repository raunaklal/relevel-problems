function push(arr, value) {
  arr[arr.length] = value;
}

function pop(arr) {
  if (arr.length === 0) return "No elements";
  let ele = arr[arr.length - 1];
  arr.length -= 1;
  return ele;
}

let arr = [1,2,3,4];
push(arr,5)
console.log(arr);
last = pop(arr)
console.log(last);
console.log(arr);