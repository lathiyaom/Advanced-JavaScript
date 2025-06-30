function* fetchNextElement() {
  console.log("inside generator");
  const x = 10;
  console.log(yield 11);
  console.log("Entering after a yield ");
  const y = x + (yield 30);
  console.log("Value of y is ", y);
}

console.log("start");
const iter = fetchNextElement();
console.log("Called generator");
console.log("first", iter.next(1));
console.log("second", iter.next(2));
console.log("third", iter.next());
