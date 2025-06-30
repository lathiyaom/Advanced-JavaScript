console.log(null == undefined);

console.log(12 == "12");

console.log(true == "0");

console.log(NaN == NaN); 

let obj = {
  x: 10,
  valuesOf() {
    return 100;
  },
};

console.log(100 == obj);
