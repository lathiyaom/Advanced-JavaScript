console.log("Call Backs in js...");

function timer() {
  console.log("Running after the time...");
}
setTimeout(timer, 4000);

function fun(x, fn) {
  console.log(x);
  fn(x ** x);
}

fun(10, function ex(x) {
  console.log(x);
});
