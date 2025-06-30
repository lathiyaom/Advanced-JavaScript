// console.log("Hw");
// setTimeout(function exec() {
//   console.log("Timer done");
// }, 0);
// console.log("END");

let count = 0;
let y = setInterval(function exec() {
  count++;
  console.log(count);
  if (count == 10) {
    clearInterval(y);
  }
}, 2000);
