function inc(n) {
  return n + 1;
}

const a = 5;
const b = inc(a);

console.dir({ a, b }); 
// { a: 5, b: 6 } — исходное значение a не изменилось
