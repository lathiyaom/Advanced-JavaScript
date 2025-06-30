for (const val of [1, 2, 3, 4, 5, 6]) {
  console.log(val);
}

function makeIterators(start = 0, end = Infinity, stepSize = 1) {
  let nextStart = start;
  let iterationCount = 0;
  return {
    next() {
      if (iterationCount < end) {
        const result = {
          value: nextStart,
          done: false,
        };
        nextStart = nextStart + stepSize;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    },
  };
}

const myIterator = makeIterators(1, 10, 1);

let result = myIterator.next();
while (!result.done) {
  console.log(result.value);
  result = myIterator.next();
}

function* makeMyIteatorNew(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

const one = makeMyIteatorNew(1, 60);
for (const val of one) {
  console.log(val);
}
