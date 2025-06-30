let n1 = 28;
let n2 = 243;
let ans = -1;
for (let j = 2; j < Math.min(n1, n2); j++) {
  if (n1 % j == 0 && n2 % j == 0) {
    ans = j;
  }
}
console.log(ans);
