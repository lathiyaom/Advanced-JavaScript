//Higher order functions
function fun(fn) {
  console.log("Ok Another functions is starting to run..");
  fn();
}

function Gun() {
  console.log("This is from Another functions gun...");
}

fun(Gun);

let arr = [1, 11, 111, 12, 3, 2, 33, 4, 100, 10000, 100];
arr.sort();
console.log(arr);

let arr2 = [1, 5, 4, 3, 2, 4, 6, 6, 100, 10, 2000];
arr2.sort(function (a, b) {
  return a - b;
});

console.log(arr2);
